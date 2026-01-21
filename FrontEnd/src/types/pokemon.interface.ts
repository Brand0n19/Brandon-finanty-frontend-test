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

export interface IPokemonRequest{
    id: number;
    name: string;
    height: number;
    weight: number;
}

export interface IPokemonDetail {
    id: number;
    name: string;
    image: string;
    height: number;
    weight: number;
    types: string[]; 
    createdAt: string | Date; 
}