import { prisma } from "../../../config/database";
import { PokeApiService } from "../../../services/pokeapi.service";
import { BaseResponse } from "../../../utils/response";
import { IUpdatePokemon } from "../request/update-pokemon.request";


export class UpdatePokemon {
  async execute(body: IUpdatePokemon) {
    try {
      // Extraemos el ID del body
      const { id, name, height, weight, types } = body;

      // VALIDACIÓN CRÍTICA: Si no viene el ID en el JSON, lanzamos error
      if (!id) {
        throw new Error("Property 'id' is required in the request body.");
      }

      const existing = await prisma.pokemon.findFirst({
        where: { id: Number(id) }
      });

      console.log("ID buscado:", id);
        console.log("¿Se encontró algo?:", existing);

      if (!existing) throw new Error("Pokemon not found.");

      const dataToUpdate: any = {};
      if (name !== undefined)   dataToUpdate.name = name;
      if (height !== undefined) dataToUpdate.height = Number(height);
      if (weight !== undefined) dataToUpdate.weight = Number(weight);
      if (types !== undefined)  dataToUpdate.types = types;
      
      dataToUpdate.modified = new Date();

      await prisma.pokemon.update({
        where: { id: Number(id) },
        data: dataToUpdate,
      });

      return new BaseResponse("Pokemon updated successfully", true);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}