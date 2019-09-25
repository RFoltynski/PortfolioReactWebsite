import React, { Component } from "react";
import "../CSS/Skills.css";

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
  // showReact = event => {
  //   this.handleClick("showReact");
  //   this.setState({
  //     showReact: true,
  //     showCSS: false,
  //     showRails: false
  //   });
  // };
  // showCSS = event => {
  //   this.handleClick("showCSS");
  //   this.setState({
  //     showCSS: true,
  //     showRails: false,
  //     showReact: false
  //   });
  // };
  // showRails = event => {
  //   this.handleClick("showRails");
  //   this.setState({
  //     showRails: true,
  //     showReact: false,
  //     showCSS: false
  //   });
  // };
  // handleClick = (compName, e) => {
  //   this.setState({
  //     render: compName
  //   });
  // };
  // _renderSubComp() {
  //   switch (this.state.render) {
  //     case "showReact":
  //       return <ReactSkill />;
  //     case "showCSS":
  //       return <CssSkill />;
  //     case "showRails":
  //       return <RailsSkill />;
  //   }
  // }

  render() {
    return (
      <div className="skills-box">
        <div className="header">
          <h2>Technologie</h2>
          <p>z których korzystam...</p>
          <div className="skill-box-content">
            <img
              src={"./Images/Skills/CSS3_and_HTML5.svg"}
              className="skill-logo"
            />
            <img
              src={"./Images/Skills/Ruby_on_Rails.svg"}
              className="skill-logo"
            />{" "}
            <img
              src={"./Images/Skills/react-logo.svg"}
              className="skill-logo"
            />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
