import FormWrapper from "./FormWrapper";
import { useAppDispatch, useAppSelector } from "./hook";
import { updateFields } from "./slices/formData";

export default function AccountForm() {
  const email = useAppSelector((state) => state.userForm.email);
  const password = useAppSelector((state) => state.userForm.password);
  const petName = useAppSelector((state) => state.userForm.petName);
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.errors);

  return (
    <FormWrapper title="Account Info">
      <label> Email</label>
      <input
        required
        autoFocus
        type="email"
        spellCheck="false"
        value={email}
        onChange={(e) => dispatch(updateFields({ email: e.target.value }))}
      />
      {errors.email && <p> {errors.email[0]} </p>}

      <label> Password</label>
      <input
        required
        type="password"
        spellCheck="false"
        value={password}
        onChange={(e) => dispatch(updateFields({ password: e.target.value }))}
      />
      {errors.password && <p> {errors.password[0]} </p>}

      <label> Pet Name</label>
      <input
        required
        type="text"
        spellCheck="false"
        value={petName}
        onChange={(e) => dispatch(updateFields({ petName: e.target.value }))}
      />
      {errors.petName && <p> {errors.petName[0]} </p>}
    </FormWrapper>
  );
}
