import React from 'react'
import Banner from './Sections/Banner'
import Solution from './Sections/Solution'
import Services from './Sections/Services'
import StrokeTxtScroll from './Sections/StrokeTxtScroll'
import RecentWork from './Sections/RecentWork'
import Counter from './Sections/Counter'
import Team from './Sections/Team'
import Award from './Sections/Award'
import ClientSlider from './Sections/ClientSlider'
import Video from './Sections/Video'
import Blog from './Sections/Blog'
import Contact from './Sections/Contact'
import PrimaryTxtScroll from './Sections/PrimaryTxtScroll'
import HomeTestimonial from './Sections/HomeTestimonial'

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
      <ClientSlider />
      <Video />
      <Blog />
      <PrimaryTxtScroll />
      <Contact />
    </>
  )
}

export default Home
