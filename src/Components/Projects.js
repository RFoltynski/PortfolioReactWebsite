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
                <div className="project-box-card-img project-img-1" />
                <div className="project-box-title"> Parafia Kiełczygłów </div>
                <div className="project-box-links">
                  {" "}
                  <a
                    href={
                      "https://github.com/RFoltynski/Parafia-Kielczyglow-React-Rails"
                    }
                    target="_blank"
                  >
                    Git
                  </a>{" "}
                  <a href={"http://165.22.19.149/"} target="_blank">
                    Live
                  </a>{" "}
                  <a
                    className="project-box-links-a"
                    onClick={() =>
                      this.setState({
                        isFlipped: !this.state.isFlipped
                      })
                    }
                  >
                    Opis
                  </a>
                </div>
              </div>

              <div className="project-box-card" key="back">
                <div className="project-box-title">
                  {" "}
                  Strona została wykonana przy użyciu Ruby on Rails oraz
                  React.js
                  <br />
                  <br />
                  Strona ma możliwość dodawania postów oraz intencji mszy
                  świętych z poziomu panelu admina.
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
                <div className="project-box-card-img project-img-2" />
                <div className="project-box-title"> Binar Games </div>
                <div className="project-box-links">
                  {" "}
                  <a
                    href={"https://github.com/karczewskiPiotr/binar-games"}
                    target="_blank"
                  >
                    Git
                  </a>{" "}
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
                  Aplikacja wykonana w ramach letnich praktyk w firmie
                  BinarApps.
                  <br />
                  <br />
                  Aplikacja zrzeszająca fanów gier planszowych.
                  <br />
                  <br />
                  Użytkownik ma możliowść rejestracji, dodawania gier oraz
                  tworzenia eventów
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
                <div className="project-box-card-img project-img-3" />
                <div className="project-box-title"> To do list </div>
                <div className="project-box-links">
                  {" "}
                  <a
                    href={"https://github.com/RFoltynski/ToDo"}
                    target={"_blank"}
                  >
                    Git
                  </a>{" "}
                  <a
                    href={"https://todolist-a7a5f.firebaseapp.com"}
                    target={"_blank"}
                  >
                    Live
                  </a>{" "}
                  <a
                    className="project-box-links-a"
                    onClick={() =>
                      this.setState({
                        isFlipped2: !this.state.isFlipped2
                      })
                    }
                  >
                    Opis
                  </a>
                </div>
              </div>

              <div className="project-box-card" key="back">
                <div className="project-box-title">
                  {" "}
                  Aplikacja To Do.
                  <br />
                  <br />
                  Aplikacja wykonana przy pomocy React.js oraz Firebase.
                </div>
                <a
                  className="project-box-links-a"
                  onClick={() =>
                    this.setState({
                      isFlipped2: !this.state.isFlipped2
                    })
                  }
                >
                  Opis
                </a>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    );
  }
}
