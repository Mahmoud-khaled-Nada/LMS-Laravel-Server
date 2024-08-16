import { AuthorizationToken, User, UserState } from "@/utils/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState: UserState = {
  user: null,
  isLogin:false,
  isSignUp:false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setUser This function only works when the user creates a login
    setUser: (state, action: PayloadAction<AuthorizationToken>) => {
      console.log("print user login info from state");
      console.log(action.payload);
      const { access_token, expires_in, user } = action.payload;
      if (access_token) {
        state.user = user;
        Cookies.set("access_token", access_token, { expires: expires_in - 500 });
      }
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
      Cookies.remove("access_token");
    },
    changeLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    changeSignUp: (state, action) => {
      state.isSignUp = action.payload;
    },
  },
});

export const { setUser, updateUser, removeUser , changeLogin, changeSignUp} = userSlice.actions;
export default userSlice.reducer;
