import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    addToFavorite(state, action) {
      return (state = [...state, action.payload]);
    },
    removeFromFavorite(state, action) {
      return (state = state.filter((user) => user !== action.payload));
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { toggleFavorite } = favoriteSlice.actions;

const favoritePersistConfig = {
  key: "favorite",
  storage,
};
export const persistedFavoriteReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);
