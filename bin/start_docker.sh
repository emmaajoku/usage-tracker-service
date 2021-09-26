IMAGE_NAME="usage-tracker_web_app"
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

ROOT="$(dirname "${SCRIPT_DIR}")"

if [[ "$(docker images -q ${IMAGE_NAME}:latest 2> /dev/null)" == "" ]]; then
    echo " ----- Web App Image Does Not Exist. Building Now. -----"
    docker build -t ${IMAGE_NAME} ${ROOT}
else
    echo " ----- Web App Image Available for Use. -----"
fi

PROJECT_NAME="usage-tracker"

CURRENT_DOCKER_COMPOSE_VERSION=$( docker-compose -v | grep -o '[0-9]*[.][0-9]*[.][0-9]' | sed -e 's/[.]//g' )
# BREAKING_DOCKER_COMPOSE_VERSION=1210
if [[ ${CURRENT_DOCKER_COMPOSE_VERSION} -lt ${BREAKING_DOCKER_COMPOSE_VERSION} ]]; then
 PROJECT_NAME="${PROJECT_NAME}_"
fi
echo " ----- Network name prefix is: ${PROJECT_NAME} -----"

echo " ----- Starting Up Infrastructure Containers -----"

docker-compose -p ${PROJECT_NAME} up -d

echo " ----- Run Web application Disposable Container -----"
docker run \
    -i \
    -t \
    -p 8000 \
    -p 5858 \
    -v ${ROOT}:/src \
    --env-file=${ROOT}/.env \
    --network=usage-tracker_main_network \
    ${IMAGE_NAME} \
    bash

echo " ----- EXITED from disposable container -----"
echo " ----- Removing Exited Containers. -----"

docker ps -a | grep Exited | awk '{ print $1,$2 }' | \
grep ${IMAGE_NAME} |  awk '{print $1 }' | xargs -I {} docker rm {}
