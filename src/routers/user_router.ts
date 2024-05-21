import { Router } from 'express'
import UserController from '../controllers/user_controller'
import { postAuthMiddleware } from '../middlewares/postAuth'

export const router = Router()

router.get('/users', UserController.getUsers)
router.get('/auth', postAuthMiddleware, (_req, res) => res.render('auth'))
router.post('/login', postAuthMiddleware, UserController.login)
router.post('/register', postAuthMiddleware, UserController.register)
