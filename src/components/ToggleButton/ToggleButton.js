import { useState } from "react";
function ToggleButton() {
  const [myString, setString] = useState(true);
  return (
    <>
      <button onClick={() => setString(!myString)}>
        Please Click HERE for hidding
      </button>
      <h2>{myString ? "HELLO DEAR BUYERS" : ""}</h2>
    </>
  );
}
export default ToggleButton;

{
  /* 
  export default function ToggleButton() {
  return <div> my Toggle button! </div>;
} */
}
