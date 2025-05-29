## Introduction

The Restaurant Chain project is a restaurant chain management system. This guide will help you set up and run the project on your local machine.
<img width="1734" alt="Screenshot 2025-05-29 at 16 23 34" src="https://github.com/user-attachments/assets/ac385bdf-25ce-43d8-becf-c0271d2f2572" />


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
