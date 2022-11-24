import "./App.css";
import useMultiStepForm from "./useMultiStepForm";
import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";
import { FormEvent, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function updateFields(field: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...field };
    });
  }

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };
  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <div className="stepCount">
          {currentStepIndex + 1} / {steps.length}
        </div>

        {step}

        <div className="stepNavHold">
          {/* === Prev Step */}
          {!isFirstStep && (
            <button type="button" onClick={() => back()}>
              Back
            </button>
          )}

          {/* === Next Step */}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
