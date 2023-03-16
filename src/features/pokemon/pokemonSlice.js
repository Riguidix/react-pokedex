import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemon: (state, action) => { // Sets the store as 1 pokemon get from the API
            state.push(action.payload);
        },
        resetState: (state) => {
            state.pop();
        },
    },
});

export const { setPokemon, resetState } = pokemonSlice.actions;
export default pokemonSlice.reducer