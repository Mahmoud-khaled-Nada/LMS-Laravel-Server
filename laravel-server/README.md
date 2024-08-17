<!-- Docker -->

# open MySql

1 docker exec -it laravel-sail-mysql-1 bash
2 mysql -u sail -p
3 password

# open Redis

docker exec -it laravel-sail-redis-1 redis-cli

# Drop All Docker Images

1 docker stop $(docker ps -q)
2 docker rm $(docker ps -a -q)

# Sail commands

==> ./vendor/bin/sail build
==> ./vendor/bin/sail build --no-cache

==> ./vendor/bin/sail up
==> ./vendor/bin/sail up -d

==> ./vendor/bin/sail down
