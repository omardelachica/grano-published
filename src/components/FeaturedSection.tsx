import { FeaturedCard } from "@/components/FeaturedCard";

export const FeaturedSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="font-playfair text-3xl text-espresso mb-12 text-center">Featured Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeaturedCard
            title="Ethiopian Yirgacheffe"
            description="Floral and bright with notes of bergamot and jasmine"
            image="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80"
          />
          <FeaturedCard
            title="Roaster Spotlight"
            description="Meet the artisans behind your favorite brews"
            image="https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&q=80"
          />
          <FeaturedCard
            title="Brewing Guides"
            description="Perfect your pour-over technique"
            image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
          />
        </div>
      </div>
    </section>
  );
};