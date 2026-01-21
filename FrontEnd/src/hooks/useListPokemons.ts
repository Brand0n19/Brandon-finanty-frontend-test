import { useCallback, useEffect, useRef, useState } from "react";
import PokemonServices from "../services/pokemon/PokemonServices";
import type { IPokemon } from "../types/pokemon.interface";
import type { IBaseMeta, IBaseResponse } from "../types/base.interface";
import type { IListRequest } from "../types/data.interface";

export const useListPokemons = () => {
    const [pokeList, setPokeList] = useState<IPokemon[] | null>(null);
    const [listLoading, setListLoading] = useState<boolean>(false);
    const [pokeMetaData, setPokeMetaData] = useState<IBaseMeta | null>(null);
    const [error, setError] = useState<string | null>(null);

    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        return () => {
            abortControllerRef.current?.abort();
        };
    }, []);
    
    const getList = useCallback(async (request: IListRequest) => {
        setListLoading(true);

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        const controller = new AbortController();
        abortControllerRef.current = controller;

            try {
                setError(null);
                const response = await PokemonServices.getAll(request, controller.signal);

                const res: IBaseResponse<IPokemon> = response.data;

                setPokeList(res.data);
                setPokeMetaData(res.meta);
            } catch (err: any) {
                if (err.name !== 'CanceledError') {
                    setError(err.response?.data?.message || "Ocurrió un error al cargar los pokemons.");
                }
            } finally {
                if (abortControllerRef.current === controller) {
                    setListLoading(false);
                }
            }
        }, []);


    return {
        pokeList,
        listLoading,
        getList,
        pokeMetaData,
        error
    }
}