import { PokeApiService } from "../../../services/pokeapi.service";
import { BaseTableResponse } from "../../../utils/response";
import { PokeApiPokemonListItem } from "../dtos/pokemon-list-explorer";

export class GetPokemonExplorer {
  private pokeApi = new PokeApiService();

  async explore(page: number, take: number) {
    const offset = (page - 1) * take;

    const data = await this.pokeApi.getListPokemon(take, offset);

    let pokemons = data.results.map((item: PokeApiPokemonListItem) => {
      const id = Number(item.url.split('/').at(-2));

      return {
        id,
        name: item.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      };
    });


    return new BaseTableResponse(
        pokemons,
        data.count,
        page,
        take
    )
  }
}