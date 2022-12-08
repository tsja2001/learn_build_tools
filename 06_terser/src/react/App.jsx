import React, {useState} from "react";
import reactDom from "react-dom";

export const App = React.memo(() => {
  const [count, setCount] = useState(1);

  const setCountFn = (count) => {
    setCount(count);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCountFn(count + 1)}>+1</button>
      <button onClick={() => setCountFn(count - 1)}>-1</button>
    </div>
  );
});
