import React, { useEffect, useMemo, useState } from "react";

type WishlistItem = {
  id: string;
  title: string;
  price: number; // cents or dollars — you choose; display handles both
  image?: string;
  variant?: string;
  qty: number;
};

const LS_KEY = "wishlist";
const CART_KEY = "cart";

function loadWishlist(): WishlistItem[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as WishlistItem[]) : [];
  } catch {
    return [];
  }
}

function saveWishlist(items: WishlistItem[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(items));
}

function loadCart(): WishlistItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as WishlistItem[]) : [];
  } catch {
    return [];
  }
}

function saveCart(items: WishlistItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function asCurrency(n: number) {
  // If values look like cents, convert
  const isCents = n > 0 && n < 10000 && Number.isInteger(n);
  const value = isCents ? n / 100 : n;
  return value.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export function Wishlist() {
  const [items, setItems] = useState<WishlistItem[]>([]);

  // Optional: allow quick-add via URL like ?add=123&title=Hat&price=29.99
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const add = params.get("add");
    if (add) {
      const title = params.get("title") ?? `Item ${add}`;
      const priceParam = params.get("price");
      const price =
        priceParam && !Number.isNaN(Number(priceParam))
          ? Number(priceParam)
          : 0;
      setItems((prev) => {
        const next = [...prev];
        const existing = next.find((p) => p.id === add);
        if (existing) existing.qty += 1;
        else
          next.push({
            id: add,
            title,
            price,
            qty: 1,
            image: params.get("image") ?? undefined,
            variant: params.get("variant") ?? undefined,
          });
        saveWishlist(next);
        return next;
      });
    }
  }, []);

  useEffect(() => {
    setItems(loadWishlist());
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.qty, 0),
    [items]
  );

  const removeOne = (id: string) => {
    const next = items
      .map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty - 1) } : it))
      .filter((it) => it.qty > 0);
    setItems(next);
    saveWishlist(next);
  };

  const addOne = (id: string) => {
    const next = items.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it));
    setItems(next);
    saveWishlist(next);
  };

  const removeAllOf = (id: string) => {
    const next = items.filter((it) => it.id !== id);
    setItems(next);
    saveWishlist(next);
  };

  const clearAll = () => {
    setItems([]);
    saveWishlist([]);
  };

  const moveToCart = (id: string) => {
    const item = items.find((it) => it.id === id);
    if (!item) return;
    const cart = loadCart();
    const existing = cart.find((c) => c.id === id);
    if (existing) existing.qty += item.qty;
    else cart.push({ ...item });
    saveCart(cart);
    const next = items.filter((it) => it.id !== id);
    setItems(next);
    saveWishlist(next);
  };

  const moveAllToCart = () => {
    if (items.length === 0) return;
    const cart = loadCart();
    for (const w of items) {
      const existing = cart.find((c) => c.id === w.id);
      if (existing) existing.qty += w.qty;
      else cart.push({ ...w });
    }
    saveCart(cart);
    clearAll();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed p-10 text-center text-gray-600">
          Your wishlist is empty.
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-medium">
              {items.length} {items.length === 1 ? "item" : "items"}
            </div>
            <div className="flex gap-2">
              <button
                onClick={moveAllToCart}
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Move all to cart
              </button>
              <button
                onClick={clearAll}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                Clear
              </button>
            </div>
          </div>

          <ul className="space-y-4">
            {items.map((it) => (
              <li
                key={it.id}
                className="flex gap-4 items-center rounded-xl border p-4 bg-white"
              >
                <div className="w-20 h-20 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center">
                  {it.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={it.image}
                      alt={it.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">No image</span>
                  )}
                </div>

                <div className="flex-1">
                  <div className="font-semibold">{it.title}</div>
                  {it.variant && (
                    <div className="text-sm text-gray-500">{it.variant}</div>
                  )}
                  <div className="mt-1 font-medium">{asCurrency(it.price)}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeOne(it.id)}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200"
                    aria-label="decrease"
                  >
                    −
                  </button>
                  <div className="min-w-8 text-center">{it.qty}</div>
                  <button
                    onClick={() => addOne(it.id)}
                    className="w-9 h-9 rounded-full bg-gray-900 text-white hover:bg-black"
                    aria-label="increase"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => moveToCart(it.id)}
                    className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Move to cart
                  </button>
                  <button
                    onClick={() => removeAllOf(it.id)}
                    className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <div className="text-lg">Subtotal</div>
            <div className="text-2xl font-bold">{asCurrency(subtotal)}</div>
          </div>
        </>
      )}

      <details className="mt-10">
        <summary className="cursor-pointer text-sm text-gray-500">
          How to add to wishlist from anywhere
        </summary>
        <div className="mt-2 text-sm text-gray-600">
          Link to <code>/wishlist?add=SKU123&title=Name&price=29.99&image=...&variant=...</code> or
          write to <code>localStorage["wishlist"]</code> with objects shaped like this page uses.
        </div>
      </details>
    </div>
  );
}

export default Wishlist;
