import sequelize from '../config/db';
import { QueryTypes } from 'sequelize';
import User from "../models/User.model.js";
import Role from '../models/Role.model';

export async function getAllUser() {
    const [users] = await sequelize.query(`SELECT * FROM Users`);
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
    const users = await User.findOne({
        attributes: ['Id', 'Username', 'Password', 'First_name', 'Last_name'], // Only include these fields from User table
        include: [{
            model: Role,
            attributes: ['Id', 'Name'] // Only include these fields from Role table
        }],
        where: { Username: body.Username } // Ensure "Username" matches column case
    });
    return users ? users : null; // Ensure safe return
}

export async function createUser(body) {
    const user = await User.create(body);
    // const [result] = await sequelize.query(
    //     `INSERT INTO Users (First_name, Last_name, Email, Phone, Mobile, Dob, Address) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    //     [body.First_name, body.Last_name, body.Email, body.Phone, body.Mobile, body.Dob, body.Address]
    // );
    return user;
}

export default { getAllUser, getAllRole, loginUser, createUser, getAllWorkingLocation };