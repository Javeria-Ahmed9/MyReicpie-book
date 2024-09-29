import { createSlice } from "@reduxjs/toolkit";
let dat = createSlice({
  name: "recipe",
  initialState: {
    Clicked: [],
    stateIs: true,
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
  },
});
export const { Showdat, UnShow, Selectedrecipe } = dat.actions;
export default dat.reducer;
