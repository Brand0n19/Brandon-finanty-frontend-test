import { Router } from 'express';
import { PokemonController } from './pokemon.controller';

const router = Router();
const controller = new PokemonController();

router.get('/items', controller.getAll);
router.get('/explorer', controller.getExplorer);
router.get('/:id', controller.getItemById);

export default router;
