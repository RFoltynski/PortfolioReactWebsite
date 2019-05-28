import React, { Component } from "react";
import "../CSS/Currently.css";
import bubble from "../Image/bubble.png";
import bubbleSVG from "../Image/bubble.svg";
import rafal from "../Image/rafal.png";

class Currently extends Component {
  render() {
    return (
      <div className="currently-box">
        <div className="currently-box-speech">
          <img src={bubbleSVG} className="currently-box-bubbleSVG" />{" "}
          <img src={rafal} className="currently-box-img" />{" "}
        </div>
      </div>
    );
  }
}

export default Currently;
