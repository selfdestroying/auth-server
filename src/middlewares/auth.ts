import { NextFunction, Request, Response } from 'express'
import { User } from '../types'

interface AuthRequest extends Request {
	user?: User
}

export const authMiddleware = (
	req: AuthRequest,
	res: Response,
	next: NextFunction
) => {
	const cookies = req.cookies
	const user = cookies.auth
	console.log(user)
	if (user) {
		res.status(200).render('index', { username: user.username })
	} else {
		res.status(302).render('auth', { status: '' })
	}
}
