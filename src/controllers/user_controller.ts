import { Request, Response } from 'express'
import UserService from '../services/user_service'

class UserController {
	async getUsers(req: Request, res: Response) {
		const users = await UserService.getUsers()
		return res.status(200).send({ status: 'success', payload: users })
	}

	async login(req: Request, res: Response) {
		const { username, password } = req.body
		const user = await UserService.login(username, password)

		if (!user) {
			return res
				.status(401)
				.send({ status: 'error', message: 'invalid credentials' })
		}

		res.cookie('auth', user)

		return res.status(301).redirect('/')
	}

	async register(req: Request, res: Response) {
		const { username, password } = req.body
		const user = await UserService.register(username, password)
		if (!user) {
			return res
				.status(401)
				.send({ status: 'error', message: 'invalid credentials' })
		}

		res.cookie('auth', user)
		return res.status(301).redirect('/')
	}
}

export default new UserController()
