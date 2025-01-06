import React, { useState } from 'react';
import { CoffeeFilters } from '@/components/explore/CoffeeFilters';
import { CoffeeGrid } from '@/components/explore/CoffeeGrid';
import { CoffeeProduct, FilterState } from '@/types/coffee';
import { mockCoffeeProducts } from '@/data/mockData';

const initialFilters: FilterState = {
  origin: '',
  roastProfile: '',
  flavorNotes: [],
  brewingMethods: [],
  minRating: 0,
};

export default function Explore() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [filteredProducts, setFilteredProducts] = useState<CoffeeProduct[]>(mockCoffeeProducts);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    // Apply filters to products
    const filtered = mockCoffeeProducts.filter(product => {
      if (newFilters.origin && !product.origin.toLowerCase().includes(newFilters.origin.toLowerCase())) return false;
      if (newFilters.roastProfile && product.roastProfile !== newFilters.roastProfile) return false;
      if (newFilters.flavorNotes.length && !product.flavorNotes.some(note => newFilters.flavorNotes.includes(note.name))) return false;
      if (newFilters.brewingMethods.length && !newFilters.brewingMethods.some(method => product.brewingMethods.includes(method))) return false;
      if (newFilters.minRating && product.rating < newFilters.minRating) return false;
      return true;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair text-espresso mb-8">Explore Our Coffee</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <CoffeeFilters filters={filters} onFilterChange={handleFilterChange} />
        </aside>
        <main className="lg:col-span-3">
          <CoffeeGrid products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}