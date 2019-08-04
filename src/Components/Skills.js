import React, { Component } from "react";
import ReactSVG from "react-svg";
import "../CSS/Skills.css";
import CssSkill from "../Components/skills/css";
import ReactSkill from "../Components/skills/react";
import RailsSkill from "../Components/skills/rails";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      render: "showReact",
      showReact: true,
      showCSS: false,
      showRails: false
    };
  }
  showReact = event => {
    this.handleClick("showReact");
    this.setState({
      showReact: true,
      showCSS: false,
      showRails: false
    });
  };
  showCSS = event => {
    this.handleClick("showCSS");
    this.setState({
      showCSS: true,
      showRails: false,
      showReact: false
    });
  };
  showRails = event => {
    this.handleClick("showRails");
    this.setState({
      showRails: true,
      showReact: false,
      showCSS: false
    });
  };
  handleClick = (compName, e) => {
    this.setState({
      render: compName
    });
  };
  _renderSubComp() {
    switch (this.state.render) {
      case "showReact":
        return <ReactSkill />;
      case "showCSS":
        return <CssSkill />;
      case "showRails":
        return <RailsSkill />;
    }
  }

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
          {this.state.render === "" ? <ReactSkill /> : this._renderSubComp()}
        </div>
      </div>
    );
  }
}

export default Skills;
