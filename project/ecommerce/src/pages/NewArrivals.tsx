import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';
import { ProductCard } from '../components/product/ProductCard';

export function NewArrivals() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: api.products.getAll,
  });

  // Filter products that belong to the 'new-arrivals' collection
  const newArrivalProducts = products.filter(p =>
    p.collections?.includes('new-arrivals')
  );

  return (
    <section className="bg-obsidian min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              New Arrivals
            </h1>
            <p className="text-white/60 mt-2">
              Fresh pieces just added to the collection.
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="text-white/70">Loading…</div>
        ) : newArrivalProducts.length === 0 ? (
          <p className="text-white/60">No new arrivals right now.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newArrivalProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default NewArrivals;
