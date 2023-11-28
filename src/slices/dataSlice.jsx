import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

export const fetchPokemonsWithDetails = createAsyncThunk(
    "data/fetchPokemonsWithDetails",
    async (_, { dispatch}) => {
      const pokemonRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(
        pokemonRes.map((pokemon => getPokemonDetails(pokemon)))
      );
      dispatch(setPokemons(pokemonsDetailed));
      dispatch(setLoading(false))
    }
)

export const dataSlice = createSlice({
    name: "data",
    initialState: {
      pokemons: [],
      filteredPokemons: [],
    },
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
            state.filteredPokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.filteredPokemons.findIndex(
                (pokemon) => {
                    return pokemon.id === action.payload.pokemonId;
                });
            if (currentPokemonIndex >= 0) {
                const isFavorite = state.filteredPokemons[currentPokemonIndex].favorite;
                state.filteredPokemons[currentPokemonIndex].favorite =!isFavorite;                
            }
        },
        setFilter: (state, action) => {
            const filteredPokemons = state.pokemons.filter(pokemon => pokemon.name.includes(action.payload));
            state.filteredPokemons = filteredPokemons;
        },
    },
  });

  export const { setPokemons, setFavorite, setFilter } = dataSlice.actions;

  export default dataSlice.reducer;