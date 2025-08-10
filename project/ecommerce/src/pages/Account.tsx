import React, { useState } from 'react';
import { useStore } from '../lib/store';
import { api } from '../lib/api';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export function Account() {
  const { user, setUser } = useStore();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState(user?.email ?? '');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState(user?.firstName ?? '');
  const [lastName, setLastName] = useState(user?.lastName ?? '');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const handleSignOut = () => {
    setUser(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      if (mode === 'signin') {
        const u = await api.users.signIn(email, password);
        if (!u) throw new Error('Invalid credentials.');
        setUser(u);
      } else {
        const u = await api.users.signUp({
          email,
          password,
          firstName: firstName || 'New',
          lastName: lastName || 'User',
        });
        setUser(u);
      }
    } catch (e: any) {
      setErr(e?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <section className="bg-obsidian min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Account
          </h1>
          <div className="space-y-4 max-w-xl">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-2">Profile</h2>
              <p className="text-white/80">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-white/60">{user.email}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-2">Orders</h2>
              <p className="text-white/60">No orders yet.</p>
            </div>

            <Button onClick={handleSignOut} className="mt-2">
              Sign out
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-obsidian min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {mode === 'signin' ? 'Sign in' : 'Create account'}
          </h1>
          <button
            className="text-champagne hover:text-champagne/80 underline underline-offset-4"
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          >
            {mode === 'signin' ? 'Create an account' : 'Have an account? Sign in'}
          </button>
        </div>

        {err && <p className="text-red-400 mb-4">{err}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="First name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <Input
                placeholder="Last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          )}
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Please wait…' : mode === 'signin' ? 'Sign in' : 'Create account'}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Account;
