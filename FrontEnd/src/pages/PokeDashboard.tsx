import { useListPokemons } from "../hooks/useListPokemons";
import { CardSkeleton } from "../components/Skeletons/Card.Skeleton";
import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import { TextField, Typography } from "@mui/material";
import { ComboBox } from "../components/ComboBox";
import { PokemonCombo } from "../types/comboBox.initial";
import { PaginationTable } from "../components/Pagintaion";
import type { IListRequest } from "../types/data.interface";
import AddIcon from '@mui/icons-material/Add';
import { CreatePokemon } from "./MyPokemons/Create/CreatePokemon";
import { DeletePokemon } from "./MyPokemons/Delete/DeletePokemon";
import { useNavigate } from "react-router";
import { usePokemonStore } from "../store/usePokemonStore";
import { Grid as Grid, Alert, Box } from "@mui/material";

export const PokeExplorer = () => {
    const { getList, pokeList, listLoading, pokeMetaData, error } = useListPokemons();
    const [explorerRequest, setExplorerRequest] = useState<IListRequest>({ take: 10, page: 1, search: "" });
    const [createOpen, setCreateOpen] = useState<boolean>(false);
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
    const [id, setId] = useState<string>("");
    const navigate = useNavigate();

    const refreshCounter = usePokemonStore((state) => state.refreshCounter);

    useEffect(() => {
        getList(explorerRequest);
    }, [refreshCounter, explorerRequest]);



    return (
        <Box sx={{ width: "100%", p: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4, alignItems: "center", flexWrap: "wrap", gap: 2 }}>
                <Box>
                    <Typography variant="h2">Explorer</Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                        Discover and manage your {pokeMetaData?.total ?? 0} Pokemons
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
                    <ComboBox
                        label="items"
                        size="small"
                        width={200}
                        options={PokemonCombo}
                        onValueChange={(take) => {
                            const newTake = parseInt(take);
                            if (newTake !== explorerRequest.take) {
                                setExplorerRequest(prev => ({ ...prev, take: newTake, page: 1 }));
                            }
                        }}
                    />
                    <PaginationTable
                        page={pokeMetaData?.page ?? 1}
                        totalPages={pokeMetaData?.pages ?? 1}
                        onChange={(pag) => {
                            if (pag !== explorerRequest.page) {
                                setExplorerRequest(prev => ({ ...prev, page: pag }));
                            }
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Search by name"
                        variant="outlined"
                        size="small"
                        onChange={(e) => setExplorerRequest(prev => ({ ...prev, search: e.target.value, page: 1 }))}
                    />
                </Box>
            </Box>

            {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                </Alert>
            )}

            <Box sx={{ width: "100%" }}>
                {
                    listLoading ?
                        (
                            <CardSkeleton />
                        ) :
                        (
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
                                    <Box
                                        sx={{
                                            height: '100%',
                                            minHeight: 400,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: "24px",
                                            p: 2,
                                            cursor: "pointer",
                                            backgroundColor: "rgba(0,0,0,0.05)",
                                            border: '2px dashed rgba(0,0,0,0.1)',
                                            '&:hover': { backgroundColor: "rgba(0,0,0,0.1)" }
                                        }}
                                        onClick={() => setCreateOpen(true)}
                                    >
                                        <Box sx={{ textAlign: 'center' }}>
                                            <AddIcon sx={{ fontSize: 60, color: 'text.secondary' }} />
                                            <Typography color="text.secondary">Add New Pokemon</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                {
                                    pokeList && pokeList.length > 0 ? (
                                        pokeList.map((poke) => (
                                            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }} key={poke.id}>
                                                <Cards
                                                    name={poke.name}
                                                    image={poke.image}
                                                    code={poke.id.toString()}
                                                    onClick={() => navigate("details", { state: { id: poke.id } })}
                                                    onDelete={() => { setId(poke.id.toString()); setDeleteOpen(true); }}
                                                />
                                            </Grid>
                                        ))
                                    ) : !listLoading && !error && (
                                        <Grid size={12}>
                                            <Box sx={{ textAlign: 'center', py: 10 }}>
                                                <Typography variant="h5" color="text.secondary">
                                                    No se encontraron pokemons con los criterios de búsqueda.
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        )
                }
            </Box>
            <CreatePokemon
                open={createOpen}
                onClose={() => setCreateOpen(false)}
            />
            <DeletePokemon
                open={deleteOpen}
                onClose={() => setDeleteOpen(false)}
                id={id}
            />
        </Box>
    );
}