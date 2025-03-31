
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { 
  TextField, 
  Button, 
  Paper, 
  Typography, 
  Box,
  CircularProgress,
} from '@mui/material';
import { contactSeller } from '../services/api';

const ContactSellerForm = ({ propertyId, agentName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Hi ${agentName}, I'm interested in this property. Please contact me with more information.`
  });

  // Use React Query for mutation
  const mutation = useMutation({
    mutationFn: (data) => contactSeller(propertyId, data),
    onSuccess: () => {
      toast.success("Your message has been sent successfully! The seller will contact you soon.");
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: `Hi ${agentName}, I'm interested in this property. Please contact me with more information.`
      });
    },
    onError: () => {
      toast.error("Failed to send your message. Please try again later.");
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#2C3E50' }}>
        Contact Agent
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
          variant="outlined"
        />
        
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          margin="normal"
          variant="outlined"
        />
        
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
        
        <Box sx={{ mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={mutation.isPending}
            sx={{ 
              bgcolor: '#3498DB',
              '&:hover': { bgcolor: '#2980B9' },
              py: 1.5
            }}
          >
            {mutation.isPending ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Send Message"
            )}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default ContactSellerForm;
