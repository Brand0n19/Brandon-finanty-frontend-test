import { Router } from 'express';
import { PokemonController } from '../modules/pokemon/pokemon.controller';


const router = Router();
const controller = new PokemonController();

router.get('/items', controller.getAll);

export default router;
