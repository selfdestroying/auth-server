import { users } from '../database'
import { passwordToHash } from '../utils/hashing'

class UserService {
	async getUsers() {
		return users
	}

	async login(username: string, password: string) {
		const user = users.find(el => el.username === username)
		if (!user) {
			throw Error('user not found')
		}

		const hashedPassword = await passwordToHash(password)

		if (user.password != hashedPassword) {
			throw Error('invalid credentials')
		}

		return user
	}

	async register(username: string, password: string) {
		const user = users.find(el => el.username === username)

		if (user) {
			return
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
