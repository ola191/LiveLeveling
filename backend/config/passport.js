// config/passport.js
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function(passport, User) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ where: { googleId: profile.id } });
    if (existingUser) {
      return done(null, existingUser);
    }
    const newUser = await User.create({ googleId: profile.id });
    done(null, newUser);
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id);
    done(null, user);
  });
};
