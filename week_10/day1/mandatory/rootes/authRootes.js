const express = require('express');
const router = express.Router()
const {register,login,logout,refresh} = require('../controllers/authoConrollers')
const {getUsers} = require('../controllers/usersControllers')
const {verifyToken} = require('../midlewares/verifyToken')



router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.post('/refresh',refresh)
router.get('/users',verifyToken,getUsers)

module.exports = router;