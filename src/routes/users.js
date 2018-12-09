import express from 'express';
import UsersController from '../controller/UsersController';

const router = express.Router();

router.post('/' ,UsersController.signup);

export default router;