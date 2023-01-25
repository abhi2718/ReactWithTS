import { useState, createContext } from "react";
import { ShowCount } from "./showCount";

export const CountContext = createContext(0);

export const CountScreen = () => {
  const [count, setCount] = useState<number>(0);
    const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <CountContext.Provider value={count}>
      <div>
              <button onClick={increaseCount}>Count</button>
              <ShowCount />
      </div>
    </CountContext.Provider>
  );
};
