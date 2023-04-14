import React from "react";
import javasLogo from "../content/logo/js-logo.png";
import reactLogo from "../content/logo/react-logo.png";
import reduxLogo from "../content/logo/redux-logo.png";
import cssLogo from "../content/logo/css-logo.png";
import htmlLogo from "../content/logo/html-logo.png";
import vsCode from "../content/logo/vscode-logo.png";

const Skills = () => {
  return (
    <div className="skills-ym" id="skills">
      <div className="skills">
        <div>
          {" "}
          <h2>Skills</h2>
        </div>
        <div className="skills-comp">
          <div className="javascript">
            <img src={javasLogo} />
            <p>JAVASCRİPT</p>
          </div>
          <div className="react">
            <img src={reactLogo} />
            <p>REACT</p>
          </div>
          <div className="redux">
            <img src={reduxLogo} />
            <p>REDUX</p>
          </div>

          <div className="css">
            <img src={cssLogo} />
            <p>CSS</p>
          </div>
          <div className="html">
            <img src={htmlLogo} />
            <p>HTML</p>
          </div>
          <div className="vscode">
            <img src={vsCode} />
            <p>VSCODE</p>
          </div>
        </div>
      </div>
      <div className="lineeContainer">
        <div className="line2"></div>
      </div>
    </div>
  );
};

export default Skills;
