import { CoffeeProduct } from '@/types/coffee';

export const mockCoffeeProducts: CoffeeProduct[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    origin: 'Ethiopia',
    roastProfile: 'Light',
    flavorNotes: [
      { id: '1', name: 'Floral' },
      { id: '2', name: 'Citrus' },
      { id: '3', name: 'Bergamot' }
    ],
    brewingMethods: ['Pour Over', 'Aeropress'],
    rating: 4.5,
    description: 'A bright and complex coffee with distinctive floral and citrus notes.',
    price: 18.99,
    imageUrl: '/placeholder.svg',
    reviews: [
      {
        id: '1',
        userId: '1',
        username: 'coffeelover',
        rating: 5,
        comment: 'Absolutely wonderful coffee with amazing floral notes!',
        createdAt: new Date().toISOString(),
      }
    ],
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    origin: 'Colombia',
    roastProfile: 'Medium',
    flavorNotes: [
      { id: '4', name: 'Chocolate' },
      { id: '5', name: 'Caramel' },
      { id: '6', name: 'Nutty' }
    ],
    brewingMethods: ['Espresso', 'French Press'],
    rating: 4.3,
    description: 'A well-balanced coffee with sweet chocolate and caramel notes.',
    price: 16.99,
    imageUrl: '/placeholder.svg',
    reviews: [
      {
        id: '2',
        userId: '2',
        username: 'beanmaster',
        rating: 4,
        comment: 'Great everyday coffee with consistent flavor.',
        createdAt: new Date().toISOString(),
      }
    ],
  },
];