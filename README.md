# Ex04 Simple Calculator - React Project
## Date:25/08/2026
## Name: SACHIN S.B
## Reg No : 212225040353

## AIM
To  develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM
### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:
  <ul><li>npx create-react-app simple-calculator</li>
  <li>cd simple-calculator</li>
  <li>npm start</li></ul>

### STEP 3
Inside the src/ folder, create a new file Calculator.js and define the basic structure.

### STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

### STEP 5
Create a new file Calculator.css in src/ and add the styling.

### STEP 6
Open src/App.js and modify it.

### STEP 7
Start the development server.
  npm start

### STEP 8
Open htt/://localhost:3000/ in the browser.

### STEP 9
Test the calculator by entering numbers and operations.

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Deploy the website.

### STEP 12
Upload to GitHub Pages for free hosting.

## PROGRAM
App.jsx
```
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
```
App.css
```
* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  min-height: 100%;
}

body {
  font-family:
    Inter,
    Arial,
    Helvetica,
    sans-serif;

  background: #08090d;
}

button {
  font-family: inherit;
}

.app {
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(124, 58, 237, 0.18),
      transparent 32%
    ),
    radial-gradient(
      circle at 85% 80%,
      rgba(59, 130, 246, 0.12),
      transparent 30%
    ),
    #08090d;
}

.calculator {
  width: 360px;
  padding: 22px;

  border-radius: 30px;

  background: rgba(18, 20, 27, 0.96);

  border: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.65),
    inset 0 1px rgba(255, 255, 255, 0.06);
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 18px;
}

.brand {
  color: #f5f5f7;

  font-size: 14px;
  font-weight: 700;

  letter-spacing: 3px;
}

.brand span {
  color: #8b5cf6;
}

.status {
  color: #737783;

  font-size: 9px;
  letter-spacing: 1px;
}

.display {
  height: 140px;

  padding: 20px;

  margin-bottom: 18px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  border-radius: 20px;

  background: #0c0e13;

  border: 1px solid rgba(255, 255, 255, 0.05);

  overflow: hidden;
}

.expression {
  min-height: 20px;

  margin-bottom: 6px;

  color: #656976;

  font-size: 14px;
}

.result {
  max-width: 100%;

  color: #f5f5f7;

  font-size: 42px;
  font-weight: 300;

  overflow-x: auto;
}

.buttons {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 10px;
}

.buttons button {
  height: 62px;

  border: none;
  border-radius: 17px;

  color: #e8e9ed;
  background: #191c24;

  font-size: 20px;

  cursor: pointer;

  transition:
    transform 0.15s ease,
    background 0.15s ease;
}

.buttons button:hover {
  background: #252a34;

  transform: translateY(-2px);
}

.buttons button:active {
  transform: scale(0.94);
}

.buttons .special {
  color: #c4a7ff;

  background: #25202f;
}

.buttons .special:hover {
  background: #352c45;
}

.buttons .operator {
  color: #a78bfa;

  background: #211b2d;

  font-size: 23px;
}

.buttons .operator:hover {
  background: #302744;
}

.buttons .zero {
  grid-column: span 2;
}

.buttons .equals {
  color: white;

  background: #8b5cf6;

  font-size: 26px;
}

.buttons .equals:hover {
  background: #9d72f7;
}

.footer {
  display: flex;
  justify-content: space-between;

  margin-top: 18px;
  padding: 0 5px;

  color: #50545f;

  font-size: 8px;
  letter-spacing: 2px;
}

@media (max-width: 420px) {
  .app {
    padding: 12px;
  }

  .calculator {
    width: 100%;
  }

  .buttons button {
    height: 58px;
  }
}
```




## OUTPUT
<img width="896" height="691" alt="Screenshot 2026-08-24 210602" src="https://github.com/user-attachments/assets/ea5b3f0c-4d8f-4a59-a60b-d9fd6138f1a7" />



## RESULT
The program for developing a simple calculator in React.js is executed successfully.
