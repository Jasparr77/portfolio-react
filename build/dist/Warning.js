import React, {useState} from "../_snowpack/pkg/react.js";
import ReactDom from "../_snowpack/pkg/react-dom.js";
const Warning = (props) => {
  const {header, text, color} = props;
  const headerBarStyle = {
    width: "120%",
    height: "15px",
    position: "relative",
    top: "0px",
    backgroundColor: color,
    margin: "-10px",
    marginBottom: "5px"
  };
  const hideButtonStyle = {
    position: "relative",
    textAlign: "center",
    bottom: "2px",
    left: "45%",
    width: "10%",
    height: "20px",
    cursor: "pointer",
    backgroundColor: "whitesmoke",
    color: "black",
    borderRadius: "12px"
  };
  const warningStyle = {
    backgroundColor: "black",
    padding: "10px",
    marginTop: "10px",
    opacity: ".8",
    borderRadius: "12px",
    color: "white",
    position: "fixed",
    top: "5px",
    right: "5px",
    transition: "opacity 1s, right 1s ease",
    overflow: "hidden",
    borderCollapse: "separate"
  };
  const [showStyle, setShowStyle] = useState(true);
  const returnStyle = (useState2) => {
    if (useState2)
      return warningStyle;
    else
      return {...warningStyle, opacity: 0, right: -600};
  };
  return ReactDom.createPortal(/* @__PURE__ */ React.createElement("div", {
    style: returnStyle(showStyle)
  }, /* @__PURE__ */ React.createElement("div", {
    style: headerBarStyle
  }), /* @__PURE__ */ React.createElement("h1", null, header), /* @__PURE__ */ React.createElement("p", null, text), /* @__PURE__ */ React.createElement("div", {
    style: hideButtonStyle,
    onClick: () => setShowStyle(() => false)
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text_small"
  }, "ok"))), document.getElementById("root"));
};
export default Warning;
