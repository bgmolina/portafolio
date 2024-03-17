#!/bin/bash

echo "======================="
echo " Portafolio deployment "
echo "======================="

PS3="Select an option and press Enter 👆: "
OPTIONS=("Deploy all services 🚀" "Delete all services 🙃" "Turn on website 🌐" "Quit 👋")

: '
OPTIONS index:
1 -> Deploy service 🚀
2 -> Delete service 🙃
3 -> Turn on website 🌐
4 -> Quit 👋
'

while true; do
  select opt in "${OPTIONS[@]}"; do
    case $REPLY in
    "1")
      ARGS="apply"
      NAMESPACE="web"
      # echo ""
      # bash database/deployment.sh $ARGS
      # echo ""
      echo "[Portafolio] Deploying services...🚀"
      if ! kubectl get namespace "$NAMESPACE" &> /dev/null; then
        kubectl $ARGS -f namespace.yml
      fi
      # kubectl $ARGS -f config-map.yml
      # kubectl $ARGS -f secret.yml
      kubectl $ARGS -f service.yml
      kubectl $ARGS -f deployment.yml
      kubectl $ARGS -f ingress.yml

      # echo ""
      # echo "App running at 🌐:"
      # echo "- Local:   http://localhost:3000/"
      # echo "- Network: http://127.0.0.1:3000/"
      # echo ""
      # echo "Checking if pods is ready 👀 and running port-forward...🔎"
      # check if pod with label app=portafolio and namespace=web is ready when deploying and
      # forward port 3000 to 80 (server) for testing purposes only (not for production)
      # wait for 60 seconds.
      kubectl wait --for=condition=ready -n "$NAMESPACE" pod -l app=portafolio --timeout=60s &&
      kubectl port-forward service/portafolio-svc 3000:80 -n "$NAMESPACE"

      exit 0
      ;;
    "2")
      ARGS="delete"
      echo ""
      # bash database/deployment.sh $ARGS
      # echo ""
      echo "[Portafolio] Removing services...🙃"
      kubectl $ARGS -f ingress.yml
      kubectl $ARGS -f deployment.yml
      kubectl $ARGS -f service.yml
      # kubectl $ARGS -f config-map.yml
      # kubectl $ARGS -f secret.yml
      # kubectl $ARGS -f namespace.yml

      exit 0
      ;;
    "3")
      echo ""
      echo "App running at 🌐:"
      echo "- Local:   http://localhost:3000/"
      echo "- Network: http://127.0.0.1:3000/"
      echo ""
      kubectl port-forward service/portafolio-svc 3000:80 -n web

      exit 0
      ;;
    "4")
      echo "bye 👋"
      exit 0
      ;;
    *)
      echo ""
      echo "Invalid option 🙃, please try again 👇"
      ;;
    esac
    break
  done
done
