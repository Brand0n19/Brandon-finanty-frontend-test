export interface IPokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  height?: number;
  weight?: number;
  stats?: {
    marketCap: string;
    volume: string;
    growth: string;
  };
}


export interface IListPokemonExplorer {
  id: string;
  name: string;
  imageUrl: string;
}