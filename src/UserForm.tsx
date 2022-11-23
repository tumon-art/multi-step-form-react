import FormWrapper from "./FormWrapper";

export default function UserForm() {
  return (
    <FormWrapper title="User Data">
      <label>First Name</label>
      <input required autoFocus type="text" />

      <label> Last Name</label>
      <input required type="text" />

      <label>Age</label>
      <input required type="number" min={1} />
    </FormWrapper>
  );
}
