import React from 'react'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import BlogBanner from './BlogBanner'
import BlogContent from './BlogContent'

const Blog = () => {
  return (
    <div>
        <Header />
        <BlogBanner />
        <BlogContent />
        <Footer />
    </div>
  )
}

export default Blog