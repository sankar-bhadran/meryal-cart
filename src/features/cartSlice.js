import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  adultCount: 0,
  adultTotal: 0,
  juniorTotal: 0,
  juniorCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adding the value of value and adultCount and juniorCount
    add(state, action) {
      // By checking the a type sent by the dispatch function
      if (action.payload === "junior") {
        state.value += 225;
        state.juniorTotal += 225;
        state.juniorCount += 1;
      } else {
        state.value += 260;
        state.adultTotal += 260;
        state.adultCount += 1;
      }
    },
    // Subtracting the value of value and adultCount and juniorCount
    subtract(state, action) {
      if (action.payload === "junior") {
        state.value -= 225;
        state.juniorTotal -= 225;
        state.juniorCount -= 1;
      } else {
        state.value -= 260;
        state.adultTotal -= 260;
        state.adultCount -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const { add, subtract, adultValue } = cartSlice.actions;
