import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails, signInUser, signUpUser } from "./userAction";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // Sign in user reducer
    [signInUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signInUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.token;
    },
    [signInUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // Sign up user reducer
    [signUpUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signUpUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [signUpUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // Get user details reducer
    [getUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.user;
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
