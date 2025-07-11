# Run development server
DEV_PORT=$1
export DEV_PORT

echo "Running on port $DEV_PORT"
docker-compose --profile dev up --build -d

