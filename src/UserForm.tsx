import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import FormWrapper from "./FormWrapper";
import { updateFields } from "./slices/formData";
import { RootState } from "./store";

export default function UserForm() {
  const firstName = useSelector((state: RootState) => state.userForm.firstName);
  const lastName = useSelector((state: RootState) => state.userForm.lastName);
  const age = useSelector((state: RootState) => state.userForm.age);
  const dispatch = useDispatch();
  const errors = useSelector((state: RootState) => state.errors);

  return (
    <FormWrapper title="User Data">
      <label htmlFor="firstname">First Name</label>
      <input
        required
        autoFocus
        type="text"
        spellCheck="false"
        id="firstname"
        value={firstName}
        onChange={(e) => dispatch(updateFields({ firstName: e.target.value }))}
      />

      {errors.firstName && <p> {errors.firstName[0]} </p>}

      <label htmlFor="lastname">Last Name</label>
      <input
        required
        type="text"
        spellCheck="false"
        value={lastName}
        id="lastname"
        onChange={(e) => dispatch(updateFields({ lastName: e.target.value }))}
      />
      {errors.lastName && <p> {errors.lastName[0]} </p>}

      <label htmlFor="age">Age</label>
      <input
        required
        type="number"
        value={age.toString()}
        id="age"
        onChange={(e) =>
          dispatch(updateFields({ age: Number(e.target.value) }))
        }
      />
      {errors.age && <p> {errors.age[0]} </p>}
    </FormWrapper>
  );
}
