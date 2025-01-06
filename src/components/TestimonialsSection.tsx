import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-espresso text-cream">
      <div className="container">
        <h2 className="font-playfair text-3xl text-gold mb-12 text-center">What Coffee Lovers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 p-6 rounded-lg">
              <div className="flex gap-1 text-gold mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-cream/90 mb-4">
                "Grano has transformed how I discover and enjoy specialty coffee. The community insights are invaluable!"
              </p>
              <div className="text-gold/80 text-sm">- Coffee Enthusiast</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};