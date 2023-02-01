import React, { useState } from 'react'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import ApplyNowBanner from './ApplyNowBanner'
import MailingAddress from './MailingAddress'
import PersonalDetails from './PersonalDetails'
import Qaulification from './Qaulification'

const ApplyNow = () => {

    // Define Display State 
    const [showPersonalDetails, setShowPersonalDetails] = useState(true);
    const [showMailingAddress, setShowMailingAddress] = useState(false);
    const [showQaulifications, setShowQaulification] = useState(false);

    // Define functions 
    const nextStep = (value) => {
        switch (value) {
            case 'step1': { setShowPersonalDetails(true); break; };
            case 'step2': { setShowPersonalDetails(false); setShowMailingAddress(true); break; };
            case 'step3': { setShowPersonalDetails(false); setShowMailingAddress(false); setShowQaulification(true); break; };
        }
    }

    const prevStep = (value) => {
        switch (value) {
            case 'step1': { setShowPersonalDetails(true); setShowMailingAddress(false); setShowQaulification(false); break; };
            case 'step2': { setShowPersonalDetails(false); setShowMailingAddress(true); setShowQaulification(false); break; };
            case 'step3': { setShowPersonalDetails(false); setShowMailingAddress(false); setShowQaulification(true); break; };
        }
    }

    return (
        <div>
            <Header />
            <ApplyNowBanner />
            {showPersonalDetails && <PersonalDetails nextStep={nextStep} />}
            {showMailingAddress && <MailingAddress nextStep={nextStep} prevStep={prevStep} />}
            {showQaulifications && <Qaulification nextStep={nextStep} prevStep={prevStep} />}
            <Footer />
        </div>
    )
}

export default ApplyNow