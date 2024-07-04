import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import "./App.css";

function App() {
  // console.log(props);
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl  ">Tailwind</h1>
      <Card username="sharma" btnText="click me" />
      <Card username="vishwajeet" btnText="request me" />
    </>
  );
}

export default App;
