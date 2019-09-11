import React, { Component } from "react";
import "./App.css";
import ScrollspyNav from "react-scrollspy-nav";
import Currently from "./Components/Currently";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import QA from "./Components/QA";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showDropDown: false
    };
  }
  dropDownMenu = event => {
    this.setState({
      showDropDown: !this.state.showDropDown
    });
  };

  render() {
    let boxClass = "app-dropDown-menu-off";
    let boxClassList = "app-navbar-li-drop-off";
    if (this.state.showDropDown) {
      boxClass = "app-dropDown-menu-on";
      boxClassList = "app-navbar-li-drop-on";
    }
    return (
      <div className="App">
        <div>
          <button
            className="app-dropDown-menu-button"
            onClick={() => this.dropDownMenu(event)}
          />
          <div className={boxClass}>
            <div className={boxClassList}>
              <li className="app-navbar-li">
                <a href="#section_1D" onClick={() => this.dropDownMenu(event)}>
                  <span>Cześć!</span>
                </a>
              </li>
              <li className="app-navbar-li">
                <a href="#section_2D" onClick={() => this.dropDownMenu(event)}>
                  <span>Umiejętności</span>
                </a>
              </li>
              <li className="app-navbar-li">
                <a href="#section_3D" onClick={() => this.dropDownMenu(event)}>
                  <span>Projekty</span>
                </a>
              </li>
              <li className="app-navbar-li">
                <a href="#section_4D" onClick={() => this.dropDownMenu(event)}>
                  <span>Q&A</span>
                </a>
              </li>
            </div>
          </div>
          <div>
            <button className="app-cv-button">
              <a href={"http://r-foltynski.pl/RFCV.pdf"}>CV</a>
            </button>
            <button className="app-git-button">
              <a href={"https://github.com/RFoltynski"} target="_blank">
                Git
              </a>
            </button>
            <ScrollspyNav
              scrollTargetIds={[
                "section_1",
                "section_2",
                "section_3",
                "section_4",
                "section_5"
              ]}
              activeNavClass="is-active"
              scrollDuration="1000"
              headerBackground="false"
            >
              <div className="app-navbar">
                <li className="app-navbar-li">
                  <a href="#section_1">
                    <span>Cześć!</span>
                  </a>
                </li>
                <li className="app-navbar-li">
                  <a href="#section_2">
                    <span>Umiejętności</span>
                  </a>
                </li>
                <li className="app-navbar-li">
                  <a href="#section_3">
                    <span>Projekty</span>
                  </a>
                </li>
                <li className="app-navbar-li">
                  <a href="#section_4">
                    <span>Q&A</span>
                  </a>
                </li>
              </div>
            </ScrollspyNav>
          </div>

          <div>
            <div id="section_1">
              <div id="section_1D" />
              <Currently />
            </div>
            <div id="section_2">
              <div id="section_2D" />
              <Skills />
            </div>
            <div id="section_3">
              <div id="section_3D" />
              <Projects />
            </div>
            <div id="section_4">
              <div id="section_4D" />
              <QA />
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default App;
