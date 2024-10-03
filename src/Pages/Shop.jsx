import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Banner from '../Components/Banner/Banner'
import Banner2 from '../Components/Banner2/Banner2'


const Shop = () => {
  return (
    <div>
      <Banner/>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
      <Banner2/>
      
    </div>
  )
}

export default Shop
