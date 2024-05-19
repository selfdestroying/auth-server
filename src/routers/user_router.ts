import { Router } from 'express'
import UserController from '../controllers/user_controller'

export const router = Router()

router.get('/users', UserController.getUsers)
router.get('/auth', (req, res) => res.render('auth'))
router.post('/login', UserController.login)
router.post('/register', UserController.register)
