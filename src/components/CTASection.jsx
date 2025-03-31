
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-dwellz-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Join thousands of satisfied customers who found their perfect property through DwellzConnect.
          Our platform makes it easy to search, connect, and close on your ideal home.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            className="bg-dwellz-accent hover:bg-dwellz-secondary text-white px-8 py-6"
          >
            Start Your Search
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-dwellz-primary px-8 py-6"
          >
            List Your Property
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
