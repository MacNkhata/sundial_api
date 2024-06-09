import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import swaggerUI from 'swagger-ui-express';
import passport from './config/passport.js';
import auth from './routes/auth.js';
import workout from './routes/workout.js';
import swaggerSpec from './swagger.js';

const port = process.env.PORT || 8080;

const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/auth', auth);
app.use('/api/v1/workouts', workout);

// Connect to DB
const uri = process.env.DB_CONNECTION;
mongoose.connect(uri).catch((err) => console.log(err));

app.listen(port, () => console.log(`Server running on ${port}`));
