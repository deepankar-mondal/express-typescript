import express, { Express, Request , Response} from 'express';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.post('/', (req: Request, res: Response) => {
  res.json({
    data: req.body
  })
  //res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});