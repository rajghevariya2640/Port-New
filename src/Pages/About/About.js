import React from 'react'
import AboutBanner from './Sections/AboutBanner'
import AboutSolution from './Sections/AboutSolution'
import Skills from './Sections/Skills'
import Value from './Sections/Value'
import AboutCounter from './Sections/AboutCounter'
import AboutTestimonial from './Sections/AboutTestimonial'
import AboutTeam from './Sections/AboutTeam'
import AboutAward from './Sections/AboutAward'
import AboutClient from './Sections/AboutClient'
import AboutVideo from './Sections/AboutVideo'
import AboutScrollTxt from './Sections/AboutScrollTxt'
import AboutContact from './Sections/AboutContact'

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutSolution />
      <Skills />
      <Value />
      <AboutCounter />
      <AboutTestimonial />
      <AboutTeam />
      <AboutAward />
      <AboutClient />
      <AboutVideo />
      <AboutScrollTxt />
      <AboutContact/>
    </div>
  )
}

export default About
