import { useState } from "react";
import PokemonServices from "../services/pokemon/PokemonServices";
import { usePokemonStore } from "../store/usePokemonStore";

export const useDeletePokemon = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [request, setRequest] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const notifyTableUpdate = usePokemonStore((state) => state.notifyTableUpdate);

    const deletePokemon = async () => {
        setLoading(true);
        try {
            const response = await PokemonServices.deleteItem(request);
            if(response.status === 200){
                setMessage("Pokemon deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting pokemon:", error);
            setMessage("Pokemon deleted failed");
        } finally {
            setLoading(false);
            setMessage("");
            notifyTableUpdate();
        }  
    };
    return {
        loading,
        request,
        setRequest,
        deletePokemon,
        message,
        setMessage
    };
}