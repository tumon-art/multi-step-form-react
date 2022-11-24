import FormWrapper from "./FormWrapper";

type UserFormProps = {
  firstName: string;
  lastName: string;
  age: string;
};

export default function UserForm({ firstName, lastName, age }: UserFormProps) {
  return (
    <FormWrapper title="User Data">
      <label>First Name</label>
      <input required autoFocus type="text" value={firstName} />

      <label> Last Name</label>
      <input required type="text" value={lastName} />

      <label>Age</label>
      <input required type="number" min={1} value={age} />
    </FormWrapper>
  );
}
