import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducer: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
    }
  }
})

const {loginSuccess }= auth.action;

export const login = ({email, password}) => async dispatch => {
  
}

export default auth.reducer;