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

    // const handleEnter = async (event) => {
    //     if (event.key === 'Enter') {
    //         if (searchValue !== '' && searchValue.length !== 0) {
    //             console.log('Search Pokémon:', searchValue);
    //             let response = await getPokemon(searchValue);

    //             if (response === undefined) {
    //                 setError('The Pokémon was not Found');
    //             } else {
    //                 dispatch(setPokemon(response));
    //                 navigate('/entry');
    //             }
    //         } else {
    //             setError('Type the Pokémon to search');
    //         }
    //     }
    // }

    return (
        <div
            className="
                absolute flex items-center justify-between h-10 w-full
                md:bottom-2 md:w-1/2
            "
        >
            <ChevronLeftIcon 
                onClick={ () => handleSlide(props.id, 'decrement') }
                className="bg-white p-3 h-10 ml-2 rounded-full w-10"
            />

            <ChevronRightIcon
                onClick={ () => handleSlide(props.id, 'increment') }
                className="bg-white p-3 h-10 mr-2 rounded-full w-10"
            />
        </div>
    );
}

export default SlideNav;