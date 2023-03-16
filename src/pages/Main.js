import { useSelector } from 'react-redux';

import Title from '../components/Title';
import BackBtn from '../components/BackBtn';

import DisplayPokemon from '../components/DisplayPokemon';
import DataPokemon from '../components/DataPokemon';

function Main() {
    const pokemon = useSelector((state) => state.pokemon[0]);

    return (
        <div className="flex items-center justify-center h-full w-full">
            <div
                className="
                bg-white relative h-full w-full 
                    sm:h-5/6 sm:w-4/6 sm:rounded-xl
                    md:h-5/6 md:w-4/5 md:rounded-xl
                    md:flex md:items-center
                "
            >
                <div
                    className="
                        top-2 flex items-center absolute h-12 justify-between w-full z-50
                        sm:rounded-t-lg sm:absolute
                    "
                >
                    <Title label={ pokemon.name } number={ pokemon.id} />
                    <BackBtn />
                </div>
                
                <DisplayPokemon
                    name={ pokemon.name }
                    id={ pokemon.id }
                    types={ pokemon.types }
                    image={ pokemon.sprites.other['official-artwork'].front_default }
                />

                <DataPokemon
                    height={ pokemon.height }
                    weight={ pokemon.weight }
                    type={ pokemon.types[0].type.name }
                    stats={ pokemon.stats }
                />
            </div>
        </div>
    );
}

export default Main;