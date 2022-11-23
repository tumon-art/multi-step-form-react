import "./App.css";
import useMultiStepForm from "./useMultiStepForm";
import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";
import { FormEvent } from "react";

function App() {
  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([<UserForm />, <AddressForm />, <AccountForm />]);

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
