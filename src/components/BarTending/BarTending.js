import Footer from "../pages/Footer"
import Header from "../pages/Header"
import BarTendingBanner from "./BarTendingBanner"
import BarTendingContent from "./BarTendingContent"

const BarTending = () => {
    return (
        <div>
           <Header />
           <BarTendingBanner />
           <BarTendingContent />
           <Footer /> 
        </div>
    )
}

export default BarTending