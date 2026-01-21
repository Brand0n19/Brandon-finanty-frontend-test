import { useLocation } from "react-router";
import { useDetailsPokemon } from "../../../hooks/useDetailsPokemon";
import { useEffect, useState } from "react";
import { CardSkeleton } from "../../../components/Skeletons/Card.Skeleton";
import { Cards } from "../../../components/Cards";
import type { IPokemonDetail } from "../../../types/pokemon.interface";
import { UpdatePokemon } from "../Update/UpdatePokemon";
import { usePokemonStore } from "../../../store/usePokemonStore";



export const DetailPokemon = () => {
    const location = useLocation();
    const { id } = location.state || {};

    const { detailPokemon, loading, detailsPokemon } = useDetailsPokemon();
    const [pokedetails, setPokeDetails] = useState<IPokemonDetail>();
    const [updateOpen, setUpdateOpen] = useState<boolean>(false);

    // notifyPokemonUpdate
    const refreshCounter = usePokemonStore((state) => state.refreshPokemons);

    useEffect(() => {
        if (id) {
            detailsPokemon(id);
        }
    }, [refreshCounter, id]);

    return (
        <>
            {
                loading && detailPokemon ?
                    (
                        <CardSkeleton />
                    ) :
                    (
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem 0.3rem" }}>
                            <Cards
                                key={detailPokemon?.id}
                                name={detailPokemon?.name ?? ""}
                                image={detailPokemon?.image ?? ""}
                                code={detailPokemon?.id.toString()}
                                onEdit={() => {setPokeDetails(detailPokemon); setUpdateOpen(true);}}
                            />
                            <div>
                                <div style={{ margin: "auto", borderRadius: "2rem", padding: "2rem", backgroundColor: "rgba(0,0,0,0.3)" }}>
                                    <h2>Details</h2>
                                    <p><strong>Height:</strong> {detailPokemon?.height}</p>
                                    <p><strong>Weight:</strong> {detailPokemon?.weight}</p>
                                    {
                                        detailPokemon?.types && (
                                            <p><strong>Types:</strong> {detailPokemon?.types.join(", ")}</p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
            }

            <UpdatePokemon
                open={updateOpen}
                onClose={() => setUpdateOpen(false)}
                defaultValues={pokedetails}
            />
        </>
    );
}