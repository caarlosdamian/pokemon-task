import { createSlice } from '@reduxjs/toolkit';
import { ListResponseI, PokemonUrl } from '../../types';

const initialState: ListResponseI<PokemonUrl> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const PokemonSlice = createSlice({
  name: 'data',
  reducers: {
    setData: (state, action) => {
      state = action.payload;
      return state;
    },
  },
  initialState,
});

export const { setData } = PokemonSlice.actions;
export default PokemonSlice.reducer;
