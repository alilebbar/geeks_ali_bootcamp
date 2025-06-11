const express = require("express")
const router = express.Router()
const {postRegister,getLogin} = require("../controlers/controlers.js")
const validateLogin = require("../middlewares/validateLogin.js")

router.post("/register",postRegister)
router.post("/login",validateLogin,getLogin)
router.get("/", (req, res) => {
    res.redirect("/register.html");
});

router.get("/login-page", (req, res) => {
    res.redirect("/login.html");
});


module.exports = {router}