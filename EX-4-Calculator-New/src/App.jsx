import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");

  const press = (value) => {
    if (display === "0" && value !== ".") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const clear = () => {
    setDisplay("0");
    setExpression("");
  };

  const backspace = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const calculate = () => {
    try {
      const result = Function(`"use strict"; return (${display})`)();

      setExpression(`${display} =`);
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <main className="app">
      <section className="calculator">

        <header className="top">
          <span className="brand">
            CALC<span>•</span>
          </span>

          <span className="status">
            ● READY
          </span>
        </header>

        <div className="display">
          <div className="expression">
            {expression}
          </div>

          <div className="result">
            {display}
          </div>
        </div>

        <div className="buttons">

          <button className="special" onClick={clear}>
            AC
          </button>

          <button className="special" onClick={backspace}>
            ⌫
          </button>

          <button
            className="operator"
            onClick={() => press("%")}
          >
            %
          </button>

          <button
            className="operator"
            onClick={() => press("/")}
          >
            ÷
          </button>

          <button onClick={() => press("7")}>7</button>
          <button onClick={() => press("8")}>8</button>
          <button onClick={() => press("9")}>9</button>

          <button
            className="operator"
            onClick={() => press("*")}
          >
            ×
          </button>

          <button onClick={() => press("4")}>4</button>
          <button onClick={() => press("5")}>5</button>
          <button onClick={() => press("6")}>6</button>

          <button
            className="operator"
            onClick={() => press("-")}
          >
            −
          </button>

          <button onClick={() => press("1")}>1</button>
          <button onClick={() => press("2")}>2</button>
          <button onClick={() => press("3")}>3</button>

          <button
            className="operator"
            onClick={() => press("+")}
          >
            +
          </button>

          <button
            className="zero"
            onClick={() => press("0")}
          >
            0
          </button>

          <button onClick={() => press(".")}>
            .
          </button>

          <button
            className="equals"
            onClick={calculate}
          >
            =
          </button>

        </div>

        <footer className="footer">
          <span>REACT CALCULATOR</span>
          <span>v1.0</span>
        </footer>

      </section>
    </main>
  );
}

export default App;