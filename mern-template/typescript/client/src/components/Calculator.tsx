import { useState } from "react";

export const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };
  return (
    <>
      <h1 data-testid="result">{result}</h1>
      <input
        data-testid="num1"
        type="number"
        value={num1}
        onChange={(e) => {
          setNum1(e.target.value);
        }}
      />
      <input
        data-testid="num2"
        type="number"
        value={num2}
        onChange={(e) => {
          setNum2(e.target.value);
        }}
      />
      <button data-testid="add" onClick={add}>
        Add
      </button>
    </>
  );
};
