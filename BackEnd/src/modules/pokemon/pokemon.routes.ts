import { Router } from 'express';
import { PokemonController } from './pokemon.controller';

const router = Router();
const controller = new PokemonController();

router.get('/items', controller.getAll); 
router.get('/:id', controller.getItemById);
router.post('/item', controller.create);
router.put('/item', controller.update);
router.delete('/:id', controller.delete);

export default router;
