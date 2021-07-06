import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

type FavouritesState = {
  favouritesUrls: string[];
};

const initialState: FavouritesState = {
  favouritesUrls: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<string>) => {
      if (!state.favouritesUrls.includes(action.payload)) {
        state.favouritesUrls.push(action.payload);
      }
    },
  },
});
export const { addFavourite } = favouritesSlice.actions;

export const favouritesSelector = (state: RootState) =>
  state.favourites.favouritesUrls;

export default favouritesSlice.reducer;
