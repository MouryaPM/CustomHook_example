import { useState } from "react";
const useInput = (validatevalue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [fieldVisited, setFieldVisited] = useState(false);
  const fieldIsValid = validatevalue(enteredValue);
  const hasError = !fieldIsValid && fieldVisited;
  const fieldChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const fieldBlurHandler = () => {
    setFieldVisited(true);
  };
  const resetField = () => {
    setFieldVisited(false);
    setEnteredValue("");
  };
  return {
    value: enteredValue,
    hasError: hasError,
    fieldChangeHandler,
    fieldBlurHandler,
    isValid: fieldIsValid,
    resetField,
  };
};

export default useInput;
