import axios from 'axios';

const pokemon_api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

/**
 * Let us to get a Pokemon from Name or Number
 */
export const getPokemon = async (pokemon) => {
  let response = await pokemon_api.get(`/pokemon/${pokemon}/`)
      .then((response) => {
          return response.data;
      })
      .catch(function(error) {
          if(error.response) {
            console.log("Request was made and server responded with a non 200 status");
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            
          }
          else if (error.request) {
            console.log("Request was made, but no response was received");
            console.log(error.request);
          }
          else {
            console.log("Something happened setting up the request");
            console.log(error.message);      
          }
      });

  return response;
};