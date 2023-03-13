import { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import axios from 'axios';

function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [pokeImg, setPokeImg] = useState('');

    const handleSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            if (searchValue !== '' && searchValue.length !== 0) {
                console.log('Search Pokémon:', searchValue);

                axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue}/`)
                    .then((response) => {
                        setPokeImg(response.data.sprites.other["official-artwork"].front_default);
                    })
                    .catch((err) => console.error(err));
            } else {
                console.log('Type the Pokémon to search');
            }
        }
    }

    return (
        <div className="bg-white relative flex items-center justify-around mt-3 rounded-lg w-2/3 p-1 md:w-1/2 lg:w-1/3">
            <input
                type="text"
                className={ isFocused ? 'py-1 px-2 outline-none w-full' : 'py-1 px-5 outline-none w-5/6' }
                placeholder="Search"
                onChange={ handleSearchValue }
                onKeyDown={ handleEnter }
                onFocus={ () => setIsFocused(true) }
                onBlur={ () => setIsFocused(false) }
            />

            <div className={ isFocused ? 'hidden' : 'text-center w-1/8'}>
                <MagnifyingGlassIcon className="h-8" />
            </div>

            <div className="absolute top-20 h-56 w-56">

                <img
                    className="h-full w-full"
                    src={ pokeImg }
                    alt={ 'Picture of ' + searchValue }
                />
            </div>
        </div>
    );
}

export default SearchBar;