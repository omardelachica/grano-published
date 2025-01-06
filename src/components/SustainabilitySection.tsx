import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SustainabilitySection = () => {
  return (
    <section className="py-20 bg-forest text-cream">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl mb-6">Committed to Sustainability</h2>
          <p className="text-cream/90 mb-8">
            We believe in supporting sustainable coffee practices that benefit both our planet and coffee communities worldwide. Every bean tells a story of environmental stewardship and fair trade.
          </p>
          <Button className="bg-cream text-forest hover:bg-cream/90">
            Learn About Our Impact <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};