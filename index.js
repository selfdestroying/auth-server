import express from "express"
import {router as userRouter} from './userRouter.js'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRouter)

app.get("/", (req, res) => {
    res.status(200).sendFile("index.html", { root: './' })
})
app.listen(3000, () => console.log("Server is running on port 3000"))