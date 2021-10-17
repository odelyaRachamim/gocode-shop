import { useState } from "react";
function ToggleButton() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle && <h1>"HELLO BUYERS"</h1>}
      <button onClick={() => setToggle(!toggle)}>Please Click HERE</button>
    </>
  );
}
export default ToggleButton;

// return (
//   <>
//     <button onClick={() => setToggle(!toggle)}>Please Click HERE</button>
//     {toggle && <h1>"HELLO BUYERS"</h1>}
//   </>
// );
