import type { IListRequest } from "../../types/data.interface";
import type { ICreated, IUpdated } from "../../types/services.interface";
import axiosPokemon from "../httpCommons";

const getDetalle = (id : string) => {
    return axiosPokemon.get(`/${id}`);
}

export const getAll = (request: IListRequest, signal?: AbortSignal) => {
    return axiosPokemon.get(
        `/items?limit=${request.take}&page=${request.page}&search=${request.search}`, 
        { signal } 
    );
};

export const createItem = (data: ICreated) => {
    return axiosPokemon.post('/item', data);
};

export const updateItem = (data: IUpdated) => {
    return axiosPokemon.put('/item', data);
};

export const deleteItem = (id: string | number) => {
    return axiosPokemon.delete(`/${id}`);
};


const PokemonServices = {
    getDetalle,
    getAll,
    createItem,
    updateItem,
    deleteItem
};

export default PokemonServices;