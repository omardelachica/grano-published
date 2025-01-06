import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Star, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
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
      <div className="flex gap-4 mb-8 justify-center">
        <Button 
          variant={activeFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setActiveFilter('all')}
        >
          <Users className="w-4 h-4 mr-2" />
          All Producers
        </Button>
        <Button 
          variant={activeFilter === 'top-sellers' ? 'default' : 'outline'}
          onClick={() => setActiveFilter('top-sellers')}
        >
          <Star className="w-4 h-4 mr-2" />
          Top Sellers
        </Button>
        <Button 
          variant={activeFilter === 'sustainable' ? 'default' : 'outline'}
          onClick={() => setActiveFilter('sustainable')}
        >
          <Filter className="w-4 h-4 mr-2" />
          Sustainable Practices
        </Button>
      </div>

      {/* Roasters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentRoasters.map((roaster) => {
          const roasterProducts = mockCoffeeProducts.filter(coffee => coffee.roaster === roaster);
          const firstProduct = roasterProducts[0];
          
          return (
            <Link to={`/roaster/${encodeURIComponent(roaster)}`} key={roaster}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
                  <img
                    src={firstProduct.imageUrl}
                    alt={roaster}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-playfair mb-1">{roaster}</h3>
                    <p className="text-sm opacity-90">
                      {roasterProducts.length} {roasterProducts.length === 1 ? 'Product' : 'Products'}
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    Specializing in {firstProduct.origin} beans with 
                    {roasterProducts.map(p => p.roastProfile).join(', ')} roast profiles.
                  </p>
                </CardContent>
              </Card>
            </Link>
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