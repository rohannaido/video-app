import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogIn: (state, action) => {
        console.log("LOGIN ", action.payload);
        state.value = action.payload;
    },
    userLogOut: (state) => {
        console.log("LOG OUT REDUCER ");
        state.value = {};
    }
  },
});

export const { userLogIn, userLogOut } = userSlice.actions;
export default userSlice.reducer;