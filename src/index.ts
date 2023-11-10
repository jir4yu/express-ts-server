import express, {Request, Response} from 'express'
const app = express();
const port = 1234;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello Express!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})