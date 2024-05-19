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
	const user = req.cookies.auth
	if (user) {
		next()
	} else {
		res.status(302).redirect('/auth')
	}
}
