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
├── elasticsearch-data
├── mysql-data
├── mysql
│ └── init_db.sql
├── nginx
├── redis-data
├── system-config
│ ├── .synergiqplatform.ini
│ ├── ability-online-master.ini
│ ├── local.php
│ └── mastersite.ini
├── xdebug
├── .env
├── docker-compose.yaml
└── README.md
```
### Services

The `docker-compose.yml` file defines the following services:

1. **MySQL**: A popular relational database management system.
2. **Redis**: An in-memory data structure store, used as a database, cache, and message broker.
3. **Elasticsearch**: A distributed, RESTful search and analytics engine.
4. **phpMyAdmin**: A web interface for MySQL administration.
   
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






