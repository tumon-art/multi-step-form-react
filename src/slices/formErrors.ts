import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../App";

type OptionsFlags<UserType> = {
  [Property in keyof UserType]?: string[] | undefined;
};

type ErrorsTypes = OptionsFlags<UserType>;

const INITIAL_DATA = {
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
    insertErr: (state, action: PayloadAction<Partial<ErrorsTypes>>) => ({
      ...action.payload,
    }),
    clearErr: (state) => (state = INITIAL_DATA),
  },
});

export const { insertErr, clearErr } = formErrors.actions;

export default formErrors.reducer;
