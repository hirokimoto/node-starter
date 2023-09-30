<!-- ABOUT THE PROJECT -->
## About The Project

A sample project using Node.JS with Express Framework that introduce using of

* Dockerised application with nodejs, mysql, phpmyadmin
* CRUD with API using JWT Authentication
* Google Login using OAuth2
* Google Cloud Bucket File Upload
* Test Cases for API using jest
* Sequlize using MySQL (Seeders, Model Validation)
* Mail Sending using nodemailer


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Following tools are required to setup this project , follow steps as per your distro from below links to install docker stuff!

* Docker installed, Refer [Install Docker](https://docs.docker.com/engine/install/)
* Docker Compose installed, Refer these [Install Docker Compose](https://docs.docker.com/compose/install/)

### Installation (Linux Environment)


1. Clone the repo
```sh
git clone https://github.com/hirokimoto/node-starter.git
```
2. Go to directory
```sh
cd node-starter
```
3. Copy .env.example to .env
```sh
cp .env.example .env
```
4. Do necessary configuration in .env and run project
```sh
docker-compose up -d
```
5. Verify setup
```sh
docker ps
```
5. To stop your running project
```sh
docker-compose down
```

* Refer API Docs : Link will be available soon

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Express Framework](https://bootstrap-vue.org)
* [Passport JS](https://www.passportjs.org/)
* [Sequelize](https://sequelize.org/)
* [Jest](https://jestjs.io/)
* [Docker](https://www.docker.com/)
