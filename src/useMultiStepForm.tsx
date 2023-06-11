import { ReactElement, useState } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const next = () => {
    setCurrentStepIndex((p: number) => {
      if (currentStepIndex >= steps.length - 1) return p;
      return p + 1;
    });
  }

  const back = () => {
    setCurrentStepIndex((p: number) => {
      if (currentStepIndex <= 0) return p;
      return p - 1;
    });
  }

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    setCurrentStepIndex,
  };
}
