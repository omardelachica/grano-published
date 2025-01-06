import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-espresso text-cream">
      <div className="container px-4">
        <h2 className="font-playfair text-2xl md:text-3xl text-gold mb-8 md:mb-12 text-center">
          What Coffee Lovers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 p-4 md:p-6 rounded-lg">
              <div className="flex gap-1 text-gold mb-3 md:mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                ))}
              </div>
              <p className="text-cream/90 text-sm md:text-base mb-3 md:mb-4">
                "Grano has transformed how I discover and enjoy specialty coffee. The community insights are invaluable!"
              </p>
              <div className="text-gold/80 text-xs md:text-sm">- Coffee Enthusiast</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};