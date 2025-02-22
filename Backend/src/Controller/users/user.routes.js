import express from 'express';
import users from './user.controller'

const router = express.Router();

router.get("/", users.getAllUser);
router.get("/role", users.getAllRole);
router.get("/working-location", users.getAllWorkingLocation);
router.post("/login", users.loginUser);
router.post("/add", users.createUser);

export default router;