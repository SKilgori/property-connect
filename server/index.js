
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dbService = require('./services/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ensure data directory exists
const fs = require('fs').promises;
fs.mkdir(path.join(__dirname, 'data'), { recursive: true }).catch(err => {
  console.error('Error creating data directory:', err);
});

// API Routes

// Get all properties
app.get('/api/properties', async (req, res) => {
  try {
    const properties = await dbService.getAllProperties();
    res.json(properties);
  } catch (err) {
    console.error('Error retrieving properties:', err);
    res.status(500).json({ error: 'Failed to retrieve properties' });
  }
});

// Get property by ID
app.get('/api/properties/:id', async (req, res) => {
  try {
    const property = await dbService.getPropertyById(req.params.id);
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    res.json(property);
  } catch (err) {
    console.error(`Error retrieving property ${req.params.id}:`, err);
    res.status(500).json({ error: 'Failed to retrieve properties' });
  }
});

// Create new property
app.post('/api/properties', async (req, res) => {
  try {
    const newProperty = await dbService.createProperty(req.body);
    res.status(201).json(newProperty);
  } catch (err) {
    console.error('Error creating property:', err);
    res.status(500).json({ error: 'Failed to create property' });
  }
});

// Contact seller
app.post('/api/properties/:id/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Check if property exists
    const property = await dbService.getPropertyById(req.params.id);
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    // Create contact
    const contact = await dbService.createContact(property.id, { name, email, phone, message });
    
    res.json({ 
      success: true, 
      message: 'Contact request sent successfully',
      contactInfo: contact
    });
  } catch (err) {
    console.error('Error contacting seller:', err);
    res.status(500).json({ error: 'Failed to send contact request' });
  }
});

// Authentication routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;
    
    // In a real app, you would hash the password and store in database
    // For simplicity, we'll just return a mock user
    
    const newUser = {
      id: Date.now(),
      name,
      email,
      userType,
      createdAt: new Date().toISOString()
    };
    
    res.status(201).json({ 
      success: true, 
      message: 'User registered successfully',
      user: newUser
    });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password, userType } = req.body;
    
    // In a real app, you would verify credentials against database
    // For simplicity, we'll just return a mock user
    
    const user = {
      id: Date.now(),
      email,
      userType,
      name: 'User ' + Math.floor(Math.random() * 1000)
    };
    
    res.json({ 
      success: true, 
      message: 'Login successful',
      user
    });
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ error: 'Failed to log in' });
  }
});

// Payment routes
app.post('/api/payments/reserve/:id', async (req, res) => {
  try {
    const { amount, paymentMethod } = req.body;
    
    // Check if property exists
    const property = await dbService.getPropertyById(req.params.id);
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    // In a real app, you would process payment through a payment gateway
    // For simplicity, we'll just return a success response
    
    const reservationPayment = {
      id: Date.now(),
      propertyId: property.id,
      amount,
      paymentMethod,
      status: 'completed',
      createdAt: new Date().toISOString()
    };
    
    res.json({ 
      success: true, 
      message: 'Reservation payment processed successfully',
      payment: reservationPayment
    });
  } catch (err) {
    console.error('Error processing payment:', err);
    res.status(500).json({ error: 'Failed to process payment' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
