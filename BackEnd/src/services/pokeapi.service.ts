import { pokeClient } from "../http.commons";
import { PokeApiPokemonListResponse } from "../modules/pokemon/dtos/pokemon-list-explorer";

export class PokeApiService {
  async getPokemonByName(name: string) {
    const response = await pokeClient.get(`/${name.toLowerCase()}`);
    const data = response.data;

    return {
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      height: data.height,
      weight: data.weight,
      types: data.types.map((t: any) => t.type.name),
    };
  }

  async getListPokemon(take: number, skip:number){
    const response = await pokeClient.get<PokeApiPokemonListResponse>("",
      {
        params: { limit: take, offset: skip }
      });

      const data = response.data;
      return data;
  }
}
