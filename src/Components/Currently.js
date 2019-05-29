import React, { Component } from "react";
import ReactSVG from "react-svg";
import "../CSS/Currently.css";
import bubble from "../Image/bubble.png";
import bubbleSVG from "../Image/bubble.svg";
import rafal from "../Image/rafal.png";

class Currently extends Component {
  render() {
    return (
      <div className="currently-box">
        <div className="currently-box-speech">
          <ReactSVG
            src={bubbleSVG}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error);
                return;
              }
              console.log(svg);
            }}
            beforeInjection={svg => {
              svg.classList.add("currently-box-bubbleSVG");
            }}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
            renumerateIRIElements={false}
            wrapper="span"
            className="currently-box-bubbleSVG"
            onClick={() => {
              console.log("wrapper onClick");
            }}
          />
          <div className="currently-box-bubbleSVG-text">
            Jestem Rafał. <br />I lubie Reacta!
          </div>
          <img src={rafal} className="currently-box-img" />{" "}
        </div>
      </div>
    );
  }
}

export default Currently;
