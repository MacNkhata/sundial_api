import express from 'express';
// import session from 'express-session';
// import passport from './config/passport.js';
import auth from './routes/auth.js';
import mongoose from 'mongoose';

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// // Login
// app.get('/login', (req, res) => {
//   res.send('<a href="/auth/google">Login with Google</a>');
// });

// app.get(
//   '/auth/google',
//   passport.authenticate('google', { scope: ['profile'] })
// );

// app.get(
//   'auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {
//     res.redirect('/');
//   }
// );

// app.get('/', (req, res) => {
//   if (req.isAuthenticated()) {
//     res.send(`Hello, ${req.user.displayName}`);
//   } else {
//     res.send('Hello, guest! Please <a href="/login">login</a>');
//   }
// });

// app.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

// Connect to DB

app.use('/api/v1/auth/', auth);

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri).catch((err) => console.log(err));

app.listen(port, () => console.log(`Server running on ${port}`));
