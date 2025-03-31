
import { formatCurrency } from '../services/api';

export const properties = [
  {
    id: 1,
    title: "Modern Apartment in Lekki",
    price: 85000000,
    location: "Lekki Phase 1, Lagos",
    description: "This stunning modern apartment offers breathtaking ocean views from its spacious balcony. The open-concept living space is perfect for entertaining, with high-end finishes throughout. The building features amenities including a pool, gym, and 24/7 security.",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    type: "Apartment",
    isNew: true,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1758&q=80"
    ],
    features: ["Ocean View", "Balcony", "Pool", "Gym", "Security", "Parking"],
    yearBuilt: 2019,
    agent: {
      name: "Jennifer Okafor",
      phone: "(080) 123-4567",
      email: "jennifer.o@propertyconnect.com",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 2,
    title: "Spacious Family Home in Abuja",
    price: 125000000,
    location: "Asokoro, Abuja",
    description: "This beautiful family home is located in a quiet, family-friendly neighborhood with excellent schools nearby. The spacious backyard features a covered patio and plenty of room for outdoor activities. Inside, you'll find an updated kitchen, large bedrooms, and a cozy fireplace in the living room.",
    bedrooms: 4,
    bathrooms: 3,
    area: 245,
    type: "House",
    isNew: false,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ],
    features: ["Fireplace", "Backyard", "Garage", "Updated Kitchen", "Master Suite", "Basement"],
    yearBuilt: 2010,
    agent: {
      name: "Robert Obi",
      phone: "(081) 987-6543",
      email: "robert.o@propertyconnect.com",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: 3,
    title: "Luxury Penthouse in Victoria Island",
    price: 250000000,
    location: "Victoria Island, Lagos",
    description: "Experience luxury living in this stunning penthouse located in the heart of VI. Floor-to-ceiling windows provide panoramic city views, while high-end finishes and smart home technology create a sophisticated living environment. The building offers premium amenities including a rooftop pool, private theater, and concierge service.",
    bedrooms: 3,
    bathrooms: 4,
    area: 280,
    type: "Penthouse",
    isNew: true,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ],
    features: ["City Views", "Smart Home", "Concierge", "Rooftop Pool", "Private Theater", "Wine Cellar"],
    yearBuilt: 2020,
    agent: {
      name: "Michael Adeyemi",
      phone: "(070) 456-7890",
      email: "michael.a@propertyconnect.com",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  },
  {
    id: 4,
    title: "Charming Cottage in Calabar",
    price: 45000000,
    location: "Calabar South, Cross River",
    description: "This charming cottage is nestled in a picturesque setting with a beautiful garden. Original character details have been preserved while updating essential systems and the kitchen. The cozy living room features a wood-burning fireplace, and the property includes a detached studio perfect for a home office or guest accommodation.",
    bedrooms: 2,
    bathrooms: 1,
    area: 105,
    type: "House",
    isNew: false,
    imageUrl: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ],
    features: ["Garden", "Fireplace", "Detached Studio", "Updated Kitchen", "Original Details", "Porch"],
    yearBuilt: 1985,
    agent: {
      name: "Emma Wilson",
      phone: "(090) 234-5678",
      email: "emma.w@propertyconnect.com",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  },
  {
    id: 5,
    title: "Modern Townhouse in Port Harcourt",
    price: 72000000,
    location: "GRA Phase 2, Port Harcourt",
    description: "This modern townhouse offers contemporary living in a vibrant urban location. The open floor plan on the main level is perfect for entertaining, while the rooftop deck provides outdoor space and city views. Energy-efficient features throughout and a two-car garage make this property both stylish and practical.",
    bedrooms: 3,
    bathrooms: 3,
    area: 185,
    type: "Townhouse",
    isNew: true,
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7531e14eb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    ],
    features: ["Rooftop Deck", "Energy Efficient", "Two-Car Garage", "Open Floor Plan", "City Views", "Smart Home"],
    yearBuilt: 2021,
    agent: {
      name: "David Nwosu",
      phone: "(080) 345-6789",
      email: "david.n@propertyconnect.com",
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  },
  {
    id: 6,
    title: "Riverside Villa in Ibadan",
    price: 95000000,
    location: "Jericho, Ibadan",
    description: "Escape to this peaceful riverside villa with stunning mountain views. The property sits on 2 acres with frontage on a year-round creek. Inside, you'll find an updated kitchen, open living area with a stone fireplace, and large windows to take in the natural surroundings. A large deck provides the perfect spot for outdoor enjoyment.",
    bedrooms: 4,
    bathrooms: 3,
    area: 240,
    type: "Villa",
    isNew: false,
    imageUrl: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
    ],
    features: ["Waterfront", "Mountain Views", "Fireplace", "Deck", "2 Acres", "Updated Kitchen"],
    yearBuilt: 2005,
    agent: {
      name: "Sarah Thompson",
      phone: "(070) 876-5432",
      email: "sarah.t@propertyconnect.com",
      image: "https://randomuser.me/api/portraits/women/23.jpg"
    }
  }
];

export const getPropertyById = (id) => {
  return properties.find(property => property.id === parseInt(id));
};

// Helper function to format currency
export const formatNaira = (price) => {
  return formatCurrency(price);
};
