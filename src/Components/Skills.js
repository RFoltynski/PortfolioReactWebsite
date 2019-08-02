import React, { Component } from "react";
import ReactSVG from "react-svg";
import "../CSS/Skills.css";
import whiteBoard from "../Image/whiteBoard.svg";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      showReact: false,
      showCSS: false,
      showRails: false
    };
  }

  showReact = event => {
    this.setState({
      showReact: !this.state.showReact,
      showCSS: false,
      showRails: false
    });
  };
  showCSS = event => {
    this.setState({
      showCSS: !this.state.showCSS,
      showRails: false,
      showReact: false
    });
  };
  showRails = event => {
    this.setState({
      showRails: !this.state.showRails,
      showReact: false,
      showCSS: false
    });
  };

  render() {
    return (
      <div className="skills-box">
        <div className="header">
          <h2>Umiejętności</h2>
          <div className="button-group">
            <button
              className={
                !this.state.showReact ? "skills-button" : "skills-button-color"
              }
              onClick={this.showReact}
            >
              React.js
            </button>
            <button
              className={
                !this.state.showCSS ? "skills-button" : "skills-button-color"
              }
              onClick={this.showCSS}
            >
              CSS
            </button>
            <button
              className={
                !this.state.showRails ? "skills-button" : "skills-button-color"
              }
              onClick={this.showRails}
            >
              RubyOnRails
            </button>
          </div>
          <div
            className={!this.state.showReact ? "skills-hide" : "skills-show"}
          />
          <div
            className={!this.state.showCSS ? "skills-hide" : "skills-show"}
          />
          <div
            className={!this.state.showRails ? "skills-hide" : "skills-show"}
          />
        </div>
      </div>
    );
  }
}

export default Skills;
