import { register } from "module";
import { useState } from "react";

interface Props {
  defaultState: boolean;
  // returnState: ()=> void;
}
interface Rooms {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
interface List {
  listRooms: Rooms[];
}

export const CheckboxForAll = (
  { defaultState }: Props,
  { listRooms }: List
) => {
  const [isChecked, setIsChecked] = useState(defaultState);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    // pass the inverse of (isChecked) with (!isChecked)
    console.log(!isChecked);
    // => true or false
    // console.log("hello");
  };
  const returnState = checkHandler;
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

// function Checker({ defaultState, returnState }: Props) {
//   console.log("HELO");
//   console.log(returnState);

//   return (
//     <CheckboxForAll defaultState={defaultState} returnState={returnState} />
//   );
// }

export default CheckboxForAll;
