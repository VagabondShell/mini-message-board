import { Request, Response } from 'express';
import * as db from "../db/queries.js";
export async function getUsernames(req: Request, res: Response) {
    const messages = await db.getAllUsernames()
    res.render("index", { title: "Mini Messageboard", messages: messages });
}
