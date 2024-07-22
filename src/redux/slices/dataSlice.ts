import { createSlice } from '@reduxjs/toolkit';

const PokemonSlice = createSlice({
  name: 'data',
  reducers: {
    setData: (state, action) => {
      state = action.payload;
      return state;
    },
  },
  initialState: {},
});

export const { setData } = PokemonSlice.actions;
export default PokemonSlice.reducer;
