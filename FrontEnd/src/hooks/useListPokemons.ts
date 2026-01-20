import { useCallback, useState } from "react";
import PokemonServices from "../services/pokemon/PokemonServices";
import type { IListPokemonExplorer } from "../types/pokemon.interface";
import type { IListRequest } from "../types/data.interface";
import type { IBaseMeta, IBaseResponse } from "../types/base.interface";

export const useListPokemons = () => {
    const [pokeList, setPokeList] = useState<IListPokemonExplorer[] | null>(null);
    const [listLoading, setListLoading] = useState<boolean>(false);
    const [pokeMetaData, setPokeMetaData] = useState<IBaseMeta | null>(null);


    const getList = useCallback(async (params: IListRequest) => {
            setListLoading(true);
            try {
                const response = await PokemonServices.getExplorer(params);

                const res: IBaseResponse<IListPokemonExplorer> = response.data;

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
        pokeMetaData
    }
}