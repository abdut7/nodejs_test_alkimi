import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'API documentation for your Express app',
    },
  },
  servers: [
    {
      url: 'http://localhost:4000',
    },
  ],
  apis: ['./microservices/user_service/*.ts'], 
};

export default  swaggerJsDoc(options);

