import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleStepChange = (e) => {
    const value = e.target.value;
    setStep(value === "" ? "" : Number(value));
  };

  const increment = () => {
    const incrementStep = step === "" ? 1 : step;
    setCount((prevCount) => parseInt(prevCount + incrementStep));
  };

  const decrement = () => {
    const decrementStep = step === "" ? 1 : step;
    setCount((prevCount) => parseInt(prevCount - decrementStep));
  };

  const resetToZero = () => {
    setCount(0);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <h1 className="text-3xl font-bold">Conter</h1>
      <div className="border-2 flex justify-center items-center flex-col gap-4 p-16">
        <h2 className="text-2xl font-normal">{count}</h2>
        <div className="flex gap-4">
          <button className="button" onClick={increment}>
            +
          </button>
          <button className="button" onClick={decrement}>
            -
          </button>
        </div>
        <div className="flex gap-4">
          <label>Increament / Decreament By input</label>
          <input
            type="number"
            className="border-2"
            onChange={handleStepChange}
          />
        </div>
        <button className="button" onClick={resetToZero}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
