//sql`select * from videos where title ilike ${'%' + search + '%'};`
//sql`select * from videos`
//sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`
//sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`
//sql`delete from videos where id = ${id}`

import { sql } from "./db.js";

export class DatabasePostgres {
  async list() {
    return sql`select * from users;`;
  }

  async createUser(user) {
    const { username, email, password } = user;

    await sql`insert into users (username, email, password) VALUES (${username}, ${email}, ${password})`;
  }

  async checkUsername(username) {
    const user = await sql`select * from users where username = ${username};`;

    return user !== undefined && user.length > 0;
  }

  async checkEmail(email) {
    const user = await sql`select * from users where email = ${email};`;

    return user !== undefined && user.length > 0;
  }

  async checkUser(username, password) {
    const user = await sql`select * from users where username = ${username};`;

    if (user === undefined || user.length === 0) {
      return false;
    }

    return user[0].password === password;
  }
}
