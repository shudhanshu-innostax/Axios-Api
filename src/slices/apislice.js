import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiData: [],
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.apiData = action.payload.data;
    },
  },
});

export const { addData } = apiSlice.actions;
export default apiSlice.reducer;