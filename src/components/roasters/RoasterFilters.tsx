import { Button } from '@/components/ui/button';
import { Users, Star, Filter } from 'lucide-react';

type FilterType = 'all' | 'top-sellers' | 'sustainable';

interface RoasterFiltersProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
}

export function RoasterFilters({ activeFilter, setActiveFilter }: RoasterFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-8 items-center justify-center">
      <Button 
        className="w-full sm:w-auto"
        variant={activeFilter === 'all' ? 'default' : 'outline'}
        onClick={() => setActiveFilter('all')}
      >
        <Users className="w-4 h-4 mr-2" />
        All Producers
      </Button>
      <Button 
        className="w-full sm:w-auto"
        variant={activeFilter === 'top-sellers' ? 'default' : 'outline'}
        onClick={() => setActiveFilter('top-sellers')}
      >
        <Star className="w-4 h-4 mr-2" />
        Top Sellers
      </Button>
      <Button 
        className="w-full sm:w-auto"
        variant={activeFilter === 'sustainable' ? 'default' : 'outline'}
        onClick={() => setActiveFilter('sustainable')}
      >
        <Filter className="w-4 h-4 mr-2" />
        Sustainable Practices
      </Button>
    </div>
  );
}