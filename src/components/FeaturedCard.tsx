interface FeaturedCardProps {
  title: string;
  description: string;
  image: string;
}

export const FeaturedCard = ({ title, description, image }: FeaturedCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 p-6">
          <h3 className="font-fraunces text-xl text-white mb-2">{title}</h3>
          <p className="text-cream-dark text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};