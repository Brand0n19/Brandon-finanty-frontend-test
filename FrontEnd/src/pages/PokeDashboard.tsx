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

export const PokeExplorer = () => {
    const { getList, pokeList, listLoading, pokeMetaData } = useListPokemons();
    const [explorerRequest, setExplorerRequest] = useState<IListRequest>({ take: 10, page: 1,search: "" });
    const [createOpen, setCreateOpen] = useState<boolean>(false);
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
    const [id, setId] = useState<string>("");
    const navigate = useNavigate();

    const refreshCounter = usePokemonStore((state) => state.refreshCounter);

    useEffect(() => {
        getList(explorerRequest);
    }, [refreshCounter, explorerRequest]);



    return (
        <div style={{width: "100%"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>
                    <Typography variant="h2">Explorer</Typography>
                    <Typography variant="subtitle2">{pokeMetaData?.total} Pokemons</Typography>
                </div>
                <div>
                    <ComboBox
                        label="items"
                        size="small"
                        width={200}
                        options={PokemonCombo}
                        onValueChange={(take) => {
                                const newTake = parseInt(take);
                                if (newTake !== explorerRequest.take) {
                                    setExplorerRequest(prev => ({ ...prev, take: newTake }));
                                }
                            }}    
                    />
                    <PaginationTable
                        page={pokeMetaData?.page ?? 1} 
                        totalPages={pokeMetaData?.pages ?? 1}
                        onChange={(pag) => {
                                // SOLO actualiza si la página es diferente
                                if (pag !== explorerRequest.page) {
                                    setExplorerRequest(prev => ({ ...prev, page: pag }));
                                }
                            }}                
                />
                </div>
                <TextField id="outlined-basic" label="Search by name" variant="outlined" onChange={(e) => setExplorerRequest(prev => ({ ...prev, search: e.target.value }))} />
            </div>
            <div style={{ width: "100%", height: "100%" }}>
                {
                    listLoading ?
                        (
                            <CardSkeleton />
                        ) :
                        (
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem 0.3rem" }}>
                                <div style={{margin:"auto", borderRadius:"2rem", padding:"2rem", cursor:"pointer", backgroundColor:"rgba(0,0,0,0.3)"}} onClick={() =>setCreateOpen(true)}>
                                    <AddIcon
                                    />
                                </div>
                                {
                                    pokeList?.map((poke) => (
                                        <Cards 
                                            key={poke.id} 
                                            name={poke.name} 
                                            image={poke.image} 
                                            code={poke.id.toString()} 
                                            onClick={() => navigate("details", { state: { id: poke.id } })}
                                            onDelete={()=> {setId(poke.id.toString()); setDeleteOpen(true);}}
                                        />
                                    ))
                                }
                            </div>
                        )
                }
            </div> 
            <CreatePokemon
                open={createOpen}
                onClose={() => setCreateOpen(false)}
            />
            <DeletePokemon
                open={deleteOpen}
                onClose={() => setDeleteOpen(false)}
                id={id}
            />
        </div>
    );
}