
import PropertyCard from "./PropertyCard";

const FeaturedProperties = ({ properties }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dwellz-primary">Featured Properties</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties available on the market right now.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
