import Footer from "../pages/Footer"
import Header from "../pages/Header"
import HouseKeepingBanner from "./HouseKeepingBanner"
import HouseKeepingContent from "./HouseKeepingContent"


const HouseKeeping = () => {
    return (
        <div>
            <Header />
            <HouseKeepingBanner />
            <HouseKeepingContent />
            <Footer />
        </div>
    )
}

export default HouseKeeping