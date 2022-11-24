import FormWrapper from "./FormWrapper";

type AccountFormProps = {
  email: string;
  password: string;
};
export default function AccountForm({ email, password }: AccountFormProps) {
  return (
    <FormWrapper title="Account Info">
      <label> Email</label>
      <input required autoFocus type="text" />

      <label> Password</label>
      <input required type="password" />
    </FormWrapper>
  );
}
