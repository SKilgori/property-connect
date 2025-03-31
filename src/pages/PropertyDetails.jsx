
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  MapPin, Bed, Bath, Square, Calendar, Check, 
  Phone, Mail, ChevronLeft, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { fetchPropertyById, formatCurrency } from "../services/api";
import { getPropertyById } from "../lib/data"; // Fallback
import { useAuth } from "../components/AuthContext";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use React Query to fetch property data
  const { data: property, isLoading, error } = useQuery({
    queryKey: ["property", id],
    queryFn: () => fetchPropertyById(id),
    onError: () => {
      // Fallback to local data if API fails
      console.log("Falling back to local data");
      return getPropertyById(id);
    }
  });

  const nextImage = () => {
    if (!property) return;
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!property) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleReserveProperty = () => {
    if (user) {
      navigate(`/payment/${id}`);
    } else {
      navigate('/login');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading property details...</p>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Property not found</p>
        <Link to="/" className="text-dwellz-secondary hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-600 hover:text-dwellz-secondary">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">{property.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Property Title and Price */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-dwellz-primary mb-2">{property.title}</h1>
            <p className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-1 text-dwellz-secondary" />
              {property.location}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-3xl font-bold text-dwellz-accent">
              {formatCurrency(property.price)}
            </p>
          </div>
        </div>
        
        {/* Property Images */}
        <div className="relative mb-8 rounded-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <img 
              src={property.images[currentImageIndex]} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button 
                onClick={prevImage}
                className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextImage}
                className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-2 space-x-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? "bg-dwellz-accent" : "bg-gray-300"
                }`}
                aria-label={`Go to image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            {/* Overview */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-dwellz-primary mb-4">Overview</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-dwellz-secondary mb-1">
                      <Bed className="h-5 w-5 mr-1" />
                      <span className="font-semibold">{property.bedrooms}</span>
                    </div>
                    <p className="text-sm text-gray-600">Bedrooms</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-dwellz-secondary mb-1">
                      <Bath className="h-5 w-5 mr-1" />
                      <span className="font-semibold">{property.bathrooms}</span>
                    </div>
                    <p className="text-sm text-gray-600">Bathrooms</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-dwellz-secondary mb-1">
                      <Square className="h-5 w-5 mr-1" />
                      <span className="font-semibold">{property.area}</span>
                    </div>
                    <p className="text-sm text-gray-600">Sq Meters</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-dwellz-secondary mb-1">
                      <Calendar className="h-5 w-5 mr-1" />
                      <span className="font-semibold">{property.yearBuilt}</span>
                    </div>
                    <p className="text-sm text-gray-600">Year Built</p>
                  </div>
                </div>
                <Separator className="my-6" />
                <div>
                  <h3 className="text-lg font-semibold text-dwellz-primary mb-3">Description</h3>
                  <p className="text-gray-600">{property.description}</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Features */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-dwellz-primary mb-4">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-dwellz-accent mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Agent Contact */}
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-dwellz-primary mb-4">Contact Agent</h2>
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={property.agent.image} 
                      alt={property.agent.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-dwellz-primary">{property.agent.name}</p>
                    <p className="text-gray-600 text-sm">Licensed Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-dwellz-secondary mr-2" />
                    <a href={`tel:${property.agent.phone}`} className="text-gray-600 hover:text-dwellz-secondary">
                      {property.agent.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-dwellz-secondary mr-2" />
                    <a href={`mailto:${property.agent.email}`} className="text-gray-600 hover:text-dwellz-secondary">
                      {property.agent.email}
                    </a>
                  </div>
                </div>
                <Button className="w-full bg-dwellz-accent hover:bg-dwellz-secondary mb-3">
                  Request a Showing
                </Button>
                <Button variant="outline" className="w-full border-dwellz-primary text-dwellz-primary hover:bg-dwellz-primary hover:text-white">
                  Ask a Question
                </Button>
              </CardContent>
            </Card>
            
            {/* Reserve Property Button (for buyers only) */}
            {(!user || user.userType === 'buyer') && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-dwellz-primary mb-4">Reserve This Property</h2>
                  <p className="text-gray-600 mb-4">
                    Secure this property by making a reservation deposit of 10% of the property price.
                  </p>
                  <p className="font-semibold text-dwellz-accent mb-4">
                    Reservation Amount: {formatCurrency(property.price * 0.1)}
                  </p>
                  <Button 
                    className="w-full bg-dwellz-primary hover:bg-dwellz-secondary"
                    onClick={handleReserveProperty}
                  >
                    {user ? 'Make Reservation Deposit' : 'Login to Reserve'}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetails;
