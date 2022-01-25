import * as express from 'express'; // Inicializa express
import { Request, Response } from 'express'; // Elementos de validación

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Typescript')
});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})