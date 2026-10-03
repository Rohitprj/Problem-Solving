// Works with mock.shop (demo) or your real Shopify store (Storefront API).
// Toggle with EXPO_PUBLIC_USE_MOCK in .env

const USE_MOCK = process.env.EXPO_PUBLIC_USE_MOCK !== "false";
const DOMAIN = (process.env.EXPO_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "")
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");
const VERSION = process.env.EXPO_PUBLIC_SHOPIFY_API_VERSION ?? "2025-01";
const TOKEN = process.env.EXPO_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ?? "";

const ENDPOINT = USE_MOCK
  ? "https://mock.shop/api"
  : `https://${DOMAIN}/api/${VERSION}/graphql.json`;

export type Money = { amount: string; currencyCode: string };
export type Variant = {
  id: string;
  title: string;
  price: Money;
  availableForSale?: boolean;
  selectedOptions?: { name: string; value: string }[];
};
export type Product = {
  id: string;
  title: string;
  handle: string;
  description: string;
  vendor?: string;
  availableForSale?: boolean;
  featuredImage?: { url: string } | null;
  priceRange: { minVariantPrice: Money };
  variants: { edges: { node: Variant }[] };
};
export type Collection = {
  id: string;
  title: string;
  handle: string;
  image?: { url: string } | null;
};

async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  if (!USE_MOCK && (!DOMAIN || !TOKEN)) {
    throw new Error(
      "Missing EXPO_PUBLIC_SHOPIFY_STORE_DOMAIN or EXPO_PUBLIC_SHOPIFY_STOREFRONT_TOKEN in .env",
    );
  }
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (!USE_MOCK) headers["X-Shopify-Storefront-Access-Token"] = TOKEN;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors) {
    const first = Array.isArray(json.errors) ? json.errors[0] : json.errors;
    throw new Error(first?.message ?? "GraphQL error");
  }
  return json.data as T;
}

// Same fields your web app queries (trimmed to what the app uses)
const PRODUCT_FIELDS = `
  id title handle description vendor availableForSale
  featuredImage { url }
  priceRange { minVariantPrice { amount currencyCode } }
  variants(first: 50) {
    edges { node { id title availableForSale selectedOptions { name value } price { amount currencyCode } } }
  }
`;

export async function getProducts(): Promise<Product[]> {
  const data = await shopifyFetch<{ products: { edges: { node: Product }[] } }>(
    `{ products(first: 20) { edges { node { ${PRODUCT_FIELDS} } } } }`,
  );
  return data.products.edges.map((e) => e.node);
}

export async function getCollections(): Promise<Collection[]> {
  const data = await shopifyFetch<{
    collections: { edges: { node: Collection }[] };
  }>(
    `{ collections(first: 10) { edges { node { id title handle image { url } } } } }`,
  );
  return data.collections.edges.map((e) => e.node);
}

// Accepts a handle OR a numeric id, same as your web app's fetchProductPageData
const isNumericId = (v: string) => /^\d+$/.test(String(v));

export async function getProduct(idOrHandle: string): Promise<Product | null> {
  if (isNumericId(idOrHandle)) {
    const data = await shopifyFetch<{ product: Product | null }>(
      `query($id: ID!) { product(id: $id) { ${PRODUCT_FIELDS} } }`,
      { id: `gid://shopify/Product/${idOrHandle}` },
    );
    return data.product;
  }
  const data = await shopifyFetch<{ product: Product | null }>(
    `query($handle: String!) { product(handle: $handle) { ${PRODUCT_FIELDS} } }`,
    { handle: idOrHandle },
  );
  return data.product;
}

export const formatPrice = (m: Money) =>
  new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: m.currencyCode,
  }).format(Number(m.amount));
