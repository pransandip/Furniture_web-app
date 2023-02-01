import Footer from "../pages/Footer"
import Header from "../pages/Header"
import ContactUsBanner from "./ContactUsBanner"
import ContactUsContent from "./ContactUsContent"
import SendUsMsg from "./SendUsMsg"
const ContactUs = () => {
    return (
        <div>
            <Header />
            <ContactUsBanner />
            <ContactUsContent />
            <SendUsMsg />
            <Footer />
        </div>
    )
}

export default ContactUs