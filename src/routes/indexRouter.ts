import express, { Request, Response } from 'express';


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
        added: new Date()
    }
];

router.get('/', (req: Request, res: Response) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });

})

router.get('new', (req: Request, res: Response) => {
    // define here the new page
})


export { router } 
