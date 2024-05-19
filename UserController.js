import UserService from "./UserService.js"

class UserController {
    async getUsers(req, res) {
        const users = await UserService.getUsers()
        return res.status(200).send({status: 'success', payload: users})
    }

    async login(req, res) {
        const {username, password} = req.body
        const user = await UserService.login(username, password)

        return res.status(200).send({status: 'success', payload: user})
    }

    async register(req, res) {
        const {username, password} = req.body
        const user = await UserService.register(username, password)
        return res.status(200).send({status: 'success', payload: user})
    }
}


export default new UserController()
