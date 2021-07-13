import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRandomRecipes } from "../../api/api";

export const loadRecipes = createAsyncThunk(
  "recipes/loadRecipes",
  getRandomRecipes
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes: (state, action) => {
        state.recipes = action.payload;
    } 
  },
  extraReducers: {
    [loadRecipes.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipes.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadRecipes.rejected]: (state) => {
      state.hasError = true;
      state.isLoading = false;
    },
  },
});
export const { addRecipes } = recipesSlice.actions;
export const selectRecipes = (state) => state.recipes.recipes;
export const selectIsLoading = (state) => state.recipes.isLoading;
export const selectHasError = (state) => state.recipes.hasError;
export default recipesSlice.reducer;
