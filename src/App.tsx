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
  email: string;
  password: string;
  petName: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  email: "",
  password: "",
  petName: "",
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
    if (!isLastStep) return next();
    alert(JSON.stringify(data));
  };

  const css = () => {
    if (currentStepIndex == 0) {
      return { width: "0%" };
    }
    if (currentStepIndex == 1) {
      return { width: "50%" };
    }
    if (currentStepIndex == 2) {
      return { width: "100%" };
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      {/* === ProgressBar */}
      <div className="progressBarHold">
        <div className="progressBar"></div>
        <div className="progressFill" style={css()}></div>
        {/* === Buble  */}
        {steps.map((e: any, i: any) => {
          return (
            <div
              key={i}
              className={`${
                currentStepIndex >= i ? "circelColor" : "onlyCircle"
              }`}
            >
              {i + 1}
            </div>
          );
        })}
      </div>

      <section className="stepSection">{step}</section>

      <div className="btnHold">
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
  );
}

export default App;
