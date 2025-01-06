import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RoasterFilters } from '@/components/roasters/RoasterFilters';
import { RoasterCard } from '@/components/roasters/RoasterCard';
import { mockCoffeeProducts } from '@/data/mockData';

// Get unique roasters from the mock data
const uniqueRoasters = Array.from(new Set(mockCoffeeProducts.map(coffee => coffee.roaster)));

type FilterType = 'all' | 'top-sellers' | 'sustainable';

export default function RoastersCatalogue() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const roastersPerPage = 6;

  // Filter roasters based on active filter
  const filteredRoasters = uniqueRoasters.filter(roaster => {
    if (activeFilter === 'all') return true;
    // Mock filter logic - in a real app, this would be based on actual data
    if (activeFilter === 'top-sellers') {
      return ['Artisan Coffee Roasters', 'Mountain Peak Coffee Co.', 'Ethiopian Coffee Co.'].includes(roaster);
    }
    if (activeFilter === 'sustainable') {
      return ['Artisan Coffee Roasters', 'Brazilian Coffee Masters', 'Guatemalan Coffee Co.'].includes(roaster);
    }
    return true;
  });

  // Pagination logic
  const indexOfLastRoaster = currentPage * roastersPerPage;
  const indexOfFirstRoaster = indexOfLastRoaster - roastersPerPage;
  const currentRoasters = filteredRoasters.slice(indexOfFirstRoaster, indexOfLastRoaster);
  const totalPages = Math.ceil(filteredRoasters.length / roastersPerPage);

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair text-espresso mb-4">Meet Our Producers</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the passionate artisans behind your favorite coffee. From small family farms 
          to renowned estates, each producer brings their unique expertise to every bean.
        </p>
      </div>

      {/* Filters */}
      <RoasterFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Roasters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentRoasters.map((roaster) => {
          const roasterProducts = mockCoffeeProducts.filter(coffee => coffee.roaster === roaster);
          return (
            <RoasterCard 
              key={roaster} 
              roaster={roaster} 
              roasterProducts={roasterProducts} 
            />
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-4 items-center">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}