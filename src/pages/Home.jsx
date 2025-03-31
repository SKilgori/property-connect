
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import FeaturedProperties from "../components/FeaturedProperties";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import { properties } from "../lib/data";

const Home = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  
  const handleSearch = (searchParams) => {
    console.log("Search params:", searchParams);
    // In a real app, we would filter the properties based on search params
    // For now, just log the params
  };

  return (
    <main>
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-dwellz-primary">Find Your Dream Home</h2>
          <Link to="/add-property">
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#27AE60',
                '&:hover': { bgcolor: '#219653' }
              }}
            >
              List Your Property
            </Button>
          </Link>
        </div>
      </div>
      
      <FeaturedProperties properties={filteredProperties} />
      
      <ServicesSection />
      
      <TestimonialsSection />
      
      <CTASection />
    </main>
  );
};

export default Home;
