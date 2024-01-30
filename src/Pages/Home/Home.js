import React from 'react'
import Banner from './Sections/Banner'
import Solution from './Sections/Solution'
import Services from './Sections/Services'
import ScrollTxt1 from './Sections/ScrollTxt1'
import RecentWork from './Sections/RecentWork'
import Counter from './Sections/Counter'
import Team from './Sections/Team'
import Testimonial from './Sections/Testimonial'
import Award from './Sections/Award'
import ClientSlider from './Sections/ClientSlider'
import Video from './Sections/Video'
import Blog from './Sections/Blog'
import Contact from './Sections/Contact'

const Home = () => {
  return (
    <>
      <Banner />
      <Solution />
      <Services /> 
      <ScrollTxt1 />
      <RecentWork />
      <Counter />
      <Team />
      <Testimonial />
      <Award />
      <ClientSlider />
      <Video />
      <Blog />
      <Contact />
    </>
  )
}

export default Home
