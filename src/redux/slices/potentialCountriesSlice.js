import { createSlice } from "@reduxjs/toolkit";

export const pontentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: {
    value: [
      {
        name: {
          common: "America",
        },
      },
    ],
  },
  reducers: {
    setPotentialCountries: (state, action) => {
      state.value = action.payload;
    },
    deletePotentialCountries: (state) => {
      state.value = null;
    },
  },
});

export const { setPotentialCountries, deletePotentialCountries } =
  pontentialCountriesSlice.actions;

export const selectPotentials = (state) => {
  return state.potentialCountries.value;
};

export default pontentialCountriesSlice.reducer;
