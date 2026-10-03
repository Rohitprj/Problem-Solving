import React, { createContext, useContext, useMemo, useState } from "react";
import { Product, Variant } from "../lib/shopify";

export type CartItem = { product: Product; variant: Variant; qty: number };

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  add: (product: Product, variant: Variant, qty: number) => void;
  setQty: (variantId: string, qty: number) => void;
  remove: (variantId: string) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const value = useMemo<CartCtx>(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      total: items.reduce(
        (s, i) => s + i.qty * Number(i.variant.price.amount),
        0,
      ),
      add: (product, variant, qty) =>
        setItems((prev) => {
          const found = prev.find((i) => i.variant.id === variant.id);
          if (found)
            return prev.map((i) =>
              i.variant.id === variant.id ? { ...i, qty: i.qty + qty } : i,
            );
          return [...prev, { product, variant, qty }];
        }),
      setQty: (id, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((i) => i.variant.id !== id)
            : prev.map((i) => (i.variant.id === id ? { ...i, qty } : i)),
        ),
      remove: (id) =>
        setItems((prev) => prev.filter((i) => i.variant.id !== id)),
    }),
    [items],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
};
