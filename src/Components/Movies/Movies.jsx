import React from 'react'
import TopNavbar from '../Utility/TopNavbar'
import CardMovies from './CardMovies'
import CarouselMovies from './CarouselMovies'


function Movies() {
  return (
    <>
      <TopNavbar/>
      <CarouselMovies/>
      <CardMovies/>
    </>
  )
}

export default Movies