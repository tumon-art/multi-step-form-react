import FormWrapper from "./FormWrapper";

type AddressFormData = {
  street: string;
  city: string;
  state: string;
};
type AddressFormProps = AddressFormData & {
  updateFields: (field: Partial<AddressFormData>) => void;
};
export default function AddressForm({
  street,
  city,
  state,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address Info">
      <label> Street</label>
      <input
        required
        autoFocus
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />

      <label> City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />

      <label>State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
    </FormWrapper>
  );
}
