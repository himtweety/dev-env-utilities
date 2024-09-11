# Development Environment with Docker Compose

This repository contains a `docker-compose.yml` file that sets up a development environment with essential utilities including MySQL, Redis, Elasticsearch, and phpMyAdmin. This setup simplifies the process of creating a consistent and reproducible development environment.

## Prerequisites

Before you start, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### Clone the Repository

First, clone this repository to your local machine:
```
Copy code
git clone https://github.com/himtweety/dev-env-utilities.git
cd dev-env-utilities
```
Directory Structure
The repository has the following structure:
Configuration files and data files reside in docker-compose folder
```
docker-compose
├── apache-conf
│ └── apache2.conf
├── cache
├── minio_data
├── elasticsearch-data
├── mysql-data
├── mysql
│ └── init_db.sql
├── nginx
├── redis-data
├── xdebug
├── .env
├── docker-compose.yaml
└── README.md
```
### Services

The `docker-compose.yml` file defines the following services:

1. **MySQL**: A popular relational database management system.
2. **Redis**: An in-memory data structure store, used as a database, cache, and message broker.
3. **Mongo**: The world's most popular document database is now the world's most versatile developer data platform.
4. **Elasticsearch**: A distributed, RESTful search and analytics engine.
5. **Minio**: MinIO's High Performance Object Storage is Open Source, Amazon S3 compatible, Kubernetes Native and is designed for cloud native workloads like AI
6. **RabbitMQ**: RabbitMQ is a reliable and mature messaging and streaming broker.
6. **phpMyAdmin**: A web interface for MySQL administration.
   
### Configuration

The default configuration in the `docker-compose.yml` file sets up the services with the following details:

- **MySQL**
  - Image: `mysql:latest`
  - Port: `3306`
  - Environment Variables:
    - `MYSQL_ROOT_PASSWORD=rootpassword`: The root password for MySQL (default: `rootpassword`)
    - `MYSQL_DATABASE=mydatabase`: The default database name (default: `mydatabase`)
    - `MYSQL_USER=user`: The default user (default: `user`)
    - `MYSQL_PASSWORD=password`: The default user password (default: `password`)

- **Redis**
  - Image: `redis:latest`
  - Port: `6379`

- **Minio**
  - Image: `minio:latest`
  - Port: `9000-9001`
  - Environment Variable:
      - `MINIO_ROOT_USER:-minioadmin`
      - `MINIO_ROOT_PASSWORD:-minioadmin`

- **Mongo**
  - Image: `mongo:latest`
  - Port: `27017`
  - Environment Variable:
        - `MONGO_INITDB_ROOT_USERNAME:-mongo`
        - `MONGO_INITDB_ROOT_PASSWORD:-mongo`
        - `MONGO_INITDB_DATABASE:-mongodb`
  - You have to add application users and password with required privilege in (docker-compose/mongo-conf/init-mongo.js)

- **RabbitMQ**
  - Image: `rabbitmq:3-management-alpine`
  - Port: `5672, 15672`
  - Environment Variable:
    - `RABBITMQ_ERLANG_COOKIE:-secret_cookie`
    - `RABBITMQ_DEFAULT_USER:-rabbitmq`
    - `RABBITMQ_DEFAULT_PASS:-123456`

- **Elasticsearch**
  - Image: `elasticsearch:7.10.1`
  - Port: `9200`
  - Environment Variables:
    - `discovery.type=single-node`: Single-node discovery (default: `single-node`)

- **phpMyAdmin**
  - Image: `phpmyadmin/phpmyadmin`
  - Port: `8080`
  - Environment Variables:
    - `PMA_HOST=mysql`: MySQL service name (default: `mysql`)
    - `PMA_USER=root`: MySQL user (default: `root`)
    - `PMA_PASSWORD=rootpassword`: MySQL root password (default: `rootpassword`)
      
## Usage

### Starting the Services

To start all the services, run:

```
docker-compose up
```
This command will pull the necessary images (if not already available) and start the services as defined in the docker-compose.yml file.


### Accessing the Services
- **MySQL**: Connect to `localhost:3306` using a MySQL client.
- **Redis**: Connect to `localhost:6379` using a Redis client.
- **Mongo**: Connect to `localhost:6379` using a Redis client.
- **RabbitMQ**: connect to service `localhost:5672` and access `localhost:15672` using a web browser.
- **Elasticsearch**: Access the Elasticsearch REST API at `http://localhost:9200`.
- **phpMyAdmin**: Access the web interface at `http://localhost:8080`.


### Stopping the Services

To stop the services, run:

```
docker-compose down
```
This command stops and removes all the containers defined in the docker-compose.yml file.


### Customization

You can customize the environment variables and other configurations by editing the `docker-compose.yml` file. For example, to change the MySQL root password, modify the `MYSQL_ROOT_PASSWORD` environment variable.

### Troubleshooting

If you encounter any issues, check the logs for each service:

```
docker-compose logs <service-name>
```
Replace <service-name> with the name of the service (e.g., mysql, redis, elasticsearch, phpmyadmin).


### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Acknowledgments

- Docker
- Docker Compose
- MySQL
- Redis
- Elasticsearch
- phpMyAdmin

## Contributing

Feel free to submit issues or pull requests if you have any improvements or suggestions.


## Contact

If you have any questions, feel free to reach out at [er.himanshu4@gmail.com].

This README file provides a comprehensive guide to setting up and using the Docker Compose environment for development purposes. Adjust the configurations and usage instructions as needed to fit your specific requirements.






