export interface User {
	id: number
	name: string
	username: string
	password: string
}

declare module 'express-session' {
	interface SessionData {
		user: User
	}
}
