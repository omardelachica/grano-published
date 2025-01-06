import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Users, Heart, MessageSquare, Award } from 'lucide-react';
import { mockCoffeeProducts } from '@/data/mockData';
import { useToast } from '@/components/ui/use-toast';

export default function RoasterProfile() {
  const { roasterId } = useParams();
  const { toast } = useToast();
  
  // Find the first coffee by this roaster to get roaster info
  const roasterProducts = mockCoffeeProducts.filter(coffee => coffee.roaster === roasterId);
  
  if (roasterProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-playfair text-espresso">Roaster not found</h1>
      </div>
    );
  }

  const handleFollow = () => {
    toast({
      title: "Success",
      description: "You are now following this roaster. This feature will be fully implemented soon!",
    });
  };

  const handleContact = () => {
    toast({
      title: "Coming Soon",
      description: "Direct messaging will be available in a future update.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/3">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <img
              src={roasterProducts[0].imageUrl}
              alt={roasterProducts[0].roaster}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-playfair text-espresso mb-2">{roasterProducts[0].roaster}</h1>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>2.5k followers</span>
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>4.8 rating</span>
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleFollow}>
                <Heart className="w-4 h-4" />
                Follow
              </Button>
              <Button variant="outline" onClick={handleContact}>
                <MessageSquare className="w-4 h-4" />
                Contact
              </Button>
            </div>
          </div>

          <Separator />
          
          {/* Bio Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-playfair text-espresso">Our Story</h2>
            <p className="text-muted-foreground">
              At {roasterProducts[0].roaster}, we believe in sustainable farming practices 
              and ethical sourcing. Our commitment to quality begins at origin, where we 
              work directly with farmers to ensure the finest beans while promoting 
              environmental stewardship and fair labor practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Sustainability</h3>
                  <p className="text-sm text-muted-foreground">
                    100% organic farming practices with focus on biodiversity and 
                    water conservation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Fair Trade</h3>
                  <p className="text-sm text-muted-foreground">
                    Direct trade partnerships ensuring fair compensation for farmers 
                    and their communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="space-y-6 mt-12">
        <h2 className="text-2xl font-playfair text-espresso">Our Coffee Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roasterProducts.map((product) => (
            <Card key={product.id}>
              <div className="aspect-square relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.origin}</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground">{product.pricePerUnit}</span>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}