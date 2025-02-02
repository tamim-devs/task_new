import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default App