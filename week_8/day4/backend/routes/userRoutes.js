import express from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser, login, verify, userToAdmin } from '../controlers/userControler.js'
import {authorizeUserOrAdmin } from '../middleware/adminMiddlware.js'
import { authenticate } from '../middleware/authenticate.js'
const router = express.Router()

router.get('/',authenticate,authorizeUserOrAdmin,getUsers)
router.get('/:id',authenticate,authorizeUserOrAdmin,getUser)
router.put('/:id',authenticate,authorizeUserOrAdmin,updateUser)
router.delete('/:id',authenticate,authorizeUserOrAdmin,deleteUser)
router.post('/register',createUser)
router.post('/login',login)
router.post('/verify',verify)
router.post('/admin/:id',authenticate,authorizeUserOrAdmin,userToAdmin)


export default router

