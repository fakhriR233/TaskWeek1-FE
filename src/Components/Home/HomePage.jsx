import React from 'react'
import TopNavbar from '../Utility/TopNavbar'
import CarouselHome from './carouselHome'
import Movies from './Movies'

function HomePage() {
  return (
    <div className="App">
      <TopNavbar />
      <CarouselHome />
      <Movies />
    </div>
  )
}

export default HomePage