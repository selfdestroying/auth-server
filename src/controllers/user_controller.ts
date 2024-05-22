import { Request, Response } from 'express'
import UserService from '../services/user_service'

class UserController {
	async getUsers(req: Request, res: Response) {
		const users = await UserService.getUsers()
		return res.status(200).send({ status: 'success', payload: users })
	}

	async login(req: Request, res: Response) {
		try {
			const { username, password } = req.body
			const user = await UserService.login(username, password)

			req.session.user = user
			return res.status(301).redirect('/')
		} catch (error) {
			return res.render('auth', {
				status: 'error',
				message: (error as Error).message,
			})
		}
	}

	async register(req: Request, res: Response) {
		try {
			const { username, password } = req.body
			const user = await UserService.register(username, password)

			res.cookie('auth', user)
			return res.status(301).redirect('/')
		} catch (error) {
			return res.render('auth', {
				status: 'error',
				message: (error as Error).message,
			})
		}
	}

	async logout(req: Request, res: Response) {
		req.session.destroy(() => console.log('User logged out'))
		return res.status(301).redirect('/')
	}
}

export default new UserController()
