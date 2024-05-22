import cookieParser from 'cookie-parser'
import express from 'express'
import session from 'express-session'

import { authMiddleware } from './middlewares/auth'
import { loggingMiddleware } from './middlewares/logging'
import { router as userRouter } from './routers/user_router'
import { User } from './types'

const app = express()
app.set('view engine', 'ejs')
app.use(loggingMiddleware)
app.use(express.json())
app.use(cookieParser())
app.use(express.static('styles'))
app.use(express.urlencoded({ extended: true }))
app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: true,
	})
)
app.use(userRouter)

app.get('/', authMiddleware, (req, res) => {
	const user: User = req.cookies.auth
	res.status(200).render('index', { title: 'Express', username: user.username })
})
app.listen(3000, () => console.log('Server is running on port 3000'))
