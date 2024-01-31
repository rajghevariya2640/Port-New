import React from 'react'
import Award from './Sections/Award'
import Banner from './Sections/Banner'
import Blog from './Sections/Blog'
import Contact from './Sections/Contact'
import Counter from './Sections/Counter'
import HomeClient from './Sections/HomeClient'
import HomeTestimonial from './Sections/HomeTestimonial'
import PrimaryTxtScroll from './Sections/PrimaryTxtScroll'
import RecentWork from './Sections/RecentWork'
import Services from './Sections/Services'
import Solution from './Sections/Solution'
import StrokeTxtScroll from './Sections/StrokeTxtScroll'
import Team from './Sections/Team'
import Video from './Sections/Video'

const Home = () => {
  return (
    <>
      <Banner />
      <Solution />
      <Services /> 
      <StrokeTxtScroll />
      <RecentWork />
      <Counter />
      <Team />
      <HomeTestimonial />
      <Award />
      <HomeClient/>
      <Video />
      <Blog />
      <PrimaryTxtScroll />
      <Contact />
    </>
  )
}

export default Home
