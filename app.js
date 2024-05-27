import express from 'express';
import session from 'express-session';
import passport from './config/passport.js';
import auth from './routes/auth.js';
import mongoose from 'mongoose';

const port = process.env.PORT || 8080;

const app = express();

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

// Connect to DB
app.use('/api/v1/auth/', auth);

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri).catch((err) => console.log(err));

app.listen(port, () => console.log(`Server running on ${port}`));
