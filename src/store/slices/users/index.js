//slices/users/index
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

const initialUrl = "https://randomuser.me/api/?page=3&results=10&seed=abc";

export const fetchUsers = () => (dispatch) => {
  axios
    .get(initialUrl)
    .then((response) => {
      dispatch(setUserList(response.data.results));
      console.log("response", response.data);
    })
    .catch((error) => console.log(error));
};
