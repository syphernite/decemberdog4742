import React, { useEffect, useMemo, useState } from "react";

type AccountData = {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
  addresses?: Array<{
    id: string;
    label?: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: string;
  }>;
};

type Order = {
  id: string;
  placedAt: string;
  total: number;
  items: Array<{ id: string; title: string; qty: number; price: number }>;
  status: "processing" | "shipped" | "delivered" | "cancelled";
};

const ACCT_KEY = "account";
const ORDERS_KEY = "orders";

function loadAccount(): AccountData | null {
  try {
    const raw = localStorage.getItem(ACCT_KEY);
    return raw ? (JSON.parse(raw) as AccountData) : null;
  } catch {
    return null;
  }
}
function saveAccount(acc: AccountData | null) {
  if (!acc) localStorage.removeItem(ACCT_KEY);
  else localStorage.setItem(ACCT_KEY, JSON.stringify(acc));
}

function loadOrders(): Order[] {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? (JSON.parse(raw) as Order[]) : [];
  } catch {
    return [];
  }
}
function saveOrders(orders: Order[]) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function asCurrency(n: number) {
  const isCents = n > 0 && n < 10000 && Number.isInteger(n);
  const value = isCents ? n / 100 : n;
  return value.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export function Account() {
  const [account, setAccount] = useState<AccountData | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [tab, setTab] = useState<"signin" | "profile" | "orders" | "addresses">(
    "signin"
  );

  useEffect(() => {
    const acc = loadAccount();
    const ord = loadOrders();
    setAccount(acc);
    setOrders(ord);
    setTab(acc ? "profile" : "signin");
  }, []);

  // Seed demo orders if none
  useEffect(() => {
    if (orders.length === 0) {
      const demo: Order[] = [
        {
          id: "ORD-1001",
          placedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
          total: 129.98,
          items: [
            { id: "SKU-1", title: "Starter Tee", qty: 1, price: 29.99 },
            { id: "SKU-2", title: "Everyday Joggers", qty: 1, price: 99.99 },
          ],
          status: "delivered",
        },
      ];
      saveOrders(demo);
      setOrders(demo);
    }
  }, [orders.length]);

  const signedIn = !!account;

  const onSignIn = (email: string, name?: string) => {
    const acc: AccountData = {
      id: cryptoRandom(),
      email,
      name,
      createdAt: new Date().toISOString(),
      addresses: [],
    };
    saveAccount(acc);
    setAccount(acc);
    setTab("profile");
  };

  const onSignOut = () => {
    saveAccount(null);
    setAccount(null);
    setTab("signin");
  };

  const onProfileSave = (name: string) => {
    if (!account) return;
    const next = { ...account, name };
    saveAccount(next);
    setAccount(next);
  };

  const addAddress = (addr: Omit<NonNullable<AccountData["addresses"]>[number], "id">) => {
    if (!account) return;
    const next = { ...account, addresses: [...(account.addresses ?? []), { ...addr, id: cryptoRandom() }] };
    saveAccount(next);
    setAccount(next);
  };

  const removeAddress = (id: string) => {
    if (!account) return;
    const next = {
      ...account,
      addresses: (account.addresses ?? []).filter((a) => a.id !== id),
    };
    saveAccount(next);
    setAccount(next);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Account</h1>

      <div className="mb-6 flex flex-wrap gap-2">
        {signedIn ? (
          <>
            <TabButton onClick={() => setTab("profile")} active={tab === "profile"}>
              Profile
            </TabButton>
            <TabButton onClick={() => setTab("orders")} active={tab === "orders"}>
              Orders
            </TabButton>
            <TabButton onClick={() => setTab("addresses")} active={tab === "addresses"}>
              Addresses
            </TabButton>
            <button
              onClick={onSignOut}
              className="ml-auto px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              Sign out
            </button>
          </>
        ) : (
          <TabButton onClick={() => setTab("signin")} active={tab === "signin"}>
            Sign in / Create account
          </TabButton>
        )}
      </div>

      {!signedIn && tab === "signin" && <SignInForm onSubmit={onSignIn} />}

      {signedIn && tab === "profile" && account && (
        <ProfileForm
          email={account.email}
          name={account.name ?? ""}
          createdAt={account.createdAt}
          onSave={onProfileSave}
        />
      )}

      {signedIn && tab === "orders" && (
        <OrdersList orders={orders} />
      )}

      {signedIn && tab === "addresses" && account && (
        <AddressesManager
          addresses={account.addresses ?? []}
          onAdd={addAddress}
          onRemove={removeAddress}
        />
      )}
    </div>
  );
}

function TabButton({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "px-3 py-2 rounded-lg " +
        (active ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200")
      }
    >
      {children}
    </button>
  );
}

function SignInForm({ onSubmit }: { onSubmit: (email: string, name?: string) => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const valid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) onSubmit(email.trim(), name.trim() || undefined);
      }}
      className="max-w-md rounded-xl border p-4 bg-white"
    >
      <label className="block mb-3">
        <span className="block text-sm text-gray-600 mb-1">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
          placeholder="you@example.com"
        />
      </label>
      <label className="block mb-4">
        <span className="block text-sm text-gray-600 mb-1">Name (optional)</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Your name"
        />
      </label>
      <button
        type="submit"
        disabled={!valid}
        className="w-full rounded-lg bg-blue-600 text-white py-2 disabled:opacity-60"
      >
        Continue
      </button>
      <p className="mt-3 text-xs text-gray-500">
        This demo uses localStorage only. No emails are sent.
      </p>
    </form>
  );
}

function ProfileForm({
  email,
  name,
  createdAt,
  onSave,
}: {
  email: string;
  name: string;
  createdAt: string;
  onSave: (name: string) => void;
}) {
  const [n, setN] = useState(name);
  return (
    <div className="max-w-xl rounded-xl border p-4 bg-white">
      <div className="mb-3">
        <div className="text-sm text-gray-500">Email</div>
        <div className="font-medium">{email}</div>
      </div>
      <div className="mb-3">
        <div className="text-sm text-gray-500">Member since</div>
        <div className="font-medium">
          {new Date(createdAt).toLocaleDateString()}
        </div>
      </div>
      <label className="block mb-4">
        <span className="block text-sm text-gray-600 mb-1">Name</span>
        <input
          type="text"
          value={n}
          onChange={(e) => setN(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Your name"
        />
      </label>
      <button
        onClick={() => onSave(n.trim())}
        className="rounded-lg bg-black text-white px-4 py-2"
      >
        Save
      </button>
    </div>
  );
}

function OrdersList({ orders }: { orders: Order[] }) {
  if (orders.length === 0)
    return (
      <div className="rounded-lg border border-dashed p-10 text-center text-gray-600 bg-white">
        No orders yet.
      </div>
    );

  return (
    <div className="space-y-4">
      {orders.map((o) => (
        <div key={o.id} className="rounded-xl border p-4 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="font-semibold">{o.id}</div>
            <div className="text-sm text-gray-500">
              {new Date(o.placedAt).toLocaleString()}
            </div>
          </div>
          <div className="mt-2 text-sm">
            Status:{" "}
            <span className="font-medium capitalize">{o.status}</span>
          </div>
          <ul className="mt-3 divide-y">
            {o.items.map((it) => (
              <li key={it.id} className="py-2 flex items-center justify-between">
                <div>
                  {it.title} <span className="text-gray-500">×{it.qty}</span>
                </div>
                <div className="font-medium">{asCurrency(it.price * it.qty)}</div>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t pt-3">
            <div className="text-sm text-gray-500">Total</div>
            <div className="text-lg font-bold">{asCurrency(o.total)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AddressesManager({
  addresses,
  onAdd,
  onRemove,
}: {
  addresses: NonNullable<AccountData["addresses"]>;
  onAdd: (a: Omit<NonNullable<AccountData["addresses"]>[number], "id">) => void;
  onRemove: (id: string) => void;
}) {
  const [form, setForm] = useState({
    label: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
  });

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border p-4 bg-white">
        <h3 className="font-semibold mb-3">Saved addresses</h3>
        {addresses.length === 0 ? (
          <div className="text-sm text-gray-600">None yet.</div>
        ) : (
          <ul className="space-y-3">
            {addresses.map((a) => (
              <li key={a.id} className="rounded-lg border p-3">
                <div className="font-medium">{a.label || "Address"}</div>
                <div className="text-sm text-gray-600">
                  {a.line1}
                  {a.line2 ? `, ${a.line2}` : ""}
                  <br />
                  {a.city}, {a.state} {a.zip}
                </div>
                <button
                  onClick={() => onRemove(a.id)}
                  className="mt-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200 px-3 py-1"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!form.line1 || !form.city || !form.state || !form.zip) return;
          onAdd({
            label: form.label || undefined,
            line1: form.line1,
            line2: form.line2 || undefined,
            city: form.city,
            state: form.state,
            zip: form.zip,
          });
          setForm({ label: "", line1: "", line2: "", city: "", state: "", zip: "" });
        }}
        className="rounded-xl border p-4 bg-white"
      >
        <h3 className="font-semibold mb-3">Add new address</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Label</label>
            <input
              className="w-full rounded-lg border px-3 py-2"
              placeholder="Home, Office"
              value={form.label}
              onChange={(e) => setForm((s) => ({ ...s, label: e.target.value }))}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Address line 1</label>
            <input
              required
              className="w-full rounded-lg border px-3 py-2"
              value={form.line1}
              onChange={(e) => setForm((s) => ({ ...s, line1: e.target.value }))}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Address line 2</label>
            <input
              className="w-full rounded-lg border px-3 py-2"
              value={form.line2}
              onChange={(e) => setForm((s) => ({ ...s, line2: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">City</label>
            <input
              required
              className="w-full rounded-lg border px-3 py-2"
              value={form.city}
              onChange={(e) => setForm((s) => ({ ...s, city: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">State</label>
            <input
              required
              className="w-full rounded-lg border px-3 py-2"
              value={form.state}
              onChange={(e) => setForm((s) => ({ ...s, state: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">ZIP</label>
            <input
              required
              className="w-full rounded-lg border px-3 py-2"
              value={form.zip}
              onChange={(e) => setForm((s) => ({ ...s, zip: e.target.value }))}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 rounded-lg bg-black text-white px-4 py-2"
        >
          Save address
        </button>
      </form>
    </div>
  );
}

function cryptoRandom() {
  // Simple id
  if ("randomUUID" in crypto) return (crypto as any).randomUUID() as string;
  return Math.random().toString(36).slice(2);
}

export default Account;
