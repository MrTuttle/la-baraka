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
        Definir comme image de couverture
      </label>
      <p>Cette checkbox est {isChecked ? "checked" : "unchecked"}</p>
    </div>
  );
};

function Checker() {
  console.log("HELO");

  return <CheckboxForAll />;
}

export default Checker;
