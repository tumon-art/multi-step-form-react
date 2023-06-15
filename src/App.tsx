import "./App.css";
import useMultiStepForm from "./useMultiStepForm";
import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";
import { FormEvent, useState } from "react";
import { z } from "zod";
import { clearFields } from "./slices/formData";
import { clearErr, insertErr } from "./slices/formErrors";
import { useAppDispatch, useAppSelector } from "./hook";

const userForm = z.object({
  firstName: z.string().min(2).max(10),
  lastName: z.string().max(10),
  age: z.number().gt(10).lt(80),
});

const address = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
});

const account = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  petName: z.string().max(6),
});

const user = userForm.merge(address).merge(account);
export type UserType = z.infer<typeof user>;

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const formData = useAppSelector((state) => state.userForm);
  const errors = useAppSelector((state) => state.errors);
  const dispatch = useAppDispatch();

  console.log("errors >>>>> ", errors);
  const {
    steps,
    currentStepIndex,
    setCurrentStepIndex,
    step,
    next,
    back,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      // CHECK 1st STEP'S ERR
      if (currentStepIndex == 0) {
        const status = userForm.safeParse(formData);

        if (!status.success) {
          dispatch(insertErr(status.error.formErrors.fieldErrors));
          return;
        }
      }

      // CHECK 2nd STEP'S ERR
      if (currentStepIndex == 1) {
        const status = address.safeParse(formData);

        if (!status.success) {
          dispatch(insertErr(status.error.formErrors.fieldErrors));
          return;
        }
      }
      // NEXT STEP
      dispatch(clearErr());
      return next();
    }

    // CHECK LAST STEP'S ERR
    if (isLastStep) {
      const status = user.safeParse(formData);

      if (!status.success) {
        dispatch(insertErr(status.error.formErrors.fieldErrors));
        return;
      }
      dispatch(clearErr());
    }

    alert(JSON.stringify(formData));
    console.log(user.parse(formData));

    // RESET
    setCurrentStepIndex(0);
    dispatch(clearFields());
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

  const themeToggle = () => {
    const body = document.getElementsByTagName("BODY")[0] as HTMLElement;
    body.classList.toggle("dark");
    setDarkMode((p) => !p);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={themeToggle}
          className="svg"
        >
          <title> Dark Mode </title>
          <path
            fillRule="evenodd"
            d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 
              7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 
              1.921a.75.75 0 01.808.083z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          onClick={themeToggle}
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <title> Light Mode </title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386
              6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591
              1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 
              12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}

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
      <span role="nothing"> 0 </span>
      <div className="btnHold">
        {/* === Prev Step */}
        {!isFirstStep}

        <button type="button" onClick={() => back()}>
          Back
        </button>
        {/* === Next Step */}
        <button type="submit">{isLastStep ? "Done" : "Next"}</button>
      </div>
    </form>
  );
}

export default App;
