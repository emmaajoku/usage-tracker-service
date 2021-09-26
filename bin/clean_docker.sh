IMAGE_NAME="usage-tracker_web_app"

echo " ----- Stopping Docker Containers Started From Image -----"

docker ps | awk '{ print $1,$2 }' | grep ${IMAGE_NAME} | awk '{print $1 }' | xargs -I {} docker stop {}

echo " ----- Removing Docker Containers Started From Image -----"

docker ps -a | awk '{ print $1,$2 }' | grep ${IMAGE_NAME} | awk '{print $1 }' | xargs -I {} docker rm {}

echo " ----- Removing Docker Image -----"

docker rmi ${IMAGE_NAME}
