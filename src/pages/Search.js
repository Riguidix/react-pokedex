import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetState } from "../features/pokemon/pokemonSlice";

import Pokeball from "../components/Pokeball";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";

function Search() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
    }, []);

    return (
        <div className="flex flex-col items-center justify-around h-screen w-screen">
            <Title label="Pokedex" />
            
            <div className="Search relative flex flex-col items-center h-full justify-center w-screen" >
                <Pokeball />

                <h1 className="text-white w-2/3 md:w-1/2 lg:w-1/3 text-lg">
                    Find your <br />
                    <span className="text-4xl">Pokémon</span>
                </h1>

                <SearchBar />
            </div>
        </div>
    );
}

export default Search;