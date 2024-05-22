import { NextFunction, Request, Response } from 'express'

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = req.session.user
	if (user) {
		res.status(200).render('index', { username: user.username })
	} else {
		res.status(302).render('auth', { status: '' })
	}
}
