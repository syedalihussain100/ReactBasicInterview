import React, { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return {
    count: count,
    increament: increament,
    decreament: decreament,
    resetCount: resetCount,
  };
};

export default useCounter;
