import { Router } from 'express'
import UserController from './UserController.js'


export const router = Router()

router.get('/users', UserController.getUsers)
router.post('/login', UserController.login)
router.post('/register', UserController.register)
