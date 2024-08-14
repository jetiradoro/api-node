ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY ${DB_DOCKER_PASS};
ALTER USER ${DB_DOCKER_USER}@'%' IDENTIFIED WITH mysql_native_password BY ${DB_DOCKER_PASS};

