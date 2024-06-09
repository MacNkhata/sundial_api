import express from 'express';
import passport from '../config/passport.js';
import swagger from 'swagger-jsdoc';
import {
  register,
  login,
  forgotPassword,
  resetPassword,
} from '../controllers/authController.js';

const router = express.Router();
/**
 * @swagger
 * auth/register:
 *   post:
 *     description: registers a user to the system
 *     responses:
 *       201:
 *         description: Returns the created user object.
 */
router.post('/register', register);
/**
 * @swagger
 * auth/login:
 *   post:
 *     description: registers a user to the system
 *     responses:
 *       201:
 *         description: Returns the created user object.
 */
router.post('/login', login);

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

export default router;
