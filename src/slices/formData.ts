import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../App";

const INITIAL_DATA: UserType = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  email: "",
  password: "",
  petName: "",
};

const initialState: UserType = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  email: "",
  password: "",
  petName: "",
};

export const userFormSlice = createSlice({
  name: "userForm",
  initialState,
  reducers: {
    updateFields: (state, action: PayloadAction<Partial<UserType>>) => {
      return { ...state, ...action.payload };
    },
    clearFields: (state) => {
      return (state = INITIAL_DATA);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFields } = userFormSlice.actions;
export const { clearFields } = userFormSlice.actions;

export default userFormSlice.reducer;
