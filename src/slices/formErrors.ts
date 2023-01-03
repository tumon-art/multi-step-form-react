import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../App";

type OptionsFlags<UserType> = {
  [Property in keyof UserType]?: string[] | undefined;
};

type ErrorsTypes = OptionsFlags<UserType>;

const initialState: ErrorsTypes = {
  firstName: undefined,
  lastName: undefined,
  age: undefined,
  street: undefined,
  city: undefined,
  state: undefined,
  email: undefined,
  password: undefined,
  petName: undefined,
};

const formErrors = createSlice({
  name: "errors",
  initialState,
  reducers: {
    insertErr: (state, action: PayloadAction<Partial<ErrorsTypes>>) => {
      return { ...action.payload };
    },
  },
});

export const { insertErr } = formErrors.actions;

export default formErrors.reducer;
