
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { TextField, Button, Card, CardContent, Typography, Box, Alert, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { fetchPropertyById, formatCurrency } from '../services/api';

const PaymentPage = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Fetch property details
  const { data: property, isLoading, error: fetchError } = useQuery({
    queryKey: ["property", propertyId],
    queryFn: () => fetchPropertyById(propertyId)
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // In a real app, this would call your payment API
      // For demonstration, we'll simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful payment
      setSuccess(true);
      
      // Clear form
      setAmount('');
      setPaymentMethod('card');
    } catch (err) {
      setError('Payment processing failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading property details...</div>;
  }

  if (fetchError || !property) {
    return <div className="flex justify-center p-8">Error loading property details</div>;
  }

  // Calculate minimum deposit (10% of property price)
  const minDeposit = property.price * 0.1;

  return (
    <div className="max-w-4xl mx-auto p-4 my-8">
      <Typography variant="h4" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
        Make a Reservation Deposit
      </Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Property Details
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className="w-full h-48 object-cover rounded-md"
                />
              </Box>
              
              <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                {property.title}
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2 }}>
                {property.location}
              </Typography>
              
              <Typography variant="h6" color="primary" sx={{ mb: 3 }}>
                Price: {formatCurrency(property.price)}
              </Typography>
              
              <Alert severity="info">
                Minimum deposit required: {formatCurrency(minDeposit)} (10% of property price)
              </Alert>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
                Payment Information
              </Typography>
              
              {success ? (
                <div className="text-center">
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Your deposit has been successfully processed!
                  </Alert>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    The property owner has been notified of your interest and will contact you soon.
                  </Typography>
                  <Button 
                    variant="contained" 
                    onClick={() => navigate(`/property/${propertyId}`)}
                    sx={{ bgcolor: '#27AE60', '&:hover': { bgcolor: '#219653' } }}
                  >
                    Return to Property
                  </Button>
                </div>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
                  
                  <TextField
                    label="Deposit Amount (₦)"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                    helperText={`Minimum deposit: ${formatCurrency(minDeposit)}`}
                    InputProps={{
                      inputProps: { min: minDeposit }
                    }}
                  />
                  
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="payment-method-label">Payment Method</InputLabel>
                    <Select
                      labelId="payment-method-label"
                      value={paymentMethod}
                      label="Payment Method"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <MenuItem value="card">Debit/Credit Card</MenuItem>
                      <MenuItem value="bank">Bank Transfer</MenuItem>
                      <MenuItem value="ussd">USSD Payment</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <Button 
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                    sx={{ mt: 3, bgcolor: '#27AE60', '&:hover': { bgcolor: '#219653' } }}
                    disabled={loading || !amount || Number(amount) < minDeposit}
                  >
                    {loading ? 'Processing...' : 'Make Deposit'}
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
