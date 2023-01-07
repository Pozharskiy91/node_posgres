const db = require('../db')

class UserController {
    //Созать пользвотеля
        async createUser(req, res){
            const {name, surname} = req.body
            const newPerson = await db.query(
                `
                INSERT INTO 
                    person (name, surname) 
                    values ($1, $2) 
                RETURNING *
                `, [name, surname])

            res.json(newPerson.rows[0])
    }
    //Возвращать клиенту всех пользователей
        async getUsers(req, res){
            const users = await db.query(`SELECT * FROM person`)
            res.json(users.rows)
    }
    //Возвращать одного пользователя
        async getOneUser(req, res){
            const id = req.params.id
            const user = await db.query(
            `
            SELECT * FROM 
                person 
                where id = $1
            `, [id])

            res.json(user.rows[0])
    }
    //Обновлять данные пользователя
        async updateUser(req, res){
            const {id, name, surname} = req.body
            const user = await db.query(
                `
                UPDATE 
                    person
                    set name = $1,
                    surname = $2
                    where id = $3
                RETURNING *
                `, [name, surname, id]
            )
            res.json(user.rows[0])
    }
    //Удаление данные пользователя
        async deleteUser(req, res){
            const id = req.params.id
            const user = await db.query(
            `
            DELETE FROM 
                person 
                where id = $1
            `, [id])

            res.json(user.rows)
    }
}

module.exports = new UserController()