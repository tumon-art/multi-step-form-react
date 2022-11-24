import FormWrapper from "./FormWrapper";

type AddressFormProps = {
  street: string;
  city: string;
  state: string;
  zip: string;
};
export default function AddressForm({
  street,
  city,
  state,
  zip,
}: AddressFormProps) {
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
