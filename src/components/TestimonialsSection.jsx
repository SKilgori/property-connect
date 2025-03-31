
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "DwellzConnect made finding my dream home so easy! The platform is intuitive, and I was able to connect with an amazing agent who understood exactly what I was looking for."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Property Investor",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "As a real estate investor, I need reliable data and quality listings. DwellzConnect delivers on both fronts. I've completed three successful investment purchases through the platform."
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "First-time Seller",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "Selling my first home was daunting, but DwellzConnect connected me with a fantastic agent who guided me through the entire process. I got more than my asking price!"
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dwellz-primary">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from satisfied clients who found their perfect property through DwellzConnect.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-dwellz-accent p-2 rounded-full">
                    <Quote className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <p className="text-gray-600 italic mb-6">{testimonials[currentTestimonial].quote}</p>
                <div>
                  <p className="font-semibold text-dwellz-primary">{testimonials[currentTestimonial].name}</p>
                  <p className="text-dwellz-secondary">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-dwellz-primary text-white hover:bg-dwellz-secondary transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-dwellz-primary text-white hover:bg-dwellz-secondary transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  currentTestimonial === index ? "bg-dwellz-accent" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
