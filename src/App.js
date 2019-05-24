import React, { Component } from "react";
import "./App.css";
import ScrollspyNav from "react-scrollspy-nav";
import Past from "./Components/Past";
import Future from "./Components/Future";
import Project1 from "./Components/Project1";
import Project2 from "./Components/Project2";
import Project3 from "./Components/Project3";

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
                  <span>Teraz</span>
                </a>
              </li>
              <li className="app-navbar-li">
                <a href="#section_2D" onClick={() => this.dropDownMenu(event)}>
                  <span>Projekt pierwszy</span>
                </a>
              </li>
              <li className="app-navbar-li">
                <a href="#section_3D" onClick={() => this.dropDownMenu(event)}>
                  <span>Projekt drugi</span>
                </a>
              </li>
              <li className="app-navbar-li">
                <a href="#section_4D" onClick={() => this.dropDownMenu(event)}>
                  <span>Projekt trzeci</span>
                </a>
              </li>
              <li className="app-navbar-li">
                <a href="#section_5D" onClick={() => this.dropDownMenu(event)}>
                  <span>Przyszłość</span>
                </a>
              </li>
            </div>
          </div>
          <div>
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
                    <span>Teraz</span>
                  </a>
                </li>
                <li className="app-navbar-li">
                  <a href="#section_2">
                    <span>Projekt pierwszy</span>
                  </a>
                </li>
                <li className="app-navbar-li">
                  <a href="#section_3">
                    <span>Projekt drugi</span>
                  </a>
                </li>
                <li className="app-navbar-li">
                  <a href="#section_4">
                    <span>Projekt trzeci</span>
                  </a>
                </li>
                <li className="app-navbar-li">
                  <a href="#section_5">
                    <span>Przyszłość</span>
                  </a>
                </li>
              </div>
            </ScrollspyNav>
          </div>

          <div>
            <div id="section_1">
              <div id="section_1D" />
              <Past />
            </div>
            <div id="section_2">
              <div id="section_2D" />
              <Project1 id="section_2D" />
            </div>
            <div id="section_3">
              <div id="section_3D" />
              <Project2 />
            </div>
            <div id="section_4">
              <div id="section_4D" />
              <Project3 />
            </div>
            <div id="section_5">
              <div id="section_5D" />
              <Future />
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default App;
