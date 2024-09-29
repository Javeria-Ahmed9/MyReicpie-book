import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

let productData = createSlice({
  name: "prod",

  initialState: {
    dataArray: [],
    status: STATUS.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.dataArray = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchData.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});

export default productData.reducer;

//MiddleWare

export const fetchData = createAsyncThunk("data/fetch", async (searchTerm) => {
  const options = {
    method: "GET",
    url: "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe",
    params: {
      query: searchTerm,
    },
    headers: {
      "x-rapidapi-key": "922a3ac4cfmsha9d191fcf0bed81p16a423jsn7c9f8d163f37",
      "x-rapidapi-host": "recipe-by-api-ninjas.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);

  if (response.data == "") {
    return (response.data = "notFound");
  } else {
    return response.data;
  }
});
