import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber: '',
  password: '',
};
const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const {setUserName} = AuthSlice.actions;
export default AuthSlice.reducer;
