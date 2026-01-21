import type { Request, Response } from "express";
import { GetPokemonsQuery } from "./queries/pokemon.list.query";
import { GetPokemonExplorer } from "./queries/pokemon.list.explore";
import { GetPokemonByIdQuery } from "./queries/pokemon.list-by-id.query";
import { CreatePokemon } from "./commands/create-pokemon.command";
import { UpdatePokemon } from "./commands/update-pokemon.command";
import { DeletePokemon } from "./commands/delete-pokemon.commands";

export class PokemonController {
  async getAll(req: Request, res: Response) {
    try{
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 20;
      const search = String(req.query.search || '');
  
      const query = new GetPokemonsQuery();
      const result = await query.execute(page, limit, search);
  
      res.json(result);
    }catch (error: any) {
    // Aquí capturamos el "We couldn't find that Pokémon"
    console.error("Error capturado:", error.message);
    
    return res.status(404).json({
      ok: false,
      message: error.message || "Error interno del servidor"
    });
  }
  }


  async getItemById(req: Request, res: Response) {
    try {
    const id = Number(req.params.id || req.query.id); 

    const query = new GetPokemonByIdQuery();
    const result = await query.execute(id);
    res.json(result);
    }catch (error: any) {
    
    return res.status(404).json({
      ok: false,
      message: error.message || "Error interno del servidor"
    });
  }
  }

  async create(req: Request, res: Response) {
    try{
      const command = new CreatePokemon();
      const result = await command.execute(req.body);
      res.json(result);
    }catch (error: any) {
    
    return res.status(404).json({
      ok: false,
      message: error.message || "Error interno del servidor"
    });
  }
  }

async update(req: Request, res: Response) {
  try {
    const command = new UpdatePokemon();
    
    // Enviamos el body tal cual llega (debe incluir el ID adentro)
    const result = await command.execute(req.body); 
    
    return res.json(result);
  } catch (error: any) {
    return res.status(400).json({
      ok: false,
      message: error.message
    });
  }
}

async delete(req: Request, res: Response) {
  try {
    // Intentamos obtenerlo de params (si es /item/1) o de query (si es /item?id=1)
    const idRaw = req.params.id || req.query.id;
    const id = Number(idRaw);

    // Validación extra antes de llamar al comando
    if (isNaN(id)) {
      return res.status(400).json({
        ok: false,
        message: "The provided ID is not a valid number"
      });
    }

    const command = new DeletePokemon();
    const result = await command.execute(id);
    return res.json(result);

  } catch (error: any) {
    return res.status(400).json({
      ok: false,
      message: error.message
    });
  }
  
  }
}
