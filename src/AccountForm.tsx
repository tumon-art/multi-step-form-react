import FormWrapper from "./FormWrapper";

type AccountFormData = {
  email: string;
  password: string;
};
type AccountFormProps = AccountFormData & {
  updateFields: (field: Partial<AccountFormData>) => void;
};
export default function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Info">
      <label> Email</label>
      <input
        required
        autoFocus
        type="email"
        value={email}
    placeholder="email"
        onChange={(e) => updateFields({ email: e.target.value })}
      />

      <label> Password</label>
      <input
        required
        type="password"
        value={password}
    placeholder="password"
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
