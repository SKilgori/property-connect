import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { createProperty } from "../services/api";
import { 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Box, 
  Typography, 
  Paper,
  Grid,
  Stack,
  Divider
} from "@mui/material";
import { MapPin, Home, Upload } from "lucide-react";
import { useAuth } from "../components/AuthContext";

const AddProperty = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [property, setProperty] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    bedrooms: 1,
    bathrooms: 1,
    area: "",
    type: "House",
    features: "",
    yearBuilt: new Date().getFullYear(),
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1770&q=80",
    agent: {
      name: user?.name || "Property Agent",
      email: user?.email || "agent@example.com",
      phone: "+234 800 123 4567",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGUlMjBhZ2VudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    }
  });

  const mutation = useMutation({
    mutationFn: createProperty,
    onSuccess: () => {
      toast.success("Property listed successfully!");
      navigate("/");
    },
    onError: () => {
      toast.error("Failed to list property. Please try again.");
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Parse features string into array
    const propertyData = {
      ...property,
      price: Number(property.price),
      bedrooms: Number(property.bedrooms),
      bathrooms: Number(property.bathrooms),
      area: Number(property.area),
      yearBuilt: Number(property.yearBuilt),
      features: property.features.split(',').map(f => f.trim()).filter(f => f),
      images: [property.imageUrl, property.imageUrl]
    };
    
    mutation.mutate(propertyData);
  };

  const propertyTypes = [
    "House", "Apartment", "Condo", "Townhouse", 
    "Villa", "Cabin", "Penthouse", "Land"
  ];

  const nigerianLocations = [
    "Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", 
    "Calabar", "Enugu", "Uyo", "Owerri", "Kaduna"
  ];

  return (
    <main className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-dwellz-primary">List Your Property</h1>
          <p className="mt-2 text-lg text-gray-600">
            Fill out the form below to list your property on Property Connect
          </p>
        </div>

        <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" className="text-dwellz-primary font-semibold" gutterBottom>
                  Basic Information
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Property Title"
                  name="title"
                  value={property.title}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  placeholder="e.g., Modern Apartment in Lekki"
                  InputProps={{
                    startAdornment: <Home className="mr-2 text-gray-500" size={20} />,
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Price (₦)"
                  name="price"
                  type="number"
                  value={property.price}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  placeholder="e.g., 25000000"
                  helperText="Enter price in Naira"
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="location-label">Location</InputLabel>
                  <Select
                    labelId="location-label"
                    name="location"
                    value={property.location}
                    onChange={handleChange}
                    label="Location"
                    required
                    startAdornment={<MapPin className="mr-2 text-gray-500" size={20} />}
                  >
                    {nigerianLocations.map((location) => (
                      <MenuItem key={location} value={location}>{location}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12}>
                <Divider />
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="h6" className="text-dwellz-primary font-semibold" gutterBottom>
                  Property Details
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="property-type-label">Property Type</InputLabel>
                  <Select
                    labelId="property-type-label"
                    name="type"
                    value={property.type}
                    onChange={handleChange}
                    label="Property Type"
                  >
                    {propertyTypes.map((type) => (
                      <MenuItem key={type} value={type}>{type}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="bedrooms-label">Bedrooms</InputLabel>
                  <Select
                    labelId="bedrooms-label"
                    name="bedrooms"
                    value={property.bedrooms}
                    onChange={handleChange}
                    label="Bedrooms"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <MenuItem key={num} value={num}>{num}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="bathrooms-label">Bathrooms</InputLabel>
                  <Select
                    labelId="bathrooms-label"
                    name="bathrooms"
                    value={property.bathrooms}
                    onChange={handleChange}
                    label="Bathrooms"
                  >
                    {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((num) => (
                      <MenuItem key={num} value={num}>{num}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Square Feet"
                  name="area"
                  type="number"
                  value={property.area}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  placeholder="e.g., 1500"
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Year Built"
                  name="yearBuilt"
                  type="number"
                  value={property.yearBuilt}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="e.g., 2010"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Features (comma separated)"
                  name="features"
                  value={property.features}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="e.g., Garage, Pool, Fireplace, Garden"
                  multiline
                  rows={2}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={property.description}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  placeholder="Describe your property"
                  multiline
                  rows={4}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Divider />
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="h6" className="text-dwellz-primary font-semibold" gutterBottom>
                  Images
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
                <Paper
                  variant="outlined"
                  sx={{ 
                    p: 3, 
                    borderStyle: 'dashed', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    bgcolor: 'background.default'
                  }}
                >
                  <Upload size={36} className="text-gray-400 mb-2" />
                  <Typography variant="body1" gutterBottom>
                    Drag and drop images here, or click to browse
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Supported formats: JPG, PNG. Max size: 5MB
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Box sx={{ mt: 2 }}>
                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() => navigate("/")}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ 
                        bgcolor: '#27AE60',
                        '&:hover': { bgcolor: '#219653' }
                      }}
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Submitting..." : "List Property"}
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </main>
  );
};

export default AddProperty;
