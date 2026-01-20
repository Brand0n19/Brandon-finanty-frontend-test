import axios from "axios";


const pokeApiUrl: string = "https://pokeapi.co/api/v2/pokemon"

export const pokeClient = axios.create({
  baseURL: pokeApiUrl,
});