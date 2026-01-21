import { useState } from "react";
import PokemonServices from "../services/pokemon/PokemonServices";
import type { IUpdated } from "../types/services.interface";
import { usePokemonStore } from "../store/usePokemonStore";

export const useUpdatePokemon = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [request, setRequest] = useState<IUpdated>({ id: "", name: "", weight: 0, height: 0, });
    const [message, setMessage] = useState<string>("");

    const notifyTableUpdate = usePokemonStore((state) => state.notifyPokemonUpdate);

    const updatePokemon = async () => {
        setLoading(true);
        try {
            const response = await PokemonServices.updateItem(request);
            if(response.status === 200){
                setMessage("Pokemon updated successfully");
            }
        } catch (error) {
            console.error("Error updating pokemon:", error);
        } finally {
            setLoading(false);
            notifyTableUpdate();    
        }  
    };
    return {
        loading,
        request,
        setRequest,
        updatePokemon,
        message,
        setMessage
    };
}