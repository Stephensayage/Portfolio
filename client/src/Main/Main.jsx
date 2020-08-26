import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'


export default function Main() {
  return (
    <>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
