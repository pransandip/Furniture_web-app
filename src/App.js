import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/Stylesheets/style.css'
import './assets/Stylesheets/responsive.css'
import Home from './components/home/Home';
import ProgramsOffered from './components/ProgramsOffered/ProgramsOffered';
import Patisserie from './components/Patisserie/Patisserie';
import BarTending from './components/BarTending/BarTending';
import Barista from './components/barista/Barista';
import HouseKeeping from './components/houseKeeping/HouseKeeping';
import AboutUs from './components/aboutUs/AboutUs';
import WhyChooseUs from './components/whyChooseUs/WhyChooseUs';
import ContactUs from './components/contactUs/ContactUs';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/BlogDetails';
import ApplyNow from './components/ApplyNow/ApplyNow';
import DiplomaInHotel from './components/DiplomaInHotel/DiplomaInHotel';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/programsoffered' element={<ProgramsOffered />} />
          <Route path='/patisserie' element={<Patisserie />} />
          <Route path='/bartending' element={<BarTending />} />
          <Route path='/barista' element={<Barista />} />
          <Route path='/house-keeping' element={<HouseKeeping />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/why-choose-us' element={<WhyChooseUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog-details' element={<BlogDetails />} />
          <Route path='/apply-now' element={<ApplyNow />} />
          <Route path='/diploma-in-hotel-management' element={<DiplomaInHotel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
