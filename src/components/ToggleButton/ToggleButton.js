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
  /* import {useState} from "react";

function ToggleButton ()
{
  const [myString, setString] = useState(true);
  return (
    <div>
     <button onClick={() => setString(!myString)}> Click here for hidding the string<button/>
     <h2>{myString ? "HELLO" :""}<h2/>
    <div/>
  );
}

export deafult ToggleButton;
===============================================================

export default function ToggleButton() {
  return <div> my Toggle button! </div>;
} */
}
