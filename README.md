
# Property Connect

A real estate platform that connects property owners, agents, and potential homebuyers/renters in Nigeria.

## Features

- **User Authentication:** Separate accounts for buyers and sellers
- **Property Listings:** Browse available properties in Nigeria
- **Add Property:** Sellers can list properties for sale or rent
- **Search & Filters:** Find properties based on criteria
- **Contact Seller:** Buyers can send messages to property owners/agents
- **Payment Integration:** Make deposits to reserve properties

## Tech Stack

### Frontend
- React.js with React Router for navigation
- Tailwind CSS for core styling
- Material UI components for forms and UI elements
- React Query for data fetching and state management

### Backend
- Node.js with Express.js
- MySQL database for persistent storage
- JSON file backup system as fallback

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- MySQL server

### Installation

1. Clone the repository
```
git clone https://github.com/your-username/property-connect.git
cd property-connect
```

2. Install frontend dependencies
```
npm install
```

3. Install backend dependencies
```
cd server
npm install
cd ..
```

### Database Setup

1. Create a MySQL database called `property_connect`

2. Update the MySQL connection details in `server/.env`
```
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=property_connect
```

3. Run the database setup script to create tables and sample data
```
cd server
chmod +x setup-database.sh
./setup-database.sh
```

### Running the Application

1. Start the backend server
```
cd server
chmod +x start-backend.sh
./start-backend.sh
```

The server will run on http://localhost:5000

2. In a new terminal, start the frontend development server
```
npm start
```

The frontend will run on http://localhost:3000

## User Types and Functionality

### Buyers
- Browse property listings
- View property details
- Contact property owners/agents
- Make property reservation deposits

### Sellers
- List properties for sale or rent
- View and manage their property listings
- Receive inquiries from potential buyers

## API Endpoints

- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get property by ID
- `POST /api/properties` - Create a new property listing
- `POST /api/properties/:id/contact` - Contact a seller about a property
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login existing user
- `POST /api/payments/reserve/:id` - Make a property reservation deposit
