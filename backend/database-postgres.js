//sql`select * from videos where title ilike ${'%' + search + '%'};`
//sql`select * from videos`
//sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`
//sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`
//sql`delete from videos where id = ${id}`

import { sql } from './db.js'

export class DatabasePostgres {
    async list() {
        return sql`select * from users;`
    }

    async create(user) {
        const { username, email, password } = user

        await sql`insert into users (username, email, password) VALUES (${username}, ${email}, ${password})`
    }
}
