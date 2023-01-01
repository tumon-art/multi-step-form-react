import FormWrapper from "./FormWrapper";

type AccountFormData = {
  email: string;
  password: string;
  petName: string;
};
type AccountFormProps = AccountFormData & {
  updateFields: (field: Partial<AccountFormData>) => void;
};
export default function AccountForm({
  email,
  password,
  petName,
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

      <label> Pet Name</label>
      <input
        required
        type="text"
        value={petName}
        placeholder="pet name"
        onChange={(e) => updateFields({ petName: e.target.value })}
      />
    </FormWrapper>
  );
}
