import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
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

// Must export the reducer so we can import it from Store
export default userSlice.reducer;

const initialUrl = "https://randomuser.me/api/?page=1&results=12&seed=abc";

export const fetchUsers = () => (dispatch) => {
  axios
    .get(initialUrl)
    .then((response) => {
      dispatch(setUserList(response.data.results));
      console.log("response", response.data);
    })
    .catch((error) => console.log(error));
};
