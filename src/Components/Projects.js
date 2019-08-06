import React, { Component } from "react";
import "../CSS/Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="project-box">
        <div className="header">
          <h2>Projekty</h2>
          <div className="project-box-cards">
            <div className="project-box-card">
              <div className="project-box-card-img" />
              <div className="projet-box-title"> Parafia Kiełczygłów </div>
              <div className="projet-box-links">
                {" "}
                <a>Git</a> <a>Live</a> <a>Obróć</a>
              </div>
            </div>
            <div className="project-box-card" />
            <div className="project-box-card" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
