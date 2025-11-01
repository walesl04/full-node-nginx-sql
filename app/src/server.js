import express from 'express'
import { getPeople } from './controllers/index.js';

const app = express();
const PORT = 3000;

app.get("/", getPeople);


app.listen(PORT, () => {
  console.log("Server running... PORT:" + PORT)
});
