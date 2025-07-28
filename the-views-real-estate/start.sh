#!/bin/bash
echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Seeding database (admin + properties)..."
npm run seed:admin
npm run seed:properties

echo "Starting server..."
npm start
