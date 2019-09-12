import React, { Component } from "react";
import { Spring, Transition, animated } from "react-spring/renderprops.cjs";
import "../CSS/QA.css";

class QA extends Component {
  state = {
    showQuestion1: false,
    showQuestion2: false,
    showQuestion3: false,
    showQuestion4: false
  };

  render() {
    return (
      <div className="QA-box">
        <div className="header">
          <h2>Q&A</h2>
          <div className="QA-box-questions">
            <div className="QA-box-question">
              <div className="row">
                <div className="QA-box-question-title">
                  <h3>Dlaczego zdecydowałem się na zminę kierunku studiów?</h3>
                </div>
                <button
                  className={
                    this.state.showQuestion1
                      ? "QA-box-question-button-on"
                      : "QA-box-question-button-off"
                  }
                  onClick={() =>
                    this.setState({
                      showQuestion1: !this.state.showQuestion1
                    })
                  }
                >
                  {!this.state.showQuestion1 ? (
                    <div className={"arrowOverlayDown"}>
                      <div className={"arrow"}></div>
                    </div>
                  ) : (
                    <div className={"arrowOverlayUp"}>
                      <div className={"arrow"}></div>
                    </div>
                  )}
                </button>
              </div>
              <Transition
                native
                items={this.state.showQuestion1}
                from={{ opacity: 0, marginTop: -100 }}
                enter={{ opacity: 1, marginTop: 0 }}
                leave={{ opacity: 0, marginTop: -100 }}
              >
                {show =>
                  show &&
                  (props => (
                    <animated.div style={props}>
                      <div className="QA-box-question-answer">
                        Poniewać lubię tworzyć i uczyć się nowych rzeczy. A
                        logistyka, zarówno jako kierunek studiów jak i praca (na
                        praktykach) nie dawała takich możliowści.
                      </div>
                    </animated.div>
                  ))
                }
              </Transition>
            </div>
            <div className="QA-box-question">
              <div className="row">
                <div className="QA-box-question-title">
                  <h3>Od kiedy programuję?</h3>
                </div>
                <button
                  className={
                    this.state.showQuestion2
                      ? "QA-box-question-button-on"
                      : "QA-box-question-button-off"
                  }
                  onClick={() =>
                    this.setState({
                      showQuestion2: !this.state.showQuestion2
                    })
                  }
                >
                  {!this.state.showQuestion2 ? (
                    <div className={"arrowOverlayDown"}>
                      <div className={"arrow"}></div>
                    </div>
                  ) : (
                    <div className={"arrowOverlayUp"}>
                      <div className={"arrow"}></div>
                    </div>
                  )}
                </button>
              </div>
              <Transition
                native
                items={this.state.showQuestion2}
                from={{ opacity: 0, marginTop: -100 }}
                enter={{ opacity: 1, marginTop: 0 }}
                leave={{ opacity: 0, marginTop: -100 }}
              >
                {show =>
                  show &&
                  (props => (
                    <animated.div style={props}>
                      <div className="QA-box-question-answer">
                        Programować zacząlem na studiach pod koniec 2015 roku, i
                        była to głównie JAVA. Natomiast moja przygoda z web
                        developmentem rozpoczeła się rok poźniej (mniej więcej
                        początek 2017) od przygotowania strony na zajęcia z
                        grafiki komputerowej.
                      </div>
                    </animated.div>
                  ))
                }
              </Transition>
            </div>
            <div className="QA-box-question">
              <div className="row">
                <div className="QA-box-question-title">
                  <h3>Czym była spowodowana przerwa po studiach?</h3>
                </div>
                <button
                  className={
                    this.state.showQuestion3
                      ? "QA-box-question-button-on"
                      : "QA-box-question-button-off"
                  }
                  onClick={() =>
                    this.setState({
                      showQuestion3: !this.state.showQuestion3
                    })
                  }
                >
                  {!this.state.showQuestion3 ? (
                    <div className={"arrowOverlayDown"}>
                      <div className={"arrow"}></div>
                    </div>
                  ) : (
                    <div className={"arrowOverlayUp"}>
                      <div className={"arrow"}></div>
                    </div>
                  )}
                </button>
              </div>
              <Transition
                native
                items={this.state.showQuestion3}
                from={{ opacity: 0, marginTop: -100 }}
                enter={{ opacity: 1, marginTop: 0 }}
                leave={{ opacity: 0, marginTop: -100 }}
              >
                {show =>
                  show &&
                  (props => (
                    <animated.div style={props}>
                      <div className="QA-box-question-answer">
                        Pod koniec studiów magisterskich sytuacja rodzinna
                        skomplikowała się i konieczne było bym wrócił do domu
                        rodzinnego na wieś.
                      </div>
                    </animated.div>
                  ))
                }
              </Transition>
            </div>
            <div className="QA-box-question">
              <div className="row">
                <div className="QA-box-question-title">
                  <h3>Czym chciałbym się zajmować?</h3>
                </div>
                <button
                  className={
                    this.state.showQuestion4
                      ? "QA-box-question-button-on"
                      : "QA-box-question-button-off"
                  }
                  onClick={() =>
                    this.setState({
                      showQuestion4: !this.state.showQuestion4
                    })
                  }
                >
                  {!this.state.showQuestion4 ? (
                    <div className={"arrowOverlayDown"}>
                      <div className={"arrow"}></div>
                    </div>
                  ) : (
                    <div className={"arrowOverlayUp"}>
                      <div className={"arrow"}></div>
                    </div>
                  )}
                </button>
              </div>
              <Transition
                native
                items={this.state.showQuestion4}
                from={{ opacity: 0, marginTop: -100 }}
                enter={{ opacity: 1, marginTop: 0 }}
                leave={{ opacity: 0, marginTop: -100 }}
              >
                {show =>
                  show &&
                  (props => (
                    <animated.div style={props}>
                      <div className="QA-box-question-answer">
                        Zajmowałem się do tej pory głównie front endem (html,
                        css, JS, REACT.js). Lecz od niedawna korzystałem również
                        z Ruby on Rails na back endzie, ponieważ chciałbym
                        tworzyć aplikacje webowe kompleksowo.
                      </div>
                    </animated.div>
                  ))
                }
              </Transition>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QA;
