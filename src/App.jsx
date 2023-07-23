import { useState } from "react";
import "./App.css";

function App() {
  const [pass, setpass] = useState("Generate a Password");
  const [rangeValue, setRangeValue] = useState(1);
  const [capitalAlphabets, setcapitalAlphabets] = useState(true);
  const [smallAlphabets, setSmallAlphabets] = useState(false);
  const [numberPattern, setNumberPattern] = useState(false);
  const [symbolPattern, setSymbolPattern] = useState(false);

  const minRange = 1;
  const maxRange = 35;

  const handleCheckboxChange = (arg) => {
    if (arg == "capitalAlphabet") {
      if (capitalAlphabets == false) {
        setcapitalAlphabets(true);
      } else {
        setcapitalAlphabets(false);
      }
    }

    if (arg == "smallAlphabet") {
      if (smallAlphabets == false) {
        setSmallAlphabets(true);
      } else {
        setSmallAlphabets(false);
      }
    }

    if (arg == "numberPattern") {
      if (numberPattern == false) {
        setNumberPattern(true);
      } else {
        setNumberPattern(false);
      }
    }

    if (arg == "symbolPattern") {
      if (symbolPattern == false) {
        setSymbolPattern(true);
      } else {
        setSymbolPattern(false);
      }
    }
  };

  const randomOutput = () => {
    const capAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const sAlphabets = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";

    let randomResult = "";
    let resultOutput = "";

    for (let i = 1; i <= rangeValue; i++) {
      if (capitalAlphabets == true) {
        randomResult +=
          capAlphabets[Math.floor(Math.random() * capAlphabets.length)];
      }
    }

    for (let i = 1; i <= rangeValue; i++) {
      if (smallAlphabets == true) {
        randomResult +=
          sAlphabets[Math.floor(Math.random() * sAlphabets.length)];
      }
    }

    for (let i = 1; i <= rangeValue; i++) {
      if (numberPattern == true) {
        randomResult += numbers[Math.floor(Math.random() * numbers.length)];
      }
    }

    for (let i = 1; i <= rangeValue; i++) {
      if (symbolPattern == true) {
        randomResult += symbols[Math.floor(Math.random() * symbols.length)];
      }
    }

    for (let i = 1; i <= rangeValue; i++) {
      let index = Math.floor(Math.random() * randomResult.length);
      resultOutput += randomResult[index];
    }

    return resultOutput;
  };

  return (
    <>
      <h1>Random Password Generator</h1>
      <div>
        <div>
          <p id="output">{!pass ? "Please select characters below." : pass}</p>
        </div>

        <button id="btnPassword" onClick={() => setpass(randomOutput)}>
          Generate Password
        </button>
        <button
          id="btnPassword"
          onClick={() => {
            navigator.clipboard.writeText(pass);
            window.alert("Password Copied!");
          }}
        >
          Copy Password
        </button>
        <br />

        <div className="rangeContainer">
          <label className="rangeLabel">Password Length: </label>
          <label className="rangeLabel">{rangeValue}</label>
          <button
            id="minus"
            className="rangeButtons"
            onClick={() =>
              setRangeValue(rangeValue == minRange ? minRange : rangeValue - 1)
            }
          >
            -
          </button>
          <input
            id="inputRange"
            type="range"
            step={1}
            min={minRange}
            max={maxRange}
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
          <button
            id="plus"
            className="rangeButtons"
            onClick={() =>
              setRangeValue(
                rangeValue < maxRange ? rangeValue * 1 + 1 : maxRange
              )
            }
          >
            +
          </button>
        </div>

        <div className="checkboxPattern">
          <span>Characters Used: </span>
          <input
            type="checkbox"
            name="ABC"
            style={{
              margin: "5px",
              width: "1rem",
              height: "1rem",
            }}
            checked={capitalAlphabets}
            onChange={() => handleCheckboxChange("capitalAlphabet")}
          />
          <label htmlFor="ABC">ABC</label>
          <input
            type="checkbox"
            name="abc"
            style={{
              margin: "5px",
              width: "1rem",
              height: "1rem",
            }}
            checked={smallAlphabets}
            onChange={() => handleCheckboxChange("smallAlphabet")}
          />
          <label htmlFor="abc">abc</label>
          <input
            type="checkbox"
            name="num"
            style={{
              margin: "5px",
              width: "1rem",
              height: "1rem",
            }}
            checked={numberPattern}
            onChange={() => handleCheckboxChange("numberPattern")}
          />
          <label htmlFor="num">123</label>
          <input
            type="checkbox"
            name="symbol"
            style={{
              margin: "5px",
              width: "1rem",
              height: "1rem",
            }}
            checked={symbolPattern}
            onChange={() => handleCheckboxChange("symbolPattern")}
          />
          <label htmlFor="symbol">@$%*</label>
        </div>
      </div>
    </>
  );
}

export default App;
