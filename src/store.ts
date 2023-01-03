import { configureStore } from "@reduxjs/toolkit";
import userFormSlice from "./slices/formData";
import formErrors from "./slices/formErrors";

export const store = configureStore({
  reducer: {
    userForm: userFormSlice,
    errors: formErrors,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
