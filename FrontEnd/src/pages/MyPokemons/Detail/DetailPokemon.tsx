import { useLocation } from "react-router";
import { useDetailsPokemon } from "../../../hooks/useDetailsPokemon";
import { useEffect, useState } from "react";
import { CardSkeleton } from "../../../components/Skeletons/Card.Skeleton";
import { Cards } from "../../../components/Cards";
import type { IPokemonDetail } from "../../../types/pokemon.interface";
import { UpdatePokemon } from "../Update/UpdatePokemon";
import { useNavigate } from "react-router";
import { usePokemonStore } from "../../../store/usePokemonStore";
import { Button, Box, Typography, Alert } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export const DetailPokemon = () => {
    const location = useLocation();
    const { id } = location.state || {};

    const { detailPokemon, loading, detailsPokemon, error } = useDetailsPokemon();
    const [pokedetails, setPokeDetails] = useState<IPokemonDetail>();
    const [updateOpen, setUpdateOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    // notifyPokemonUpdate
    const refreshCounter = usePokemonStore((state) => state.refreshPokemons);

    useEffect(() => {
        if (id) {
            detailsPokemon(id);
        }
    }, [refreshCounter, id]);

    return (
        <Box sx={{ p: 3 }}>
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate('/pokemons')}
                sx={{ mb: 3 }}
            >
                Volver al listado
            </Button>

            {
                !id ? (
                    <Alert severity="warning">No se proporcionó un ID de pokemon válido.</Alert>
                ) :
                    loading && !detailPokemon ?
                        (
                            <CardSkeleton />
                        ) :
                        detailPokemon ?
                            (
                                <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                                    <Box sx={{ flex: 1, maxWidth: { md: 400 } }}>
                                        <Cards
                                            key={detailPokemon?.id}
                                            name={detailPokemon?.name ?? ""}
                                            image={detailPokemon?.image ?? ""}
                                            code={detailPokemon?.id.toString()}
                                            onEdit={() => { setPokeDetails(detailPokemon); setUpdateOpen(true); }}
                                        />
                                    </Box>
                                    <Box sx={{ flex: 2 }}>
                                        <Box sx={{ borderRadius: "24px", p: 4, backgroundColor: "rgba(0,0,0,0.03)", height: '100%' }}>
                                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Details</Typography>
                                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 2, mt: 3 }}>
                                                <Box>
                                                    <Typography variant="subtitle2" color="text.secondary">Height</Typography>
                                                    <Typography variant="h6">{detailPokemon?.height}</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant="subtitle2" color="text.secondary">Weight</Typography>
                                                    <Typography variant="h6">{detailPokemon?.weight}</Typography>
                                                </Box>
                                                {
                                                    detailPokemon?.types && (
                                                        <Box sx={{ gridColumn: '1 / -1' }}>
                                                            <Typography variant="subtitle2" color="text.secondary">Types</Typography>
                                                            <Typography variant="h6">{detailPokemon?.types.join(", ")}</Typography>
                                                        </Box>
                                                    )
                                                }
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ) : error ? (
                                <Alert severity="error">{error}</Alert>
                            ) : !loading && (
                                <Alert severity="error">No se encontró información del pokemon.</Alert>
                            )
            }

            <UpdatePokemon
                open={updateOpen}
                onClose={() => setUpdateOpen(false)}
                defaultValues={pokedetails}
            />
        </Box>
    );
}