import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchCarsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCarsSuccess: (state, action) => {
      state.loading = false;
      state.cars = action.payload;
    },
    addToFavorite(state, action) {
      return (state = [...state, action.payload]);
    },
    removeFromFavorite(state, action) {
      return (state = state.filter((user) => user !== action.payload));
    },
  },
});

export const carReducer = carSlice.reducer;
export const { toggleCar } = carSlice.actions;

const carPersistConfig = {
  key: "cars",
  storage,
};
export const persistedCarReducer = persistReducer(carPersistConfig, carReducer);
