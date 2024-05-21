import { NextFunction, Request, Response } from 'express'
import { User } from '../types'

interface AuthRequest extends Request {
	user?: User
}

export const postAuthMiddleware = (
	req: AuthRequest,
	res: Response,
	next: NextFunction
) => {
	const cookies = req.cookies
	const user = cookies.auth
	if (user) {
		res.status(301).redirect('/')
	} else {
		next()
	}
}
