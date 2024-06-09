import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Sundial API',
    version: '1.0.0',
    description: 'An API for a mobile app for TUT workouts',
  },
};

const options = {
  swaggerDefinition,
  apis: ['./routes/auth.js', './routes/workout.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
