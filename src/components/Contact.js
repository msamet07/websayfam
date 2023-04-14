import React from "react";
import { githubLink } from "../content/content";
import { linkedlnLink } from "../content/content";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contactContainer">
        <footer>
          <h3>
              We are stronger together.
            <br />
              So let's start!
          </h3>
          <div className="contactInfo">
            <p>
              <a>👉  </a>
              <a className="email" href="mailto:m.samet07@hotmail.com">
              m.samet07@hotmail.com
              </a>
            </p>
            <div className="website">
              <a className="personalblog"> Personal Blog</a>
              <a className="github" href={githubLink} target="_blank">
                Github
              </a>
              <a className="linkedln" href={linkedlnLink} target="_blank">
                Linkedln
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
