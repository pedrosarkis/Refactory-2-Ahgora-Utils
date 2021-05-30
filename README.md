Refatorando pela segunda vez o projeto da calculadora para o suporte da Ahgora Sistemas.
Comando para buildar a imagem docker - npm run docker_build
comando para subir o container
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev