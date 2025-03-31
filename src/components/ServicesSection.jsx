
import { Home, TrendingUp, Shield, Users } from "lucide-react";

const services = [
  {
    icon: <Home className="h-10 w-10 text-dwellz-accent" />,
    title: "Property Listings",
    description: "Browse thousands of verified property listings across the country, updated daily with the latest properties."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-dwellz-accent" />,
    title: "Market Analysis",
    description: "Get detailed market analysis and trends to make informed decisions about buying, selling, or investing."
  },
  {
    icon: <Shield className="h-10 w-10 text-dwellz-accent" />,
    title: "Trusted Agents",
    description: "Connect with our network of verified and experienced real estate agents who can guide you through the process."
  },
  {
    icon: <Users className="h-10 w-10 text-dwellz-accent" />,
    title: "Community Insights",
    description: "Explore neighborhood details, school ratings, amenities, and community information for any property."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dwellz-primary">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate services designed to make your property journey seamless and successful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-dwellz-primary mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
