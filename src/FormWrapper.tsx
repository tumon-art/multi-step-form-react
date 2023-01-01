type FromWrapperProps = {
  title: string;
  children: React.ReactNode;
};
export default function FormWrapper({ title, children }: FromWrapperProps) {
  return (
    <>
      <h2 className="FormWrapperH2"> {title} </h2>
      <div className="FormWrapperHold">{children}</div>
    </>
  );
}
