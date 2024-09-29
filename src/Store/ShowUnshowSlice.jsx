import { createSlice } from "@reduxjs/toolkit";
let dat = createSlice({
  name: "recipe",
  initialState: {
    Clicked: [],
    stateIs: true,
    spin: true,
  },
  reducers: {
    Showdat(state, action) {
      state.stateIs = action.payload;
    },
    UnShow(state, action) {
      state.stateIs = action.payload;
    },
    Selectedrecipe(state, action) {
      state.Clicked = Array(action.payload);
    },
    NotTrue(state, action) {
      state.spin = action.payload;
    },
  },
});
export const { Showdat, UnShow, Selectedrecipe, NotTrue } = dat.actions;
export default dat.reducer;
