import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Coffee, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { mockCoffeeProducts } from '@/data/mockData';

export default function CoffeeDetail() {
  const { id } = useParams();
  const coffee = mockCoffeeProducts.find(p => p.id === id);

  if (!coffee) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-playfair text-espresso">Coffee not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <img
            src={coffee.imageUrl}
            alt={coffee.name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-playfair text-espresso mb-2">{coffee.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-gold text-gold" />
                <span className="font-medium">{coffee.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-5 h-5 text-espresso" />
                <span>{coffee.origin}</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-playfair text-espresso">Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-espresso">Roast Profile</h3>
                <p>{coffee.roastProfile}</p>
              </div>
              <div>
                <h3 className="font-medium text-espresso">Price</h3>
                <p>${coffee.price.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-espresso">Flavor Notes</h3>
            <div className="flex flex-wrap gap-2">
              {coffee.flavorNotes.map(note => (
                <span
                  key={note.id}
                  className="px-3 py-1 bg-cream text-espresso rounded-full text-sm"
                >
                  {note.name}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-espresso">Recommended Brewing Methods</h3>
            <div className="flex flex-wrap gap-2">
              {coffee.brewingMethods.map(method => (
                <div
                  key={method}
                  className="flex items-center space-x-2 px-3 py-1 bg-cream text-espresso rounded-full text-sm"
                >
                  <Coffee className="w-4 h-4" />
                  <span>{method}</span>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full">Scan QR Code</Button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-playfair text-espresso mb-6">Reviews</h2>
        <div className="space-y-4">
          {coffee.reviews.map(review => (
            <Card key={review.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">{review.username}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span>{review.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}