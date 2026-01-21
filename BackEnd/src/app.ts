import express from 'express';
import cors from 'cors';
import pokemonRoutes from './modules/pokemon/pokemon.routes';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', pokemonRoutes);


app.use(errorMiddleware);

export default app;
