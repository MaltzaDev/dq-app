import express from "express"
import { DatabasePostgres } from "./database-postgres.js"

const server = express()
server.use(express.json())

const database = new DatabasePostgres()

server.get("/users", async (req, res) => {
    const users = await database.list()

    res.send(JSON.stringify(users)).end()
})

server.post("/users", async (request, response) => {
    console.log(request.body)
    const { username, email, password } = request.body

    await database.create({
        username,
        email,
        password,
    })

    return response.status(201).send()
})

server.listen(3000, () => {
    console.log("Server started on port 3000")
})