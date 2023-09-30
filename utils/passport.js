const passport = require("passport");
const db = require("../models");

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, user);
  });
});
passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});
