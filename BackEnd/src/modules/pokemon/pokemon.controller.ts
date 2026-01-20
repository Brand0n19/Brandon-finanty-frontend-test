import type { Request, Response } from "express";
import { GetPokemonsQuery } from "./queries/pokemon.list.query";
import { GetPokemonExplorer } from "./queries/pokemon.list.explore";
import { GetPokemonByIdQuery } from "./queries/pokemon.list-by-id.query";

export class PokemonController {
  async getAll(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;

    const query = new GetPokemonsQuery();
    const result = await query.execute(page, limit);

    res.json(result);
  }

  async getExplorer(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const take = Number(req.query.take) || 20;

    const query = new GetPokemonExplorer();
    const result = await query.explore(page, take,);

    res.json(result);
  }

  async getItemById(req: Request, res: Response) {
    const id = Number(req.query.id);

    const query = new GetPokemonByIdQuery();

    const result = await query.execute(id);
    res.json(result);
  }

}
