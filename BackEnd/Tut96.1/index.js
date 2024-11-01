// Before running this file, you need to create the 'test' database. See 'BackEnd\Tut96.1\create_test_db.txt'

import mysql from 'mysql2'
import 'dotenv/config'

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
}).promise()

//READ (out of CRUD)
//1
async function get_allnotes() {
    let result = await pool.query('select * from notes');
    let [rows] = result;
    return rows;
}
let rows = await get_allnotes()
console.log(rows)

//2
async function get_notebyid(id) {
    let result = await pool.query(`
        Select * from notes
        where id = ? 
        `, [id])
    let [rows] = result;
    return rows[0];
}
// let note = await get_notebyid(1)
// console.log(note)

//UPDATE
async function insert_note(title, contents) {
    let result = await pool.query(`
        insert into notes (title, contents) values
        (?, ?)
        `, [title, contents])
    let [info] = result;
    return info.insertId;
}
// let newNoteId = await insert_note('4th Note', 'This is 4th Note')
// console.log(newNoteId)

