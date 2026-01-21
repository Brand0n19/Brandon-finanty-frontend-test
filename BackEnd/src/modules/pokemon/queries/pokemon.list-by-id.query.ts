import { prisma } from '../../../config/database';
import { PokeApiService } from '../../../services/pokeapi.service';
import { PokemonMapper } from '../pokemon.mapper';

export class GetPokemonByIdQuery {

  async execute(id: number) {
    try{
      const pokemon = await prisma.pokemon.findFirst({
        where: { id : id, deleted: null }
      });
  
      return PokemonMapper.toDetailDto(pokemon);
    }catch{
      throw new Error("We couldn't find that Pokémon.")
    }
  }
}
