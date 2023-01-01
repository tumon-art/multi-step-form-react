import FormWrapper from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};
type UserFormProps = UserData & {
  updateFields: (field: Partial<UserData>) => void;
};

export default function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Data">
      <label htmlFor="firstname">First Name</label>
      <input
        required
        autoFocus
        type="text"
        id="firstname"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />

      <label htmlFor="lastname">Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        id="lastname"
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />

      <label htmlFor="age">Age</label>
      <input
        required
        type="text"
        value={age}
        id="age"
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
}
