import FormWrapper from "./FormWrapper";

export default function AddressForm() {
  return (
    <FormWrapper title="Address Info">
      <label> Street</label>
      <input required autoFocus type="text" />

      <label> City</label>
      <input required type="text" />

      <label>State</label>
      <input required type="text" />

      <label>Zip</label>
      <input required type="text" />
    </FormWrapper>
  );
}
