import { prisma } from "../../../config/database";
import { PokeApiService } from "../../../services/pokeapi.service";
import { BaseResponse } from "../../../utils/response";
import { ICreatePokemon } from "../request/create-pokemon.request";

export class CreatePokemon {
    private pokeApi = new PokeApiService();
    async execute(body: ICreatePokemon){
        try{
            const { name, height, image, types, weight } = body;
            if(!name || !height || !image || !weight){
                throw new Error("You forget to send a parameter.")
            }

            const existing = await prisma.pokemon.findUnique({ where: { name } });
            if (existing) {
                throw new Error("Pokemon already exists.")
            }

            const pokeData = await this.pokeApi.getPokemonByName(name);
            if (!pokeData) {
                throw new Error("Pokemon not found it in PokeApi")  
            }

            const typesArray = pokeData.types.map((t:any) => t.type.name);

            const created = await prisma.pokemon.create({
                data: {
                    name: pokeData.name,
                    image: pokeData.image,
                    height: pokeData.height,
                    weight: pokeData.weight,
                    types: typesArray ?? [],
                },
            });

            return new BaseResponse(
                "Pokemon created succesfully",
                true,
            )

        }
        catch{
          throw new Error("We couldn't create your Pokémon.")
        }
    }
}