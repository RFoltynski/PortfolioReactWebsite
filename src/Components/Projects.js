import React, { Component } from "react";
import "../CSS/Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="project-box">
        <div className="header">
          <h2>Projekty</h2>
          <div className="project-box-cards">
            <div className="row">
              <div className="project-box-card" />
              <div className="project-box-card" />
            </div>
            <div className="row">
              <div className="project-box-card" />
              <div className="project-box-card" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
