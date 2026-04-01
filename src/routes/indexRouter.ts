import express, { Request, Response } from 'express';
import * as usersController from '../controllers/userController.js';



const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        configadded: new Date()
    }];

router.get('/', usersController.getUsernames)

router.get('/new', (req: Request, res: Response) => {
    res.render("form");
})

router.post('/new', (req: Request, res: Response) => {
    //here we need to add users
    const message = {
        user: req.body.messageUser,
        text: req.body.messageText,
        added: new Date()
    }
    messages.push(message)
    res.redirect('/');
})

router.get('/message/:id', (req: Request, res: Response) => {
    //search for the user by id
    const NumId = Number(req.params.id);
    if (isNaN(NumId) || NumId < 0 || NumId >= messages.length) {
        return res.status(404).render("404", {
            errorMsg: "Oops! We couldn't find that message."
        });
    }
    res.render("messageDetails", { message: messages[NumId] });
})

export { router } 
