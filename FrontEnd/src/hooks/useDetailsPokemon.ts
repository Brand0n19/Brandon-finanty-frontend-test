import { useState } from "react";
import PokemonServices from "../services/pokemon/PokemonServices";
import type { IPokemonDetail } from "../types/pokemon.interface";

export const useDetailsPokemon = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [detailPokemon, setDetailPokemon] = useState<IPokemonDetail>();

    const detailsPokemon = async (id : string) => {
        setLoading(true);
        try {
            const response = await PokemonServices.getDetalle(id);
            if(response.status === 200){
                setDetailPokemon(response.data);
                setMessage("Pokemon details retrieved successfully");
            }
        } catch (error) {
            console.error("Error retrieving pokemon details:", error);
            setMessage("Pokemon details retrieval failed");
        } finally {
            setLoading(false);
            setMessage("");
        }  
    };


    return {
        loading,
        detailsPokemon,
        message,
        detailPokemon,
        setMessage
    };
}