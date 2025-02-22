import sequelize from '../config/db';
import { QueryTypes } from 'sequelize';

export async function getAllUser() {
    const [users] = await sequelize.query(`SELECT Id, First_name, Email, Phone FROM Users`);
    return users;
}

export async function getAllRole() {
    const [roles] = await sequelize.query(`SELECT Id, Name FROM Roles`);
    return roles;
}

export async function getAllWorkingLocation() {
    const [working_location] = await sequelize.query(`SELECT Id, Location FROM working_location`);
    return working_location;
}

export async function loginUser(body) {
    const [users] = await sequelize.query(
        `SELECT Username, Password FROM users WHERE Username = :username`,
        {
            replacements: { username: body.Username },
            type: QueryTypes.SELECT,
        }
    );
    console.log(users)
    return users ? users : null; // Ensure safe return
}

export async function createUser(body) {
    const [result] = await sequelize.query(
        `INSERT INTO Users (First_name, Last_name, Email, Phone, Mobile, Dob, Address) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [body.First_name, body.Last_name, body.Email, body.Phone, body.Mobile, body.Dob, body.Address]
    );
    return { id: result.insertId };
}

export default { getAllUser, getAllRole, loginUser, createUser, getAllWorkingLocation };
