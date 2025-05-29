## Introduction

The Restaurant Chain project is a restaurant chain management system. This guide will help you set up and run the project on your local machine.

## System Requirements

- **Node** v18.x
- **MySQL** v5.7
- **Git**
- **Docker**

## Installation Steps

```bash
git clone https://github.com/smile-ko/restaurant-chain.git

cd restaurant-chain

npm install

docker-compose up -d

cp .env-example .env

CREATE DATABASE restaurant_chain;

npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all

npm run dev
```
