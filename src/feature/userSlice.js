import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: [
      {
        isConnect: "no",
        id: "",
        firstname: "",
        lastname: "",
        email: "",
      },
    ],
  },
  reducers: {
    userInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export default userSlice.reducer;
