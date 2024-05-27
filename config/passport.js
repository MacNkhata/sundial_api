// import passport from 'passport';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: 'username',
//       emailField: 'email',
//       passwordField: 'password',
//     },
//     async (email, password, done) => {
//       try {
//         const user = await User.findOne({ email });
//         if (!user) {
//           return done(null, false, { message: 'Incorrect email.' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }

//         return done(null, user);
//       } catch (err) {
//         return done(err);
//       }
//     }
//   )
// );

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: process.env.GOOGLE_CALLBACK_URL,
//     },
//     (accessToken, refreshToken, profile, done) => {
//       let user = users.find((user) => user.googleId === profile.id);
//       if (!user) {
//         user = {
//           id: users.length + 1,
//           googleId: profile.id,
//           displayName: profile.displayName,
//         };
//         users.push(user);
//       }
//       return done(null, user);
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   const user = users.find((user) => user.id === id);
//   done(null, user);
// });

// export default passport;
