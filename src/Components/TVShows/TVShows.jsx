import React, { Component } from 'react'
import TopNavbar from '../Utility/TopNavbar'
import CardTVShows from './CardTVShows'
import CarouselTVShows from './CarouselTVShows'

export default class TVShows extends Component {
  render() {
    return (
    <div>
      <TopNavbar/> 
      <CarouselTVShows/>
      <CardTVShows/>
    </div>
    )
  }
}
