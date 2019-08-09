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
                  <h3>Pellentesque ac velit eget turpis?</h3>
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
                  rozwin
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
                        Pellentesque ac velit eget turpis dictum pulvinar vitae
                        vel urna. Vestibulum at sagittis ante, vel facilisis
                        tortor.Pellentesque ac velit eget turpis dictum pulvinar
                        vitae vel urna. Vestibulum at sagittis ante, vel
                        facilisis tortor.
                      </div>
                    </animated.div>
                  ))
                }
              </Transition>
            </div>
            <div className="QA-box-question">
              <div className="row">
                <div className="QA-box-question-title">
                  <h3>Pellentesque ac velit eget turpis?</h3>
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
                  rozwin
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
                        Pellentesque ac velit eget turpis dictum pulvinar vitae
                        vel urna. Vestibulum at sagittis ante, vel facilisis
                        tortor.Pellentesque ac velit eget turpis dictum pulvinar
                        vitae vel urna. Vestibulum at sagittis ante, vel
                        facilisis tortor.
                      </div>
                    </animated.div>
                  ))
                }
              </Transition>
            </div>
            <div className="QA-box-question">
              <div className="row">
                <div className="QA-box-question-title">
                  <h3>Pellentesque ac velit eget turpis?</h3>
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
                  rozwin
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
                        Pellentesque ac velit eget turpis dictum pulvinar vitae
                        vel urna. Vestibulum at sagittis ante, vel facilisis
                        tortor.Pellentesque ac velit eget turpis dictum pulvinar
                        vitae vel urna. Vestibulum at sagittis ante, vel
                        facilisis tortor.
                      </div>
                    </animated.div>
                  ))
                }
              </Transition>
            </div>
            <div className="QA-box-question">
              <div className="row">
                <div className="QA-box-question-title">
                  <h3>Pellentesque ac velit eget turpis?</h3>
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
                  rozwin
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
                        Pellentesque ac velit eget turpis dictum pulvinar vitae
                        vel urna. Vestibulum at sagittis ante, vel facilisis
                        tortor.Pellentesque ac velit eget turpis dictum pulvinar
                        vitae vel urna. Vestibulum at sagittis ante, vel
                        facilisis tortor.
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
