import { Route, Routes } from "react-router";
import { Navigation } from "../pages/Navigation/Navigation";
import { PokeExplorer } from "../pages/PokeDashboard";
import { DetailPokemon } from "../pages/MyPokemons/Detail/DetailPokemon";


export const ContentRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/pokemons/" element={<Navigation />}>
                    <Route path="" element={<PokeExplorer />} />
                    <Route path="details" element={<DetailPokemon />} />
                </Route>
            </Routes>
        </>
    );
}
