import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: [],
  },
  reducers: {
    userInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
