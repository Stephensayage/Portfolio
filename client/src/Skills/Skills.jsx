import React from "react";
import "./Skills.css";
import Sass from "../assets/sass.png";
import Javascript from "../assets/javascript.png";
import HTMLIcon from "../assets/html-5.png";
import CSSIcon from "../assets/css.png";
import Github from "../assets/github (1).png";

export default function Skills() {
  return (
    <>
      <h2 className="skills-title">Skills & Tools</h2>
      <div className="skills-ctn">
        <div className="icon-ctn">
          <img className="icon-img" src={HTMLIcon} />
          <p className="skill-name">HTML</p>
        </div>

        <div className="icon-ctn">
          <img className="icon-img" src={CSSIcon} />
          <p className="skill-name">CSS</p>
        </div>

        <div className="icon-ctn">
          <img className="icon-img" src={Javascript} />
          <p className="skill-name">JavaScript</p>
        </div>

        <div className="icon-ctn">
          <img
            className="icon-img"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          />
          <p className="skill-name">React</p>
        </div>

        <div className="icon-ctn">
          <img
            className="icon-img"
            src="https://img.pngio.com/node-js-icon-183344-free-icons-library-nodejs-png-1600_1600.jpg"
          />
          <p className="skill-name">Node.js</p>
        </div>

        <div className="icon-ctn">
          <img className="icon-img" src="https://i.imgur.com/RFbFE1G.png" />
          <p className="skill-name">NPM</p>
        </div>

        <div className="icon-ctn">
          <img
            className="icon-img"
            src="https://railsware.com/blog/wp-content/uploads/2017/12/Ruby-2.0-Enumerable.png"
          />
          <p className="skill-name">Ruby</p>
        </div>

        <div className="icon-ctn">
          <img
            className="icon-img"
            src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png"
          />
          <p className="skill-name">Ruby on Rails</p>
        </div>

        <div className="icon-ctn">
          <img className="icon-img" src="https://i.imgur.com/SYJvo6c.png" />
          <p className="skill-name">PostgreSQL</p>
        </div>

        <div className="icon-ctn">
          <img className="icon-img" src="https://i.imgur.com/NNTL3fa.png" />
          <p className="skill-name">Express</p>
        </div>

        <div className="icon-ctn">
          <img
            className="icon-img"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
          />
          <p className="skill-name">Git</p>
        </div>

        <div className="icon-ctn">
          <img className="icon-img" src={Github} />
          <p className="skill-name">GitHub</p>
        </div>

        <div className="icon-ctn">
          <img className="icon-img" src={Sass} />
          <p className="skill-name">Sass</p>
        </div>
      </div>
    </>
  );
}
