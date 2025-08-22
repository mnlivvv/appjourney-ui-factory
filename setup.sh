#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Success message
echo "==================================="
echo "✨ Luxe Tasks app setup completed!"
echo "==================================="
echo "To start the development server:"
echo "npm run dev"
echo ""
echo "To build for production:"
echo "npm run build"
echo ""