import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState:{
    value: {
      uid: "",
      accessToken: "",
      displayName: "",
    },
  },
  reducers: {
    userLogIn: (state, action) => {
        console.log("LOGIN ", action.payload);
        state.value = action.payload;
    },
    userLogOut: (state) => {
        console.log("LOG OUT REDUCER ");
        state.value = {
          uid: "",
          accessToken: "",
          displayName: "",
        }
    }
  },
});

export const { userLogIn, userLogOut } = userSlice.actions;
export default userSlice.reducer;