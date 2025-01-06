import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { CoffeeProduct } from '@/types/coffee';

interface RoasterCardProps {
  roaster: string;
  roasterProducts: CoffeeProduct[];
}

export function RoasterCard({ roaster, roasterProducts }: RoasterCardProps) {
  const firstProduct = roasterProducts[0];

  return (
    <Link to={`/roaster/${encodeURIComponent(roaster)}`}>
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
}