import React, { Component } from "react";
import "../CSS/Currently.css";
import bubble from "../Image/bubble.png";
import rafal from "../Image/rafal.png";

class Currently extends Component {
  render() {
    return (
      <div className="currently-box">
        <div className="currently-box-avatar">
          <div className="currenty-box-bubble">
            <img src={bubble} />{" "}
            <p>
              Jestem Rafał <br /> i bardzo lubie Reacta!
            </p>
          </div>
          <div className="currently-box-img">
            <img src={rafal} />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Currently;
