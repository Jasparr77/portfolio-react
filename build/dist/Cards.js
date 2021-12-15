import {useSpring, animated, config} from "../_snowpack/pkg/@react-spring/web.js";
import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
import Words from "./Words.js";
const Cards = (props) => {
  const {scrollPercent} = props;
  const springConfig = {
    loop: {reverse: true}
  };
  const arrowStyles = useSpring({
    from: {
      y: 35
    },
    to: {
      y: 15
    },
    ...springConfig
  });
  const svgStyles = useSpring({
    transform: scrollPercent > 1 ? "scale(1,-1)" : "scale(1,1)",
    transformScale: "center"
  });
  const shadowStyles = useSpring({
    to: {
      opacity: "0.2",
      cx: 40,
      cy: 62.5,
      rx: 2,
      ry: 2
    },
    from: {
      opacity: "1",
      cx: 40,
      cy: 62.5,
      rx: 15,
      ry: 4
    },
    ...springConfig
  });
  const [flip, set] = useState(false);
  const greetingStyle = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip)
  });
  const scrollClickHandler = (scrollPos) => {
    if (scrollPercent < 1) {
      window.scrollBy({top: window.innerHeight, behavior: "smooth"});
    } else {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  };
  useEffect(() => {
    if (typeof document !== "undefined") {
      const height = window.innerHeight - 30;
      const allCards = document.querySelectorAll(".wordContainer");
      allCards.forEach((card, cardIndex) => {
        card.setAttribute("style", `
        height: ${height * 0.55}px;
        `);
      });
    }
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(animated.svg, {
    overflow: "visible",
    x: `${innerWidth * 0.8}`,
    width: "80px",
    height: "80px",
    id: "arrowContainer",
    style: {
      cursor: "pointer",
      ...svgStyles
    },
    onClick: () => scrollClickHandler(window.scrollY)
  }, /* @__PURE__ */ React.createElement(animated.ellipse, {
    fill: "lightgrey",
    style: shadowStyles
  }), /* @__PURE__ */ React.createElement(animated.path, {
    id: "arrow",
    d: `M20,0 L40,20 L60,0`,
    stroke: "rebeccapurple",
    strokeWidth: "8px",
    strokeLinecap: "round",
    fill: "none",
    style: arrowStyles
  })), /* @__PURE__ */ React.createElement(Words, null));
};
export default Cards;
