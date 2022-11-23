import { ReactElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useMultiStepForm from "./useMultiStepForm";

function App() {
  const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([
      <div> First Step </div>,
      <div> Seconde Step </div>,
      <div> Third Step </div>,
    ]);

  return (
    <div className="App">
      <form>
        <div className="stepCount">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}

        <div className="stepNavHold">
          {/* === Prev Step */}
          {!isFirstStep && <div onClick={() => back()}> Back </div>}

          {/* === Next Step */}
          <div onClick={() => next()}>{isLastStep ? "Finish" : "Next"}</div>
        </div>
      </form>
    </div>
  );
}

export default App;
