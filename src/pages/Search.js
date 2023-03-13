import Pokeball from "../components/Pokeball";
import PokeballColor from "../components/PokeballColor";
import SearchBar from "../components/SearchBar";

function Search() {
    return (
        <div className="flex flex-col items-center justify-around h-screen w-screen">
            <div className="flex items-center h-10 py-7 text-white w-full">
                <PokeballColor type='white' layout="relative h-14 w-14" />
                <h1>Pokedex</h1>
            </div>
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