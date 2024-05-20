# Overview

This project is a Node.js application using TypeScript, Express, and MongoDB. The application is designed to be run in a local development environment with the ability to connect to a MongoDB database.

# Author

Md. Sejan

# Prerequisites

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
