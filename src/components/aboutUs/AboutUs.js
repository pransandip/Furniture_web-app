import React from 'react'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import AboutUsBanner from './AboutUsBanner'
import AboutUsContent from './AboutUsContent'

const AboutUs = () => {
    return (
        <div>
            <Header />
            <AboutUsBanner />
            <AboutUsContent />
            <Footer />
        </div>
    )
}

export default AboutUs