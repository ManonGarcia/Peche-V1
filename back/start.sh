step1() {
  rm -rf .env || true
  cp .env.dist .env
  npm install
  docker rm -f $(docker ps -aq) || true
  docker compose up -d --force-recreate --build --remove-orphans
  npm start
}

step2() {
  npx sequelize-cli db:migrate --config "config/config.json" --env "development" --debug
  npx sequelize-cli db:seed:all
  test
}

test() {
  curl --location 'localhost:3001/admin/login' \
    --header 'Content-Type: application/json' \
    --data '{
      "username": "username",
      "password": "password"
  }'
}

main() {
  case $1 in

  "step1")
    step1
    ;;

  "step2")
    step2
    ;;

  "test")
    test
    ;;

  *)
    echo "ERROR"
    exit 1
    ;;
  esac
}

main $@
