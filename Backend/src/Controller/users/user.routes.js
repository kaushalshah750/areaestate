import express from 'express';
var router = express.Router();
import users from './user.controller'

module.exports = () => {
    router.get("/", users.getAllUser);
    router.get("/role", users.getAllRole);
    router.post("/login", users.loginUser);
    router.post("/add", users.createUser);
    return router;
}