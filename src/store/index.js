import { configureStore } from "@reduxjs/toolkit";

//reducers
import user from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user,
  },
});
