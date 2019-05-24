import React, { Component } from "react";
import "./App.css";
import ScrollspyNav from "react-scrollspy-nav";
import Past from "./Components/Past";
import Future from "./Components/Future";
import Project1 from "./Components/Project1";
import Project2 from "./Components/Project2";
import Project3 from "./Components/Project3";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <button className="app-dropDown-menu" />
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

          <div ref={this.myRef}>
            <div id="section_1">
              <Past />
            </div>
            <div id="section_2">
              <Project1 />
            </div>
            <div id="section_3">
              <Project2 />
            </div>
            <div id="section_4">
              <Project3 />
            </div>
            <div id="section_5">
              <Future />
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default App;
