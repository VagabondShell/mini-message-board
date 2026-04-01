import { Request, Response } from 'express';
import * as db from "../db/queries.js";
export async function getUsernames(req: Request, res: Response) {
    const messages = await db.getAllUsernames()
    res.render("index", { title: "Mini Messageboard", messages: messages });
}

export async function addUser(req: Request, res: Response) {
    const user = req.body.messageUser
    const text = req.body.messageText
    await db.insertUsername(user, text);
    res.redirect('/');
}

export async function searchUser(req: Request, res: Response) {
    // 1. Debug the input
    const rawId = req.params.id;
    const NumId = Number(rawId);

    try {
        const messages = await db.searchUsername(NumId);
        if (!messages || (Array.isArray(messages) && messages.length === 0)) {
            return res.status(404).render("404", {
                errorMsg: "Oops! We couldn't find that message."
            });
        }

        res.render("messageDetails", { message: messages });

    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}
