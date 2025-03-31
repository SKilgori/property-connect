
const API_URL = 'http://localhost:5000/api';

/**
 * Format currency to Nigerian Naira
 * @param {number} amount Amount in naira
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Fetch all properties from the API
 * @returns {Promise<Array>} List of properties
 */
export const fetchProperties = async () => {
  try {
    const response = await fetch(`${API_URL}/properties`);
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

/**
 * Fetch a single property by ID
 * @param {string|number} id The property ID
 * @returns {Promise<Object>} Property details
 */
export const fetchPropertyById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/properties/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch property');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching property ${id}:`, error);
    throw error;
  }
};

/**
 * Create a new property listing
 * @param {Object} propertyData The property data to submit
 * @returns {Promise<Object>} The created property
 */
export const createProperty = async (propertyData) => {
  try {
    const response = await fetch(`${API_URL}/properties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(propertyData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create property');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating property:', error);
    throw error;
  }
};

/**
 * Contact a seller about a property
 * @param {string|number} propertyId The property ID
 * @param {Object} contactData The contact form data
 * @returns {Promise<Object>} Response from the server
 */
export const contactSeller = async (propertyId, contactData) => {
  try {
    const response = await fetch(`${API_URL}/properties/${propertyId}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send message to seller');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error contacting seller:', error);
    throw error;
  }
};
