import { users } from "./database.js"
import { passwordToHash } from "./hashing.js"


class UserService {
    async getUsers() {
        return users
    }

    async login(username, password) {
        const user = users.find((el) => el.username === username)
        if (!user) {
            return {error: "user doesn't exists"}
        }

        const hashedPassword = await passwordToHash(password)

        if (user.password != hashedPassword) {
            return {error: "password is incorrect"}
        }

        return user 
    }

    async register(username, password) {
        const user = users.find((el) => el.username === username)

        if (user) {
            return {error: "user already exists"}
        }

        const hashedPassword = await passwordToHash(password)

        const newUser = {id: 0, name: 'Max', username: username, password: hashedPassword}  
        users.push(newUser)

        return newUser
    }
}

export default new UserService()
