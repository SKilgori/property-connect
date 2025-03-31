
#!/bin/bash

# Set up the database and insert sample data
echo "Setting up database and sample data..."
node scripts/setup-database.js

# Create fallback JSON data even if MySQL setup fails
echo "Creating fallback JSON data..."
node scripts/create-fallback-data.js

echo "Setup complete"
