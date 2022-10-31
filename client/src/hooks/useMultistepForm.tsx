import { useState } from "react";

const useMultistepform = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    setCurrentStep((i) => i + 1);
  };

  const back = () => setCurrentStep((i) => i - 1);

  function goTo(index: number) {
    setCurrentStep(index);
  }

  return {
    currentStep,
    isFirstStep: currentStep === 1,
    isSecondStep: currentStep === 2,
    isThirdStep: currentStep === 3,
    goTo,
    next,
    back,
  };
};

export default useMultistepform;
