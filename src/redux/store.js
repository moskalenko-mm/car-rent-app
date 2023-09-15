import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { persistedCarReducer } from "./car/carSlice";

export const store = configureStore({
  reducer: {
    cars: persistedCarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
