import { useState } from "react";
import PokemonServices from "../services/pokemon/PokemonServices";
import type { IPokemonDetail } from "../types/pokemon.interface";

export const useDetailsPokemon = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [detailPokemon, setDetailPokemon] = useState<IPokemonDetail>();
    const [error, setError] = useState<string | null>(null);

    const detailsPokemon = async (id: string) => {
        setLoading(true);
        try {
            setError(null);
            const response = await PokemonServices.getDetalle(id);
            if (response.data) {
                setDetailPokemon(response.data);
                setMessage("Pokemon details retrieved successfully");
            }
        } catch (error: any) {
            console.error("Error retrieving pokemon details:", error);
            setError(error.response?.data?.message || "Failed to load Pokemon details.");
            setMessage("Pokemon details retrieval failed");
        } finally {
            setLoading(false);
        }
    };


    return {
        loading,
        detailsPokemon,
        message,
        detailPokemon,
        setMessage,
        error
    };
}