import React from 'react'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import PastriesBanner from './PastriesBanner'
import PastriesDiplomaContent from './PastriesDiplomaContent'

const Patisserie = () => {
  return (
    <div>
        <Header />
        <PastriesBanner />
        <PastriesDiplomaContent />
        <Footer />
    </div>
  )
}

export default Patisserie