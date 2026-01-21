import { prisma } from "../../../config/database";
import { PokeApiService } from "../../../services/pokeapi.service";
import { BaseResponse } from "../../../utils/response";
import { ICreatePokemon } from "../request/create-pokemon.request";

export class CreatePokemon {
    private pokeApi = new PokeApiService();
async execute(body: ICreatePokemon) {
    try {
        if (!body) throw new Error("El 'body' llegó undefined al execute");
        const { name } = body;
        
        const existing = await prisma.pokemon.findFirst({ where: { name } });
        if (existing) {
            if (existing.deleted) {
                await prisma.pokemon.update({
                    where: { name },
                    data: { deleted: null },
                })

                 return new BaseResponse("Pokemon created successfully", true);
            } else {
                throw new Error("Pokemon already exists.");
            }
        }

        const pokeData = await this.pokeApi.getPokemonByName(name);
        
        if (!pokeData) {
            throw new Error("PokeApi no devolvió nada.");
        }
        
        console.log("Verificando pokeData antes de crear:", pokeData);

        // Usamos los datos directamente como los vimos en tu log
        await prisma.pokemon.create({
            data: {
                name: pokeData.name, // El log dice que existe
                image: pokeData.image,
                height: pokeData.height,
                weight: pokeData.weight,
                types: pokeData.types, // Al ser String[] en el schema y ['electric'] en el log, es directo
            },
        });

        return new BaseResponse("Pokemon created successfully", true);

    } catch (error: any) {

        console.error("ERROR EN EXECUTE:", error); 
        throw new Error(error.message);
    }
    }
}