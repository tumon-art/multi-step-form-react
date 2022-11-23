export default function UserForm() {
  return (
    <>
      <label>First Name</label>
      <input required autoFocus type="text" />

      <label> Last Name</label>
      <input required type="text" />

      <label>Age</label>
      <input required type="number" min={1} />
    </>
  );
}
