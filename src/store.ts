import { configureStore } from "@reduxjs/toolkit";
import userFormSlice from "./slices/formData";

export const store = configureStore({
  reducer: {
    userForm: userFormSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
