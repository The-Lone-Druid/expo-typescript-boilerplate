#!/bin/bash

# Check if an argument is provided
if [ -z "$1" ]; then
  export ENV=dev
fi

# Set the environment variable dynamically
export ENV="$1"

# Start the app
npx expo start