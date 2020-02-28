docker build ./forum -t mad-forum
docker build ./users -t mad-users
docker build ./frontend -t mad-frontend
docker build ./gateway -t mad-gateway

docker-compose up 