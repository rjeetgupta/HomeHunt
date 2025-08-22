import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Featured from './components/featured/Featured'
import Recent from './components/recent/Recent'
import Explore from './components/Explore/Explore'
import Agents from './components/agents/Agents'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <Recent />
      <Explore />
      <Agents />
      <Footer />
    </div>
  )
}

export default App