import { configureStore } from "@reduxjs/toolkit";
import recipeData from "./RecipieData";
import showunshow from "./ShowUnshowSlice";

let store = configureStore({
  reducer: {
    RecipeData: recipeData,
    ShowUnshow: showunshow,
  },
});

export default store;
