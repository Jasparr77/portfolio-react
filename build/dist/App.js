import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import Words from "./Words.js";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return /* @__PURE__ */ React.createElement(Words, null);
}
export default App;
