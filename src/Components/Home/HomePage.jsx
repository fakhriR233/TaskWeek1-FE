import React from 'react'
import TopNavbar from '../Utility/TopNavbar'
import CarouselHome from './carouselHome'
// import Movies from './Movies'
import CardMovies from '../Movies/CardMovies'
import CardTVShows from '../TVShows/CardTVShows'

function HomePage() {
  return (
    <div className="App">
      <TopNavbar />
      <CarouselHome />
      <CardMovies />
      <CardTVShows/>
    </div>
  )
}

export default HomePage