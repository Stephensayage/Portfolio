import React from 'react'
import { Navbar, Nav, Row, Col, Image } from 'react-bootstrap'
import './Header.css'
import '../media.css'

export default function Header() {
  return (
    <>
      <nav className="nav-bar">
        <div className="title-ctn">
          <h6 href="/" className="my-name">Stephen Sayage</h6>
          <div className="social-icons-ctn">

            <div className="github-ctn" >
              <a href="https://www.linkedin.com/in/stephen-sayage/" target="_blank"><img src="https://image.flaticon.com/icons/svg/1384/1384014.svg" className="social-icon linkedin" /></a>
            </div>
            <div className="github-ctn">
              <a href="https://github.com/Stephensayage" target="_blank"><img src="https://image.flaticon.com/icons/svg/733/733609.svg" className="social-icon github" /></a>
            </div>

          </div>
        </div>
        <Nav className="right-links">
          <Nav.Link href="#about" className="nav-link">About Me</Nav.Link>
          <a href="#projects" className="nav-link">Projects</a>
          <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          <Nav.Link href="https://docdro.id/vBubycG" target="_blank" className="nav-link">Resume</Nav.Link>
        </Nav>
      </nav>

    </>
  )
}
