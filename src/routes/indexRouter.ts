import express, { Request, Response } from 'express';
import * as usersController from '../controllers/userController.js';



const router = express.Router();

router.get('/', usersController.getUsernames)

router.get('/new', (req: Request, res: Response) => {
    res.render("form");
})

router.post('/new', usersController.addUser)

router.get('/message/:id', usersController.searchUser)

export { router } 
