import Header from "../pages/Header"
import Footer from "../pages/Footer"
import BaristaBanner from "./BaristaBanner"
import BaristaContent from "./BaristaContent"

const Barista = () => {
  return (
    <div>
        <Header />
        <BaristaBanner />
        <BaristaContent />
        <Footer />
    </div>
  )
}

export default Barista