import { configureStore } from "@reduxjs/toolkit";
import userFormSlice from "./slices/formData";
import formErrors from "./slices/formErrors";

export const store = configureStore({
  reducer: {
    userForm: userFormSlice,
    errors: formErrors,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
