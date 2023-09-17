import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { getCar } from "../../shared/api/api";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  return {
    ...state,
    isLoading: false,
    cars: action.payload,
  };
};

export const fetchCarsRequest = createAsyncThunk("cars/fetchCars", async () => {
  const response = await getCar();
  return response;
});

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorite(state, action) {
      state.favorites = state.favorites.filter((car) => car !== action.payload);
    },
  },
  extraReducers: {
    [fetchCarsRequest.pending]: handlePending,
    [fetchCarsRequest.rejected]: handleRejected,
    [fetchCarsRequest.fulfilled]: handleFulfilled,
  },
});

export const carReducer = carSlice.reducer;
export const { addToFavorite, removeFromFavorite } = carSlice.actions;

const carPersistConfig = {
  key: "cars",
  storage,
  whitelist: ["cars", "favorites"],
};
export const persistedCarReducer = persistReducer(carPersistConfig, carReducer);
