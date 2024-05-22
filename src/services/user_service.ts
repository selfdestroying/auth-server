import { users } from '../database'
import ApiError from '../exceptions/api_error'
import { passwordToHash } from '../utils/hashing'

class UserService {
	async getUsers() {
		return users
	}

	async login(username: string, password: string) {
		const user = users.find(el => el.username === username)
		if (!user) {
			throw ApiError.BadRequest('User not found')
		}

		const hashedPassword = await passwordToHash(password)

		if (user.password != hashedPassword) {
			throw ApiError.BadRequest('Invalid password')
		}

		return user
	}

	async register(username: string, password: string) {
		const user = users.find(el => el.username === username)

		if (user) {
			throw ApiError.BadRequest('User already exists')
		}

		const hashedPassword = await passwordToHash(password)

		const newUser = {
			id: 0,
			name: 'Max',
			username: username,
			password: hashedPassword,
		}
		users.push(newUser)

		return newUser
	}
}

export default new UserService()
