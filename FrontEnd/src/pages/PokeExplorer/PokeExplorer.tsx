import { useListPokemons } from "../../hooks/useListPokemons";
import { CardSkeleton } from "../../components/Skeletons/Card.Skeleton";
import { useEffect, useState } from "react";
import { Cards } from "../../components/Cards";
import { Typography } from "@mui/material";
import { ComboBox } from "../../components/ComboBox";
import { PokemonCombo } from "../../types/comboBox.initial";
import { PaginationTable } from "../../components/Pagintaion";
import type { IListRequest } from "../../types/data.interface";

export const PokeExplorer = () => {
    const { getList, pokeList, listLoading, pokeMetaData } = useListPokemons();
    const [explorerRequest, setExplorerRequest] = useState<IListRequest>({ take: 10, page: 1 });

    useEffect(() => {
        getList(explorerRequest)
    }, [explorerRequest, getList]);

    console.log(explorerRequest);


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
                        onValueChange={(take)=>setExplorerRequest({...explorerRequest, take: parseInt(take) ?? 10})}         
                    />
                    <PaginationTable
                        page={pokeMetaData?.page ?? 1} 
                        totalPages={pokeMetaData?.pages ?? 1}
                        onChange={(pag)=> setExplorerRequest({...explorerRequest, page: pag})}
                    />
                </div>
            </div>
            <div style={{ width: "100%", height: "100%" }}>
                {
                    listLoading ?
                        (
                            <CardSkeleton />
                        ) :
                        (
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem 0.3rem" }}>
                                {
                                    pokeList?.map((poke) => (
                                        <Cards key={poke.id} name={poke.name} image={poke.imageUrl} code={poke.id} />
                                    ))
                                }
                            </div>
                        )
                }
            </div>
        </div>
    );
}