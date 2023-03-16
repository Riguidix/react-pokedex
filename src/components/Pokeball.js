import PokeballImage from '../images/pokeball.png';

function Pokeball() {
    return (
        <div className="Pokeball absolute flex items-center justify-center">
            <img
                alt="Pokeball Vector"
                src={ PokeballImage }
                className="opacity-10 w-3/4 md:w-2/4 lg:w-2/5"
            />
        </div>
    );
}

export default Pokeball;