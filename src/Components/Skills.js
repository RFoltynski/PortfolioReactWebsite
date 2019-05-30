import React, { Component } from "react";
import ReactSVG from "react-svg";
import "../CSS/Skills.css";
import whiteBoard from "../Image/whiteBoard.svg";

class Skills extends Component {
  render() {
    return (
      <div className="skills-box">
        <div className="header">
          <h2>Umiejętności</h2>
          <ReactSVG className="skills-box-whiteBoard" src={whiteBoard} />
        </div>
      </div>
    );
  }
}

export default Skills;
