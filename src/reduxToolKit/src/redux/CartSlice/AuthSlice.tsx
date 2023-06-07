import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};
const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const {setUserName} = AuthSlice.actions;
export default AuthSlice.reducer;
