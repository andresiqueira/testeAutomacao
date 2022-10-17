import express from 'express';
import trelloRouter from './routers/trelloRouter';

const app = express();

app.use(express.json());
app.use('/trello', trelloRouter);

export default app;