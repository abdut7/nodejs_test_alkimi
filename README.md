# Channel Package Subscription

## Technologies

Folowing technologies and standers are consumed in this project

- Nodejs
- Express
- TypeScripts
- Microservices structure
- Sequelize ORM
- Factory Design pattern
- Clean-onion layer structure
- Swagger API docs


## Prerequisites

List any software, tools, or dependencies that users need to have installed on their machine. For example:

- Node.js (version X.X.X)
- npm or yarn
- MySQL server (version X.X.X)

## Installation

Step-by-step instructions on how to set up and run your backend app locally.

1. Clone this repository: `git clone https://github.com/abdut7/nodejs_test_alkimi.git`
2. Navigate to the project directory: `cd nodejs_test_alkimip`
3. Install dependencies: `npm install` 
4. Create a MySQL database. Then Configure database connection: 
   Update `libs/models/index.ts` with your MySQL database credentials.
5. Start the user services   : `npm run dev-user`
6. Start the subscription services   : `npm run dev-subscription`  
(NB:We have two microservices)

## Usage

Explain how users can use your backend app. Provide code examples or usage scenarios if applicable.

## Database Configuration

Explain how to configure the MySQL database for your app.

1. Create a MySQL database.
2. Update `config/database.ts` with your database credentials.

## API Documentation

If you have API endpoints, explain how to use them. You can provide sample requests and responses using tools like Postman or Swagger.

## TODO

- SonarQube 
- Kafka Logging configuration
- ESLint