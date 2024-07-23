import { createSlice } from '@reduxjs/toolkit';
import { PokemonDetailsI } from '../../types';

export const initialState: PokemonDetailsI = {
  abilities: [],
  base_experience: 0,
  cries: undefined,
  forms: [],
  game_indices: [],
  height: 0,
  held_items: [],
  id: 0,
  is_default: false,
  location_area_encounters: '',
  moves: [],
  name: '',
  order: 0,
  past_abilities: [],
  past_types: [],
  species: undefined,
  sprites: undefined,
  stats: [],
  types: [],
  weight: 0,
};

const detailsSlice = createSlice({
  name: 'details',
  reducers: {
    setData: (state, action) => {
      state = action.payload;
      return state;
    },
  },
  initialState,
});

export const { setData } = detailsSlice.actions;
export default detailsSlice.reducer;
