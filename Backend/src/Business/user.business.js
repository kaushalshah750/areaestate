import db from '../config/db';

async function getAllUser(){
    var [users] = await db.query(`SELECT User_id, Name, Email, Phone FROM Users`)
    return users;
}

async function getAllRole(){
    var [Roles] = await db.query(`SELECT Id, Name FROM Roles`)
    return Roles;
}

async function loginUser(body){
    var [users] = await db.query(`SELECT Username, Password FROM Authentication WHERE Username = ? and Password = ?`, [body.Username, body.Password])
    return users[0];
}

async function createUser(body){
    console.log(body)
    // var [users] = await db.query(`SELECT Username, Password FROM Authentication WHERE Username = ? and Password = ?`, [body.Username, body.Password])
    // return users[0];
}

module.exports = { getAllUser, loginUser, getAllRole, createUser }