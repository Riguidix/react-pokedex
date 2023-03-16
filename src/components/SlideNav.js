import { useDispatch } from 'react-redux';

import { resetState, setPokemon } from '../features/pokemon/pokemonSlice';
import { getPokemon } from "../services/Pokemon";

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

function SlideNav(props) {
    const dispatch = useDispatch();

    const handleSlide = async (id, action) => {
        let response = await getPokemon(action === 'increment' ? id + 1 : id - 1);

        if (response === undefined) {
            console.error('There was an Error while retrieving the Pokemon');
        } else {
            dispatch(resetState());
            dispatch(setPokemon(response));
        }
    }

    return (
        <div
            className="
                absolute flex items-center justify-between h-10 w-full
                md:bottom-2 md:w-1/2
            "
        >
            <a 
                href="#"
                onClick={ () => handleSlide(props.id, 'decrement') }
                className="nes-btn bg-white ml-2 flex items-center justify-center h-10 w-10"
            >
                <ChevronLeftIcon className="h-full w-full"/>
            </a>

            <a
                href="#"
                onClick={ () => handleSlide(props.id, 'increment') }
                className="nes-btn bg-white mr-2 flex items-center justify-center h-10 w-10"
            >
                <ChevronRightIcon className="h-full w-full" />
            </a>    
        </div>
    );
}

export default SlideNav;