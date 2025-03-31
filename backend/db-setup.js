
const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
  let connection;
  
  try {
    // Create connection
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      multipleStatements: true
    });
    
    console.log('Connected to MySQL server');
    
    // Create database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'dwellzconnect'}`);
    console.log(`Database ${process.env.DB_NAME || 'dwellzconnect'} created or already exists`);
    
    // Use the database
    await connection.query(`USE ${process.env.DB_NAME || 'dwellzconnect'}`);
    
    // Create properties table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS properties (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        price DECIMAL(15, 2) NOT NULL,
        location VARCHAR(255) NOT NULL,
        type VARCHAR(50),
        bedrooms INT,
        bathrooms DECIMAL(3, 1),
        area INT,
        description TEXT,
        image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Properties table created or already exists');
    
    // Add sample data if table is empty
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM properties');
    
    if (rows[0].count === 0) {
      await connection.query(`
        INSERT INTO properties (title, price, location, type, bedrooms, bathrooms, area, image) VALUES
        ('Modern Lekki Phase 1 Apartment', 75000000, 'Lekki, Lagos', 'apartment', 2, 2, 1200, 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'),
        ('Family Home in Maitama', 120000000, 'Maitama, Abuja', 'house', 4, 2.5, 2400, 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'),
        ('Luxury Waterfront Villa', 180000000, 'Victoria Island, Lagos', 'house', 3, 2, 1800, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'),
        ('Commercial Space in Ikeja', 95000000, 'Ikeja, Lagos', 'commercial', null, null, 2500, 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'),
        ('Prime Land in Ikoyi', 250000000, 'Ikoyi, Lagos', 'land', null, null, 5000, 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')
      `);
      console.log('Sample data inserted');
    } else {
      console.log('Sample data already exists');
    }
    
    console.log('Database setup completed successfully');
    
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    if (connection) {
      await connection.end();
      console.log('Database connection closed');
    }
  }
}

setupDatabase();
