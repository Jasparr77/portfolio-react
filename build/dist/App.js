import React, {useState, useRef} from "../_snowpack/pkg/react.js";
import Words from "./Words.js";
import Cards from "./Cards.js";
import {useScroll} from "../_snowpack/pkg/react-use-gesture.js";
function App() {
  const options = ["boring", "fun!"];
  const [selection, setSelection] = useState(options[1]);
  const ref = useRef();
  const [scrollPercent, setScrollPercent] = useState(0);
  useScroll((state) => {
    setScrollPercent(state.values[1] / (document.body.scrollHeight - window.innerHeight));
  }, {domTarget: window});
  return /* @__PURE__ */ React.createElement("div", {
    ref
  }, /* @__PURE__ */ React.createElement("div", {
    style: {overflowX: "clip"}
  }, selection === "boring" ? /* @__PURE__ */ React.createElement(Words, null) : /* @__PURE__ */ React.createElement(Cards, {
    scrollPercent
  })));
}
export default App;
