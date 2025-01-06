import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { CoffeeProduct } from '@/types/coffee';

interface CoffeeGridProps {
  products: CoffeeProduct[];
}

export function CoffeeGrid({ products }: CoffeeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link key={product.id} to={`/coffee/${product.id}`}>
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="aspect-square relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-playfair text-xl text-espresso mb-1">{product.name}</h3>
              <Link 
                to={`/roaster/${encodeURIComponent(product.roaster)}`}
                className="text-sm text-muted-foreground hover:text-primary mb-2 block"
                onClick={(e) => e.stopPropagation()}
              >
                by {product.roaster}
              </Link>
              <p className="text-sm text-muted-foreground mb-2">{product.origin}</p>
              <div className="flex items-center space-x-1 mb-2">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium">${product.price.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">{product.pricePerUnit}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}