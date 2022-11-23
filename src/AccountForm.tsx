import FormWrapper from "./FormWrapper";

export default function AccountForm() {
  return (
    <FormWrapper title="Account Info">
      <label> Email</label>
      <input required autoFocus type="text" />

      <label> Password</label>
      <input required type="password" />
    </FormWrapper>
  );
}
