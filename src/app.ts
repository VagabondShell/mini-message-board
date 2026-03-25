import express, { Request, Response } from 'express';
import { router } from './routes/indexRouter.js'; // Still works!
import path from 'node:path';
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// A strongly typed route!
app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server is blasting off on http://localhost:${PORT}`);
});
