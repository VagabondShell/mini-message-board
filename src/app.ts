import express, { Request, Response } from 'express';
import { router } from './routes/indexRouter.js'; // Still works!
import path from 'node:path';
const app = express();

app.set('views', path.join(process.cwd(), 'src', 'views'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

// A strongly typed route!
app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server is blasting off on http://localhost:${PORT}`);
});
