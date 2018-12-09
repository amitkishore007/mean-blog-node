import express from 'express';
import PostsController from '../controller/PostsController';
import {authenticate} from '../middleware/auth';
const router = express.Router();

router.get('/', authenticate, PostsController.get);
router.get('/:id', authenticate, PostsController.getOne);
router.post('/', authenticate, PostsController.post);
router.put('/:id', authenticate, PostsController.put);
router.delete('/:id', authenticate, PostsController.delete);

export default router;