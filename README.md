# Overview

This project is a Node.js application using TypeScript, Express, and MongoDB. The application is designed to be run in a local development environment with the ability to connect to a MongoDB database.

# Author

Md. Sejan

#### Production API endpoint for testing

- https://deshishop.vercel.app/
- https://deshishop.vercel.app/api/products
- https://deshishop.vercel.app/api/orders

## Features

- CRUD operations for products and orders
- Search products by name
- Filter orders by user email

## API Endpoints

### Products

- **Create a Product**

  - **URL:** `/api/products`
  - **Method:** `POST`
  - **Request Body:**
    ```json
    {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    }
    ```
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Product created successfully!",
      "data": { ... }
    }
    ```

- **Get All Products**

  - **URL:** `/api/products`
  - **Method:** `GET`
  - **Query Parameters:**
    - `searchTerm` (optional) - Search for products by name
    - **URL:** `/api/products?searchTerm=iphone`
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Products fetched successfully!",
      "data": [ ... ]
    }
    ```

- **Get a Product by ID**

  - **URL:** `/api/products/:productId`
  - **Method:** `GET`
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Product fetched successfully!",
      "data": { ... }
    }
    ```

- **Update a Product**

  - **URL:** `/api/products/:productId`
  - **Method:** `PUT`
  - **Request Body:** (same as creating a product)
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Product updated successfully!",
      "data": { ... }
    }
    ```

- **Delete a Product**
  - **URL:** `/api/products/:productId`
  - **Method:** `DELETE`
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Product deleted successfully!",
      "data": null
    }
    ```

### Orders

- **NOTE**

  - Need a valid id from product list for order to be placed.

- **Get All Orders**
  - **URL:** `/api/orders`
  - **Method:** `GET`
  - **Query Parameters:**
    - `email` (optional) - Filter orders by user email
    - **URL:** `/api/orders?email=level2@programming-hero.com`
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Orders fetched successfully!",
      "data": [ ... ]
    }
    ```

# Prerequisites for Run Locally

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB (you can use a local instance or MongoDB Atlas for cloud-hosted database)

# Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mdsejan/deshishop-server.git
cd deshishop
```

### 2. Install Dependencies

You can use npm to install the project dependencies.

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables. You can modify the values according to your setup.

```env
PORT=5000
DATABASE_URL=mongodb+srv://<UserName>:<Password>@cluster*** (Mongodb Database Driver URL)
```

### 4. Run the Application

To run the application in development mode, use the following command:

```bash
npm run start:dev
```

This command uses `ts-node-dev` to run the TypeScript code and watch for any changes, automatically restarting the server when changes are detected.

### 5. Linting

To lint the code, you can use the following command:

```bash
npm run lint
```

### 5. Linting

To lint the code, you can use the following command:

```bash
npm run lint
```

To automatically fix linting errors:

```bash
npm run lint:fix
```

# Project Structure

Here's a brief overview of the project structure:

```bash
.
DeshiShop
│
├── dist
│   │
│   ├── app.js
│   └── server.js
│
├── src
│   ├── app
│   │   ├── config
│   │   └── modules
│   │
│   ├── app.ts
│   └── server.ts
│
│
├── .env
├── .gitignore
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

```

## Contributing

Contributions to `DeshiShop` are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a `pull request`. Please ensure that any contributions adhere to the project's coding standards and guidelines.

## License

The `DeshiShop` project is licensed under the [MIT License](LICENSE).
