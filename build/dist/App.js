import React from "../_snowpack/pkg/react.js";
import Warning from "./Warning.js";
import Words from "./Words.js";
function App() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Words, null), /* @__PURE__ */ React.createElement(Warning, {
    color: "salmon",
    header: "this site is kind of boring, for now.",
    text: "I'm working on making it cooler, though. Come back soon!"
  }));
}
export default App;
