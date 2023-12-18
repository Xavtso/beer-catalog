import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BeerState {
  choosenBeer: number | null;
  surprise: boolean;
}

const initialState: BeerState = {
  choosenBeer: null,
  surprise: false,
};

const beerSlice = createSlice({
  name: "beer",
  initialState,
  reducers: {
    chooseBeer(state, action: PayloadAction<number>) {
      state.choosenBeer = action.payload;
      state.surprise = false;
    },
    chooseRandomBeer(state) {
      state.surprise = true;
    },
  },
});

export const beerSliceActions = beerSlice.actions;

export default beerSlice;
