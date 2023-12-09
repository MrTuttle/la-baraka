import { useState } from "react";

export const CheckboxForAll = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    // pass the inverse of (isChecked) with (!isChecked)
    console.log(!isChecked);
    console.log("hello");
  };
  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor="checkbox" className="px-2">
        I agree to Terms of Service{" "}
      </label>
      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
  );
};

function Checker() {
  console.log("HELO");

  return (
    <div className="App">
      <CheckboxForAll />
    </div>
  );
}

export default Checker;
