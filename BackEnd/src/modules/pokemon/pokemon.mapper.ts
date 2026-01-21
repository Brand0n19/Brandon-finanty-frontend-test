import type { PokemonListDto } from "./dtos/pokemon-list.dto";
import type { PokemonDetailDto } from "./dtos/pokemon-detail.dto";

export class PokemonMapper {
  static toListDto(entity: any): PokemonListDto {
    return {
      id: entity.id,
      name: entity.name,
      image: entity.image,
      types: entity.types
    };
  }

  static toDetailDto(entity: any): PokemonDetailDto {
    return {
      id: entity.id,
      name: entity.name,
      image: entity.image,
      height: entity.height,
      weight: entity.weight,
      types: entity.types,
      createdAt: entity.createdAt
    };
  }
}
