import express from 'express';
import { render } from './renderer';

const app = express();
app.use(express.static('public'));

app.use((req, res) => {
  render(req, res);
});

app.listen(3000, () => console.log('Running on http://localhost:3000'));