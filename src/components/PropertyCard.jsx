
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "../services/api";

const PropertyCard = ({ property }) => {
  const { id, title, price, location, bedrooms, bathrooms, area, imageUrl, type, isNew } = property;

  return (
    <Link to={`/property/${id}`}>
      <Card className="property-card overflow-hidden h-full">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover" 
          />
          {isNew && (
            <Badge className="absolute top-2 right-2 bg-dwellz-accent">New</Badge>
          )}
          <Badge className="absolute top-2 left-2 bg-dwellz-secondary">{type}</Badge>
        </div>
        <CardContent className="pt-4">
          <h3 className="text-lg font-semibold text-dwellz-primary line-clamp-1">{title}</h3>
          <p className="flex items-center text-gray-500 text-sm mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </p>
          <p className="text-dwellz-accent font-bold text-xl mt-2">{formatCurrency(price)}</p>
          
          <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{bedrooms} {bedrooms === 1 ? 'bed' : 'beds'}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{bathrooms} {bathrooms === 1 ? 'bath' : 'baths'}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{area} sqft</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
