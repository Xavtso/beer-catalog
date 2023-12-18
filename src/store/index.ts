import { configureStore } from "@reduxjs/toolkit";
import beerSlice from "./beerSlice";

const store = configureStore({
  reducer: {
    beer: beerSlice.reducer,
  },
});

export default store;

