import express from 'express';
var router = express.Router();

import userRoutes from './users/user.routes';
import leadRoutes from './leads/lead.routes';

router.use('/users', userRoutes);
router.use('/leads', leadRoutes);

module.exports = router;