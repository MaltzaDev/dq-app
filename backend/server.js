import express from "express";
import { DatabasePostgres } from "./database-postgres.js";
import { validateEmail } from "./validator.js";

const server = express();
server.use(express.json());

const database = new DatabasePostgres();

server.post("/users/login", async (request, response) => {
  const { username, password } = request.body;

  if (!username || !password) {
    return response.status(401).send("Missing required fields");
  }

  const userNameExists = await database.checkUsername(username);
  if (!userNameExists) {
    return response.status(401).send("Username is incorrect");
  }

  const userExist = await database.checkUser(username, password);
  if (userExist) {
    return response.status(200).send("Login successful!");
  }

  return response.status(401).send("Username or password is incorrect");
});

server.post("/users/signup", async (request, response) => {
  const { username, email, password } = request.body;

  if (!username || !email || !password) {
    return response.status(400).send("Missing required fields");
  }

  const userNameExists = await database.checkUsername(username);
  if (userNameExists) {
    return response.status(400).send("Username already exists");
  }

  if (!validateEmail(email)) {
    return response.status(400).send("Invalid email");
  }

  const emailExists = await database.checkEmail(email);
  if (emailExists) {
    return response.status(400).send("Email already exists");
  }

  await database
    .createUser({
      username,
      email,
      password,
    })
    .catch((err) => {
      console.log("Error creating user");
      return response.status(500).send("Internal server error");
    });

  return response.status(201).send("Sign up successful!");
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
