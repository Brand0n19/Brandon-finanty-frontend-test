import type { IListRequest } from "../../types/data.interface";
import axiosPokemon from "../httpCommons";

const getExplorer = (request: IListRequest) => {
    return axiosPokemon.get(`/explorer?take=${request.take}&page=${request.page}`);
}
const getDetalle = (id : string) => {
    return axiosPokemon.get(`${id}`);
}

// const postGuardar = (data: any) => {
//     return axiosPokemon.post("", data);
// }


const PokemonServices = {
    getExplorer,
    getDetalle,
    // postGuardar
};

export default PokemonServices;