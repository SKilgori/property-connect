
require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs').promises;
const path = require('path');

// Create a pool of connections
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Fallback path for JSON data
const DATA_FILE = path.join(__dirname, '..', 'data', 'properties.json');

// Helper function to read JSON data as fallback
async function readJSONData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading JSON data:', err);
    return [];
  }
}

// Database service functions
const dbService = {
  // Get all properties
  getAllProperties: async () => {
    try {
      const [rows] = await pool.query('SELECT * FROM properties');
      
      // Parse JSON strings into objects
      return rows.map(property => ({
        ...property,
        images: JSON.parse(property.images),
        features: JSON.parse(property.features),
        agent: JSON.parse(property.agent)
      }));
    } catch (error) {
      console.error('Database error getting properties:', error);
      // Fallback to JSON file
      console.log('Falling back to JSON data...');
      return await readJSONData();
    }
  },

  // Get property by ID
  getPropertyById: async (id) => {
    try {
      const [rows] = await pool.query('SELECT * FROM properties WHERE id = ?', [id]);
      
      if (rows.length === 0) {
        return null;
      }
      
      const property = rows[0];
      
      // Parse JSON strings into objects
      return {
        ...property,
        images: JSON.parse(property.images),
        features: JSON.parse(property.features),
        agent: JSON.parse(property.agent)
      };
    } catch (error) {
      console.error(`Database error getting property ${id}:`, error);
      // Fallback to JSON file
      console.log('Falling back to JSON data...');
      const properties = await readJSONData();
      return properties.find(p => p.id.toString() === id.toString()) || null;
    }
  },

  // Create new property
  createProperty: async (propertyData) => {
    try {
      // Convert arrays and objects to JSON strings
      const propertyToInsert = {
        ...propertyData,
        images: Array.isArray(propertyData.images) ? JSON.stringify(propertyData.images) : propertyData.images,
        features: Array.isArray(propertyData.features) ? JSON.stringify(propertyData.features) : propertyData.features,
        agent: typeof propertyData.agent === 'object' ? JSON.stringify(propertyData.agent) : propertyData.agent
      };

      const [result] = await pool.query(
        `INSERT INTO properties 
        (title, price, location, description, bedrooms, bathrooms, area, type, isNew, imageUrl, images, features, yearBuilt, agent) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          propertyToInsert.title,
          propertyToInsert.price,
          propertyToInsert.location,
          propertyToInsert.description,
          propertyToInsert.bedrooms,
          propertyToInsert.bathrooms,
          propertyToInsert.area,
          propertyToInsert.type,
          propertyToInsert.isNew,
          propertyToInsert.imageUrl,
          propertyToInsert.images,
          propertyToInsert.features,
          propertyToInsert.yearBuilt,
          propertyToInsert.agent
        ]
      );

      // Get the newly created property
      return await dbService.getPropertyById(result.insertId);
    } catch (error) {
      console.error('Database error creating property:', error);
      throw error;
    }
  },

  // Create contact request
  createContact: async (propertyId, contactData) => {
    try {
      const [result] = await pool.query(
        'INSERT INTO contacts (propertyId, name, email, phone, message) VALUES (?, ?, ?, ?, ?)',
        [propertyId, contactData.name, contactData.email, contactData.phone, contactData.message]
      );
      
      return { id: result.insertId, ...contactData, propertyId };
    } catch (error) {
      console.error('Database error creating contact:', error);
      throw error;
    }
  }
};

module.exports = dbService;
