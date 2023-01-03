import { useDispatch, useSelector } from "react-redux";
import FormWrapper from "./FormWrapper";
import { updateFields } from "./slices/formData";
import { RootState } from "./store";

export default function AddressForm() {
  const street = useSelector((state: RootState) => state.userForm.street);
  const city = useSelector((state: RootState) => state.userForm.city);
  const state = useSelector((state: RootState) => state.userForm.state);
  const dispatch = useDispatch();

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

      <label> City</label>
      <input
        required
        type="text"
        spellCheck="false"
        value={city}
        onChange={(e) => dispatch(updateFields({ city: e.target.value }))}
      />

      <label>State </label>
      <input
        required
        type="text"
        spellCheck="false"
        value={state}
        onChange={(e) => dispatch(updateFields({ state: e.target.value }))}
      />
    </FormWrapper>
  );
}
