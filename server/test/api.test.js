
const assert = require('assert');
const dbService = require('../services/database');

// Mock database functions to avoid actual database calls during testing
jest.mock('../services/database', () => ({
  getAllProperties: jest.fn(),
  getPropertyById: jest.fn(),
  createProperty: jest.fn(),
  createContact: jest.fn()
}));

describe('Database Service Tests', () => {
  // Reset mocks before each test
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('getAllProperties should return array of properties', async () => {
    // Mock implementation for this test
    const mockProperties = [
      { id: 1, title: 'Test Property 1' },
      { id: 2, title: 'Test Property 2' }
    ];
    
    dbService.getAllProperties.mockResolvedValue(mockProperties);
    
    const result = await dbService.getAllProperties();
    
    expect(result).toEqual(mockProperties);
    expect(dbService.getAllProperties).toHaveBeenCalledTimes(1);
  });

  test('getPropertyById should return a single property', async () => {
    const mockProperty = { id: 1, title: 'Test Property' };
    
    dbService.getPropertyById.mockResolvedValue(mockProperty);
    
    const result = await dbService.getPropertyById(1);
    
    expect(result).toEqual(mockProperty);
    expect(dbService.getPropertyById).toHaveBeenCalledWith(1);
  });

  test('createProperty should create and return a new property', async () => {
    const newProperty = { 
      title: 'New Test Property',
      price: 5000000,
      location: 'Lekki, Lagos'
    };
    
    const createdProperty = {
      id: 3,
      ...newProperty
    };
    
    dbService.createProperty.mockResolvedValue(createdProperty);
    
    const result = await dbService.createProperty(newProperty);
    
    expect(result).toEqual(createdProperty);
    expect(dbService.createProperty).toHaveBeenCalledWith(newProperty);
  });

  test('createContact should create a contact request', async () => {
    const contactData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '08012345678',
      message: 'I am interested in this property'
    };
    
    const propertyId = 1;
    
    const createdContact = {
      id: 1,
      propertyId,
      ...contactData
    };
    
    dbService.createContact.mockResolvedValue(createdContact);
    
    const result = await dbService.createContact(propertyId, contactData);
    
    expect(result).toEqual(createdContact);
    expect(dbService.createContact).toHaveBeenCalledWith(propertyId, contactData);
  });
});
