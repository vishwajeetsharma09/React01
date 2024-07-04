import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#457cd9");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 rounded-md text-white shadow-lg"
              style={{ backgroundColor: "Red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-md text-white shadow-lg"
              style={{ backgroundColor: "Green" }}
            >
              green
            </button>{" "}
            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-4 rounded-md text-white shadow-lg"
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>{" "}
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 rounded-md text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>{" "}
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 rounded-md text-white shadow-lg"
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>{" "}
            <button
              onClick={() => setColor("Black")}
              className="outline-none px-4 rounded-md text-white shadow-lg"
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
