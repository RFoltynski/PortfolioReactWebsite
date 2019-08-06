import React, { Component } from "react";
import "../CSS/Projects.css";
import ReactCardFlip from "react-card-flip";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      isFlipped1: false,
      isFlipped2: false
    };
  }

  render() {
    return (
      <div className="project-box">
        <div className="header">
          <h2>Projekty</h2>
          <div className="project-box-cards">
            <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div className="project-box-card" key="front">
                <div className="project-box-card-img" />
                <div className="project-box-title"> Parafia Kiełczygłów </div>
                <div className="project-box-links">
                  {" "}
                  <a>Git</a> <a>Live</a>{" "}
                  <a
                    className="project-box-links-a"
                    onClick={() =>
                      this.setState({
                        isFlipped: !this.state.isFlipped
                      })
                    }
                  >
                    Obróć
                  </a>
                </div>
              </div>

              <div className="project-box-card" key="back">
                <div className="project-box-title">
                  {" "}
                  Pellentesque ac velit eget turpis dictum pulvinar vitae vel
                  urna. Vestibulum at sagittis ante, vel facilisis tortor.{" "}
                </div>
                <a
                  className="project-box-links-a"
                  onClick={() =>
                    this.setState({
                      isFlipped: !this.state.isFlipped
                    })
                  }
                >
                  Obróć
                </a>
              </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={this.state.isFlipped1}>
              <div className="project-box-card" key="front">
                <div className="project-box-card-img" />
                <div className="project-box-title"> Binar Games </div>
                <div className="project-box-links">
                  {" "}
                  <a>Git</a> <a>Live</a>{" "}
                  <a
                    className="project-box-links-a"
                    onClick={() =>
                      this.setState({
                        isFlipped1: !this.state.isFlipped1
                      })
                    }
                  >
                    Obróć
                  </a>
                </div>
              </div>

              <div className="project-box-card" key="back">
                <div className="project-box-title">
                  {" "}
                  Pellentesque ac velit eget turpis dictum pulvinar vitae vel
                  urna. Vestibulum at sagittis ante, vel facilisis tortor.{" "}
                </div>
                <a
                  className="project-box-links-a"
                  onClick={() =>
                    this.setState({
                      isFlipped1: !this.state.isFlipped1
                    })
                  }
                >
                  Obróć
                </a>
              </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={this.state.isFlipped2}>
              <div className="project-box-card" key="front">
                <div className="project-box-card-img" />
                <div className="project-box-title"> To do list </div>
                <div className="project-box-links">
                  {" "}
                  <a>Git</a> <a>Live</a>{" "}
                  <a
                    className="project-box-links-a"
                    onClick={() =>
                      this.setState({
                        isFlipped2: !this.state.isFlipped2
                      })
                    }
                  >
                    Obróć
                  </a>
                </div>
              </div>

              <div className="project-box-card" key="back">
                <div className="project-box-title">
                  {" "}
                  Pellentesque ac velit eget turpis dictum pulvinar vitae vel
                  urna. Vestibulum at sagittis ante, vel facilisis tortor.{" "}
                </div>
                <a
                  className="project-box-links-a"
                  onClick={() =>
                    this.setState({
                      isFlipped2: !this.state.isFlipped2
                    })
                  }
                >
                  Obróć
                </a>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    );
  }
}
