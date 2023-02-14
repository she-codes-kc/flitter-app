"use strict";

const User = require("../../../models/User");

const getUser = async (username) => {
  // search for a user at the DB
  return await User.findOne({ username });
};

module.exports = getUser;
