import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import { setPokemon } from '../features/pokemon/pokemonSlice';
import { getPokemon } from "../services/Pokemon";

function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearchValue = (event) => {
        setSearchValue(event.target.value.toLowerCase());
    }

    const handleEnter = async (event) => {
        if (event.key === 'Enter') {
            if (searchValue !== '' && searchValue.length !== 0) {
                console.log('Search Pokémon:', searchValue);
                let response = await getPokemon(searchValue);

                if (response === undefined) {
                    setError('The Pokémon was not Found');
                } else {
                    dispatch(setPokemon(response));
                    navigate('/entry');
                }
            } else {
                setError('Type the Pokémon to search');
            }
        }
    }

    return (
        <div 
            className="
                bg-white relative flex items-center justify-around mt-3 rounded-lg w-2/3 p-1 
                md:w-1/2 lg:w-1/3
            "
        >
            <input
                type="text"
                placeholder="Search"
                className={
                    isFocused 
                        ? 'py-1 px-2 outline-none w-full'
                        : 'py-1 px-5 outline-none w-5/6'
                }
                onChange={ handleSearchValue }
                onKeyDown={ handleEnter }
                onFocus={ () => setIsFocused(true) }
                onBlur={ () => setIsFocused(false) }
            />

            <div className={
                isFocused 
                    ? 'hidden' 
                    : 'text-center w-1/8'
                }
            >
                <MagnifyingGlassIcon className="h-8" />
            </div>

            <div className={ 
                error.length !== 0 || error !== '' 
                    ? 'absolute top-20 w-full' 
                    : 'hidden'
                }
            >
                <h1 className="text-yellow-400 text-sm md:text-lg text-center">
                    { error }
                </h1>
            </div>
        </div>
    );
}

export default SearchBar;