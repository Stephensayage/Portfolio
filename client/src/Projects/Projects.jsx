import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'


export default function Projects() {
  return (
    <div id="projects" className="projects-ctn">
      <h3 className="project-title">My Web Apps</h3>
      <div className="cards-ctn">
        <div className="webshop pro-div">
          <div className="img-ctn"><img className="project-img" src="https://i.imgur.com/rGLohkA.png" /></div>
          <div className="button-ctn">
            <p className="app-name">The WebShop</p>
          </div>
          <p className="pro-content">The WebShop is a Marvel based ecommerce site. Customers can browse the site based off their favorite version of Spider-Man/Spider-Girl and add comics to their cart.</p>
          <div className="tech-div">
            <h2 className="tech">Tech Stack:</h2>
            <ul className="tech-list">
              <li className="tech-item">React.js</li>
              <li className="tech-item">Axios</li>
              <li className="tech-item">RESTful API</li>
              <li className="tech-item">Node.js</li>
              <li className="tech-item"></li>
              <li className="tech-item"></li>
            </ul>
          </div>
          <div className="link-ctn">
            <a href="https://github.com/Stephensayage/Web-Shop" target="_blank">
              <object type="image/svg+xml" data="https://image.flaticon.com/icons/svg/2111/2111425.svg" className="link-icon github-link">
                Github
           </object>
            </a>
            <a href="https://thewebshop.netlify.app/" target="_blank">
              <object type="image/svg+xml" data="https://image.flaticon.com/icons/svg/25/25284.svg" className="link-icon site-link">
                Link to site
           </object>
            </a>
          </div>
        </div>

        <div className="breathe pro-div">
          <div className="img-ctn">
            <video loop autoPlay muted className="project-img">
              <source className="project-img" src="https://res.cloudinary.com/dvygzwqy0/video/upload/v1598041623/breathe_d7y58k.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="button-ctn">
            <p className="app-name">Breathe</p>
          </div>
          <p className="pro-content">Breathe is a mental health match-making application. Users will have the abililty to create an account and find an app, or medical professional based on their filtered parameters.</p>
          <div className="tech-div">
            <h2 className="tech">Tech Stack:</h2>
            <ul className="tech-list">
              <li className="tech-item">React.js</li>
              <li className="tech-item">MondgoDB</li>
              <li className="tech-item">Morgan</li>
              <li className="tech-item">Node.js</li>
              <li className="tech-item">Express.js</li>
              <li className="tech-item"></li>
            </ul>
          </div>
          <div className="link-ctn">
            <a href="https://github.com/Stephensayage/Breathe" target="_blank">
              <object type="image/svg+xml" data="https://image.flaticon.com/icons/svg/2111/2111425.svg" className="link-icon github-link">
                Github
           </object>
            </a>
            <a href="https://breathe-app-mcks.netlify.app/" target="_blank">
              <object type="image/svg+xml" data="https://image.flaticon.com/icons/svg/25/25284.svg" className="link-icon site-link">
                Link to site
           </object>
            </a>
          </div>
        </div>

        <div className="bluetail pro-div">
          <div className="img-ctn"><img className="project-img bluetail" src="https://i.imgur.com/ceLyAwB.png" /></div>
          <div className="button-ctn">
            <p className="app-name">Bluetail</p>
          </div>
          <p className="pro-content">Bluetail is a realty listing website for tiny homes. Agents can post their listings online and connect to other agents.</p>
          <div className="tech-div">
            <h2 className="tech">Tech Stack:</h2>
            <ul className="tech-list">
              <li className="tech-item">React.js</li>
              <li className="tech-item">Ruby on Rails</li>
              <li className="tech-item">PostgreSQL</li>
              <li className="tech-item">React Bootstrap</li>
              <li className="tech-item">bcrypt</li>
              <li className="tech-item">JSON Web Token</li>
            </ul>
          </div>
          <div className="link-ctn">

            <a href="https://github.com/Stephensayage/Bluetail" target="_blank">
              <object type="image/svg+xml" data="https://image.flaticon.com/icons/svg/2111/2111425.svg" className="link-icon github-link">
                Github
            </object>
            </a>
            <a href="https://bluetail.netlify.app" target="_blank">

              <object type="image/svg+xml" data="https://image.flaticon.com/icons/svg/25/25284.svg" className="link-icon site-link">
                Link to site
           </object>

            </a>
          </div>
        </div>


      </div>
    </div >
  )
}
{/* <img className="project-img" src="https://i.imgur.com/JM2DkNg.png" /> */ }