const ENDPOINT = "https://mock.shop/api";

export type Money = { amount: string; currencyCode: string };
export type Variant = { id: string; title: string; price: Money };
export type Product = {
  id: string;
  title: string;
  handle: string;
  description: string;
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
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0]?.message ?? "GraphQL error");
  return json.data as T;
}

const PRODUCT_FIELDS = `
  id title handle description
  featuredImage { url }
  priceRange { minVariantPrice { amount currencyCode } }
  variants(first: 5) { edges { node { id title price { amount currencyCode } } } }
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

export async function getProduct(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: Product | null }>(
    `query($handle: String!) { product(handle: $handle) { ${PRODUCT_FIELDS} } }`,
    { handle },
  );
  return data.product;
}

export const formatPrice = (m: Money) =>
  `${m.currencyCode} ${Number(m.amount).toFixed(2)}`;
