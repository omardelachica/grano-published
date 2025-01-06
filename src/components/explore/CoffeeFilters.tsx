import React from 'react';
import { FilterState, RoastProfile, BrewingMethod } from '@/types/coffee';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface CoffeeFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const ROAST_PROFILES: RoastProfile[] = ['Light', 'Medium', 'Medium-Dark', 'Dark'];
const BREWING_METHODS: BrewingMethod[] = ['Pour Over', 'Espresso', 'French Press', 'Cold Brew', 'Aeropress'];
const FLAVOR_NOTES = ['Floral', 'Fruity', 'Nutty', 'Chocolate', 'Caramel', 'Citrus'];

export function CoffeeFilters({ filters, onFilterChange }: CoffeeFiltersProps) {
  const handleOriginChange = (value: string) => {
    onFilterChange({ ...filters, origin: value });
  };

  const handleRoastChange = (value: string) => {
    onFilterChange({ ...filters, roastProfile: value as RoastProfile });
  };

  const handleBrewingMethodToggle = (method: BrewingMethod) => {
    const updatedMethods = filters.brewingMethods.includes(method)
      ? filters.brewingMethods.filter(m => m !== method)
      : [...filters.brewingMethods, method];
    onFilterChange({ ...filters, brewingMethods: updatedMethods });
  };

  const handleRatingChange = (value: number[]) => {
    onFilterChange({ ...filters, minRating: value[0] });
  };

  return (
    <Card className="p-4">
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="origin">Origin</Label>
          <Input
            id="origin"
            placeholder="Search by origin..."
            value={filters.origin}
            onChange={(e) => handleOriginChange(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Roast Profile</Label>
          <Select value={filters.roastProfile} onValueChange={handleRoastChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select roast profile" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Roasts</SelectItem>
              {ROAST_PROFILES.map((roast) => (
                <SelectItem key={roast} value={roast}>
                  {roast}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Brewing Methods</Label>
          <div className="space-y-2">
            {BREWING_METHODS.map((method) => (
              <div key={method} className="flex items-center space-x-2">
                <Checkbox
                  id={method}
                  checked={filters.brewingMethods.includes(method)}
                  onCheckedChange={() => handleBrewingMethodToggle(method)}
                />
                <label
                  htmlFor={method}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {method}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Minimum Rating</Label>
          <Slider
            defaultValue={[filters.minRating]}
            max={5}
            step={0.5}
            onValueChange={handleRatingChange}
          />
          <div className="text-sm text-muted-foreground">
            {filters.minRating} stars and above
          </div>
        </div>
      </CardContent>
    </Card>
  );
}