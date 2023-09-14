import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { persistedFavoriteReducer } from "./favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    favorites: persistedFavoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
