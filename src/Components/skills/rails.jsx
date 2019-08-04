import React, { Component } from "react";
import "../../CSS/Skills.css";
import { Spring } from "react-spring/renderprops.cjs";

class RailsSkill extends Component {
  render() {
    return (
      <div>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 1000 }}
        >
          {props => (
            <div style={props} className="react-box">
              <h1>Component 221</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus nobis adipisci eum minima deserunt at porro, veritatis
                officia commodi itaque voluptates vel suscipit assumenda soluta
                ipsa voluptatibus laudantium labore harum?
              </p>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default RailsSkill;
