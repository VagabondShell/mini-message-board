import { Request, Response } from 'express';
import { body, validationResult, matchedData } from "express-validator"
import * as db from "../db/queries.js";

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

export const validateUser = [
    body("messageUser").trim()
        .isAlpha().withMessage(`Username ${alphaErr}`)
        .isLength({ min: 1, max: 10 }).withMessage(`Username ${lengthErr}`),
    body("messageText")
        .trim()
        .isLength({ min: 1, max: 300 }).withMessage("message cannot exceed 300 characters.")
        .escape()
];

export async function getUsernames(req: Request, res: Response) {
    const messages = await db.getAllUsernames()
    res.render("index", { title: "Mini Messageboard", messages: messages });
}

export async function addUser(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Validation failed!
        return res.status(400).render("404", { // Use your 'form' view, not 404
            title: "New Message",
            errors: errors.array(),
            prevData: req.body // Pass back what they typed so it's not lost
        });
    }
    const data = matchedData(req);
    await db.insertUsername(data.messageUser, data.messageText);
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
