
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'dwellzconnect',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Database connection established successfully');
    connection.release();
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

testConnection();

// API Routes
app.get('/api/properties', async (req, res) => {
  try {
    // Extract query parameters for filtering
    const { search, minPrice, maxPrice, type, minBedrooms } = req.query;
    
    // Start building the SQL query
    let sqlQuery = 'SELECT * FROM properties';
    const queryParams = [];
    
    // Build WHERE clause based on filters
    const conditions = [];
    
    if (search) {
      conditions.push('(title LIKE ? OR location LIKE ?)');
      queryParams.push(`%${search}%`, `%${search}%`);
    }
    
    if (minPrice) {
      conditions.push('price >= ?');
      queryParams.push(minPrice);
    }
    
    if (maxPrice) {
      conditions.push('price <= ?');
      queryParams.push(maxPrice);
    }
    
    if (type && type !== 'all') {
      conditions.push('type = ?');
      queryParams.push(type);
    }
    
    if (minBedrooms) {
      conditions.push('bedrooms >= ?');
      queryParams.push(minBedrooms);
    }
    
    // Add WHERE clause if there are conditions
    if (conditions.length > 0) {
      sqlQuery += ' WHERE ' + conditions.join(' AND ');
    }
    
    const [rows] = await pool.query(sqlQuery, queryParams);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

app.get('/api/properties/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM properties WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ error: 'Failed to fetch property' });
  }
});

app.post('/api/properties', async (req, res) => {
  try {
    const { title, price, location, type, bedrooms, bathrooms, area, description } = req.body;
    
    const [result] = await pool.query(
      `INSERT INTO properties (title, price, location, type, bedrooms, bathrooms, area, description, image) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, price, location, type, bedrooms, bathrooms, area, description, 
       'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3']
    );
    
    const newProperty = {
      id: result.insertId,
      title,
      price,
      location,
      type,
      bedrooms,
      bathrooms,
      area,
      description,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    };
    
    res.status(201).json(newProperty);
  } catch (error) {
    console.error('Error adding property:', error);
    res.status(500).json({ error: 'Failed to add property' });
  }
});

app.post('/api/properties/:id/contact', async (req, res) => {
  try {
    const { id } = req.params;
    
    // First, check if the property exists
    const [rows] = await pool.query('SELECT * FROM properties WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    // In a real application, we would store contact request in the database
    // and possibly send an email/notification to the seller
    
    // For now, just log the contact request
    console.log(`Contact request for property ID ${id}`);
    
    res.json({ message: 'Seller has been notified.' });
  } catch (error) {
    console.error('Error contacting seller:', error);
    res.status(500).json({ error: 'Failed to contact seller' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
