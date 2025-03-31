
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleSearch = (searchParams) => {
    console.log("Search params:", searchParams);
    // In a real app, we would navigate to search results
    // navigate('/search', { state: { searchParams } });
  };

  return (
    <section className="relative">
      {/* Hero background */}
      <div className="hero-gradient h-[600px] w-full absolute top-0 left-0"></div>
      
      {/* Image overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80")',
          backgroundBlendMode: 'overlay',
          opacity: 0.4 
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your Perfect Place
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Discover thousands of properties for sale and rent across the country with our comprehensive listings.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              className="bg-dwellz-accent hover:bg-dwellz-secondary text-white px-8 py-6"
              onClick={() => console.log("Buy clicked")}
            >
              Buy
            </Button>
            <Button 
              className="bg-white hover:bg-gray-100 text-dwellz-primary px-8 py-6"
              onClick={() => console.log("Rent clicked")}
            >
              Rent
            </Button>
          </div>
        </div>
        
        {/* Search bar */}
        <div className="mt-8">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
