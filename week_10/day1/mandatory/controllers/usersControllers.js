const User = require("../model/User.js");
async function getUsers(req, res,next) {
  const user = req.user;
  try {
    const users = await User.find({}, "-password");
    res.status(200).json({ users, currentUser: user });
  } catch (error) {
    next(error);
  }
}

module.exports = { getUsers };
