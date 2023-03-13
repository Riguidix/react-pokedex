import PokeballImage from '../images/pokeball.png';

function Pokeball() {
    const style = "opacity-10 w-3/4 md:w-2/4 lg:w-2/5";

    return (
        <div className="Pokeball absolute flex items-center justify-center">
            <img
                src={ PokeballImage }
                className={ style }
            />
        </div>
    );
}

export default Pokeball;