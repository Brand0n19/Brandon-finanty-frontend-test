import { useCallback, useState } from "react";
import PokemonServices from "../services/pokemon/PokemonServices";
import type { IPokemon } from "../types/pokemon.interface";
import type { IBaseMeta, IBaseResponse } from "../types/base.interface";
import type { IListRequest } from "../types/data.interface";

export const useListPokemons = () => {
    const [pokeList, setPokeList] = useState<IPokemon[] | null>(null);
    const [listLoading, setListLoading] = useState<boolean>(false);
    const [pokeMetaData, setPokeMetaData] = useState<IBaseMeta | null>(null);

    const getList = useCallback(async (request: IListRequest) => {
            setListLoading(true);
            try {
                const response = await PokemonServices.getAll(request);

                const res: IBaseResponse<IPokemon> = response.data;

                setPokeList(res.data);
                setPokeMetaData(res.meta);
            } finally {
                setListLoading(false);
            }
        }, []);

    
    return {
        pokeList,
        listLoading,
        getList,
        pokeMetaData,
    }
}