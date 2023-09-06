import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  email: string;
  emailvalid: boolean;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  accessToken: string | null;
  loading: boolean;
  error: string | null;
  registrationAccessToken: string | null;
  isEmailVerified: boolean;
  verification_token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  accessToken: null,
  loading: false,
  error: null,
  registrationAccessToken: null,
  isEmailVerified: false,
  verification_token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(
      state,
      action: PayloadAction<{ access_token: string; user: User }>
    ) {
      state.accessToken = action.payload.access_token;
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.accessToken = null;
      state.loading = false;
      state.error = null;
      state.user = null;
    },
    setRegistrationAccessToken(
      state,
      action: PayloadAction<{
        access_token: string;
        verification_token: string;
      }>
    ) {
      state.registrationAccessToken = action.payload.access_token;
      state.verification_token = action.payload.verification_token;
    },
    setEmailVerified(state, action: PayloadAction<boolean>) {
      state.isEmailVerified = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  setRegistrationAccessToken,
  setEmailVerified,
} = authSlice.actions;

export default authSlice.reducer;
