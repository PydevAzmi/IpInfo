import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.set('trust proxy', true)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;  
    res.send({"ip": ip});
});

app.listen(port, () => {
    const host = process.env.HOST || 'http://localhost';
    console.log(`Server is Fire at ${host}:${port}`);
});