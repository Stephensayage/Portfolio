import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <>
      <div id="about" className="about-me-ctn">
        <img className="profile-pic" src="https://i.imgur.com/NEE8UFv.jpg" />
        <h1 className="about-me-name">Stephen Sayage</h1>
        <p className="content-me">Software Engineer / Web Developer in New York, NY</p>
        <p className="profile-desc">I'm a passionate software engineer with a strong background in operations that has provided me with the attention to detail and efficiency it takes to be
        successful in the tech industry.I love building things and while hard engineering problems are often fun to tackle, I'm most attracted to solving real
customer problems with a business justification.</p>
      </div>
    </>
  )
}
