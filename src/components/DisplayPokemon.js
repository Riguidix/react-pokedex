import { colors } from '../helpers/PokemonTypes';

import ImagePokemon from "./ImagePokemon";
import PokeballColor from "./PokeballColor";
import SlideNav from "./SlideNav";
import Badge from "./Badge";

function DisplayPokemon(props) {
    return (
        <div 
            className="
                flex flex-col items-center justify-center h-2/4 w-full pt-2
                sm:rounded-t-lg
                md:rounded-t-none md:h-full md:w-2/4 md:rounded-tl-lg md:rounded-l-lg
            "
            style={ { backgroundColor: colors[props.types[0].type.name] } }
        >
            <PokeballColor 
                layout="
                    opacity-10 z-0 h-2/3 w-full p-10                    
                    md:h-3/4 md:w-3/5
                    lg:h-3/4 lg:w-1/2
                    xl:w-1/3
                " 
            />

            <ImagePokemon 
                name={ props.name }
                image={ props.image }
            />

            <SlideNav id={ props.id } />
            <Badge types={ props.types } />
        </div>
    );
}

export default DisplayPokemon;