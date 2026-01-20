import { Route, Routes } from "react-router";
import { Navigation } from "../pages/Navigation/Navigation";
import { PokeExplorer } from "../pages/PokeExplorer/PokeExplorer";

export const ContentRouter = () => {
    return(
        <>
        <Routes>
            <Route path="/pokemons/" element={<Navigation/>}>
                 <Route path="" element={<PokeExplorer />} />
            </Route>
        </Routes>
        </>
    );
}
