import React from 'react'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import DiplomaInHotelBanner from './DiplomaInHotelBanner'
import DiplomaInHotelContent from './DiplomaInHotelContent'

const DiplomaInHotel = () => {
  return (
    <div>
        <Header />
        <DiplomaInHotelBanner />
        <DiplomaInHotelContent />
        <Footer />
    </div>
  )
}

export default DiplomaInHotel