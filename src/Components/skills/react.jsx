import React, { Component } from "react";
import ReactSVG from "react-svg";

import "../../CSS/Skills.css";
import { Spring } from "react-spring/renderprops.cjs";

class ReactSkill extends Component {
  render() {
    return (
      <div>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 1000 }}
        >
          {props => (
            <div style={props} className="skill-box-content">
              {" "}
              <div className="skill-box-content-text">
                <div className="skill-box-content-text-p">dsa fadsf ds </div>
                <div className="skill-box-content-text-p">
                  asdfasd dsfds sadf
                </div>
                <div className="skill-box-content-text-p">dsa fadsf ds </div>
                <div className="skill-box-content-text-p">
                  asdfasd dsfds sadf
                </div>
                <div className="skill-box-content-text-p">dsf sdfasdf dsf </div>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default ReactSkill;
