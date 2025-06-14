# Restaurant Chain Management System

## Overview

The Restaurant Chain Management System is a comprehensive solution designed to streamline operations for multi-location restaurant businesses. This system provides robust tools for managing inventory, staff, orders, and business analytics across multiple restaurant locations.

![System Dashboard](https://github.com/user-attachments/assets/ac385bdf-25ce-43d8-becf-c0271d2f2572)

## Features

- **Multi-location Management**: Centralized control of multiple restaurant branches
- **Inventory Management**: Real-time tracking of ingredients and supplies
- **Staff Management**: Employee scheduling, performance tracking, and payroll integration
- **Order Processing**: Streamlined order management and kitchen display system
- **Analytics Dashboard**: Business intelligence and reporting tools
- **Customer Management**: Loyalty program and customer relationship management
- **Menu Management**: Dynamic menu updates and pricing control
- **Supply Chain Integration**: Automated supplier ordering and delivery tracking

## Technology Stack

### Backend

- **Runtime**: Node.js v18.x
- **Framework**: Express.js v4.18.2
- **Database**: MySQL v5.7 with Sequelize ORM v6.33.0
- **Template Engine**: EJS v3.1.9 with express-ejs-layouts
- **Authentication**: Express Session v1.17.3
- **File Handling**: Multer v1.4.5 & express-fileupload v1.4.1
- **Email Service**: Nodemailer v6.9.16
- **HTTP Client**: Axios v1.7.7
- **Date/Time**: Moment Timezone v0.5.46
- **Security**: Bcrypt v5.1.1

### Development Tools

- **Build Tool**: Babel v7.22.20
- **Development Server**: Nodemon v3.0.1
- **Logging**: Morgan v1.10.0
- **Database Migration**: Sequelize CLI v6.6.1
- **Environment Variables**: dotenv v16.3.1

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js v18.x or higher
- MySQL v5.7 or higher
- Git
- Docker and Docker Compose
- npm (Node Package Manager)

## Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/smile-ko/restaurant-chain.git
cd restaurant-chain
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment

```bash
cp .env-example .env
```

Edit the `.env` file with your specific configuration:

- Database credentials
- JWT secret key
- API endpoints
- Other environment-specific variables

### 4. Start Docker Services

```bash
docker-compose up -d
```

### 5. Database Setup

```bash
# Run database migrations
npx sequelize-cli db:migrate

# Seed initial data
npx sequelize-cli db:seed:all
```

### 6. Start the Application

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

## Project Structure

```
restaurant-chain/
├── src/
│   ├── app/
│   │   ├── http/
│   │   │   ├── controllers/
│   │   │   └── middlewares/
│   │   └── models/
│   │
│   ├── configs/
│   │   ├── db/
│   │   └── index.js
│   │
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   │
│   ├── public/
│   │   ├── admins/
│   │   ├── customers/
│   │   └── storages_image/
│   │
│   ├── resources/
│   │   ├── views/
│   │   └── scss/
│   │
│   └── routes/
│       ├── admins/
│       ├── customers/
│       └── index.js
│
└── utils/
    ├── getCurrentDate.js
    ├── sendEmail.js
    └── sendZns.js
```

## Available Scripts

- `npm run dev`: Start development server with hot-reload
- `npm run build`: Build the application for production
- `npm start`: Start the production server
- `npm test`: Run tests (to be implemented)

## API Documentation

The API documentation is available at `/api-docs` when running the application locally.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration
```

## Deployment

The application can be deployed using Docker:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Support

For support, please email support@restaurantchain.com or create an issue in the GitHub repository.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community for their invaluable tools and libraries
