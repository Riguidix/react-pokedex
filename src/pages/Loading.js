import PokeTitle from '../images/pokemon_title.png';

function Search() {
    return (
        <div className="Search relative flex items-center justify-center h-screen w-screen">
            <img
                src={ PokeTitle }
                className="w-3/4 md:w-2/3 lg:w-2/4"
                alt="Pokemon Title"
            />
        </div>
    );
}

export default Search;