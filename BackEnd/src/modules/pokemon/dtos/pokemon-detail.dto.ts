export interface PokemonDetailDto {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  types: string[];
  createdAt: Date;
}
