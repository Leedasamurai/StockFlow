# StockFlow

## Description

StockFlow is an inventory management system designed to calculate sales, purchases, expenses, and track stock. It also manages inventory through a complete dashboard.

The project features a modern stack for both frontend and backend, ensuring scalability and robust performance.

## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Database Management](#database-management)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Frontend (Next.js)

1. Install the necessary packages:
   ```sh
   npm install -g npx
   npm install @mui/x-data-grid @mui/material @emotion/react @emotion/styled lucide-react numeral recharts uuid axios
   ```
2. Install development dependencies:
   ```sh
   npm install --save-dev @types/node @types/uuid @types/numeral tw-colors react-redux @reduxjs/toolkit dotenv
   ```

### Backend (Node.js)

1. Initialize a new Node.js project:
   ```sh
   npm init -y
   ```
2. Install Prisma and other necessary packages:
   ```sh
   npm install prisma @prisma/client
   npx prisma init
   npx tsc --init
   npm install --save-dev ts-node typescript @types/node
   npx prisma generate
   npx prisma migrate dev --name init
   npm run seed
   npm install express body-parser cors dotenv helmet morgan concurrently
   npm install --save-dev nodemon @types/cors @types/express @types/morgan
   npm install rimraf
   ```

## Backend Setup

- **EC2** - For hosting the backend.
- **RDS** - For the PostgreSQL database.
- **Amplify** - For deploying the Next.js frontend.
- **S3** - For storing images.

## Database Management

1. To connect to PostgreSQL:

   ```sh
   psql -U postgres -h localhost -d StockFlow
   ```

   - `-U postgres`: Specifies the PostgreSQL username.
   - `-h localhost`: Specifies the host (localhost).
   - `-d StockFlow`: Specifies the database name.

2. List tables:

   ```sh
   \dt
   ```

3. Inspect a specific table:

   ```sh
   \d table_name
   ```

   Replace `table_name` with the name of the table you want to inspect.

4. Query a table:

   ```sh
   SELECT * FROM "Expenses";
   ```

5. Exit PostgreSQL prompt:
   ```sh
   \q
   ```

## Usage

To start the application, follow the instructions in the respective frontend and backend sections above. For detailed instructions, refer to the project setup documentation.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Lesego Phuku - lesegoleemac@gmail.com  
Project Link: [https://github.com/Leedasamurai/StockFlow/tree/master](https://github.com/Leedasamurai/StockFlow/tree/master)
