export type RoastProfile = 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';

export type BrewingMethod = 'Pour Over' | 'Espresso' | 'French Press' | 'Cold Brew' | 'Aeropress' | 'Drip Coffee' | 'Moka Pot' | 'Chemex';

export interface FlavorNote {
  id: string;
  name: string;
}

export interface CoffeeProduct {
  id: string;
  name: string;
  origin: string;
  roastProfile: RoastProfile;
  flavorNotes: FlavorNote[];
  brewingMethods: BrewingMethod[];
  rating: number;
  description: string;
  price: number;
  imageUrl: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  username: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface FilterState {
  origin: string;
  roastProfile: RoastProfile | '';
  flavorNotes: string[];
  brewingMethods: BrewingMethod[];
  minRating: number;
}