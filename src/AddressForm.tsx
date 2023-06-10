import FormWrapper from "./FormWrapper";
import { useAppDispatch, useAppSelector } from "./hook";
import { updateFields } from "./slices/formData";

export default function AddressForm() {
  const street = useAppSelector((state) => state.userForm.street);
  const city = useAppSelector((state) => state.userForm.city);
  const state = useAppSelector((state) => state.userForm.state);
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.errors);

  return (
    <FormWrapper title="Address Info">
      <label> Street</label>
      <input
        required
        autoFocus
        type="text"
        spellCheck="false"
        value={street}
        onChange={(e) => dispatch(updateFields({ street: e.target.value }))}
      />
      {errors.street && <p> {errors.street[0]} </p>}

      <label> City</label>
      <input
        required
        type="text"
        spellCheck="false"
        value={city}
        onChange={(e) => dispatch(updateFields({ city: e.target.value }))}
      />
      {errors.city && <p> {errors.city[0]} </p>}

      <label>State </label>
      <input
        required
        type="text"
        spellCheck="false"
        value={state}
        onChange={(e) => dispatch(updateFields({ state: e.target.value }))}
      />
      {errors.state && <p> {errors.state[0]} </p>}
    </FormWrapper>
  );
}
