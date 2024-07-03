import { useState } from "react";
import "./App.css";

function App() {
  let initialValue = 0;
  let [counter, SetCounter] = useState(initialValue);
  // let counter = 5;
  const maxValue = 5;
  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1;

    SetCounter(counter);
    if (counter === maxValue) {
      console.log("value is 5");
      return;
    }
    const NewCounter = counter + 1;
    SetCounter(NewCounter);
  };
  const removeValue = () => {
    console.log("clicked", counter);
    if (counter === initialValue) {
      console.log("Counter is already at 0. Cannot decrement further.");
      return;
    }
    const newCounter = counter - 1;
    setCounter(newCounter);
    // counter = counter - 1;
    SetCounter(counter);
  };
  return (
    <>
      <h1>This is react counter demo</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value:</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease value:</button>
    </>
  );
}

export default App;
