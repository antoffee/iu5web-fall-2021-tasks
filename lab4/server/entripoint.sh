#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# Creating admin
echo "Creating admin"
python manage.py initadmin

# Start server
echo "Starting server"
python manage.py runserver 0.0.0.0:8000
