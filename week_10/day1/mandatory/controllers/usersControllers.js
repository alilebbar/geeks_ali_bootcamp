const User = require("../model/User.js");
async function getUsers(req, res) {
  const user = req.user;
  try {
    const users = await User.find({}, "-password");
    res.status(200).json({ users, currentUser: user });
  } catch (error) {
    res.status(500).json({ message: "Error getting users" });
  }
}

module.exports = { getUsers };
