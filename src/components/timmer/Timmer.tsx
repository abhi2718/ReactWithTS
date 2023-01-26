import { useState, useRef, useEffect } from "react";
export const TimmerComponent = () => {
  const timmerRef = useRef<number | undefined>();
  const [count, setCount] = useState(0);
  const countHelperRef = useRef<number>(0);
  const stopTimer = () => {
    window.clearInterval(timmerRef.current);
  };
  const startTimer = () => {
    timmerRef.current = window.setInterval(() => {
      countHelperRef.current = countHelperRef.current + 1;
      setCount(countHelperRef.current);
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={startTimer}> Start Timmer</button>
      <button onClick={stopTimer}> Stop Timmer</button>
    </div>
  );
};
