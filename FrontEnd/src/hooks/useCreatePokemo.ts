import { useState } from "react";
import type { ICreated } from "../types/services.interface";
import PokemonServices from "../services/pokemon/PokemonServices";
import { usePokemonStore } from "../store/usePokemonStore";

export const useCreatePokemon = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [request, setRequest] = useState<ICreated>({ name: "" });
    const [message, setMessage] = useState<string>("");

    const notifyTableUpdate = usePokemonStore((state) => state.notifyTableUpdate);

    const createPokemon = async () => {
        setLoading(true);
        try {
            const response = await PokemonServices.createItem(request);
            if(response.status === 200){
                setMessage("Pokemon created successfully");
            }
        } catch (error) {
            console.error("Error creating pokemon:", error);
            setMessage("Pokemon creation failed");
        } finally {
            setLoading(false);
            notifyTableUpdate();
        }  
    };
    return {
        loading,
        request,
        setRequest,
        createPokemon,
        message,
        setMessage
    };
}