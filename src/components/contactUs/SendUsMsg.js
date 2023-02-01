import { useRef, useState } from 'react'

// importing axios from api/axios.js
import axios from '../../api/axios'

const SendUsMsg = () => {

    // Define State
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [validEmail, setValidEmail] = useState('')
    const [validPhone, setValidPhone] = useState('')

    // Define Error State
    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [subjectError, setSubjectError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [validEmailError, setValidEmailError] = useState(false)
    const [validPhoneError, setValidPhoneError] = useState(false)

    // Define Reference
    const inputRef = useRef('Name can not be blank')
    const inputRef2 = useRef('Phone can not be blank')
    const inputRef3 = useRef('Email can not be blank')
    const inputRef4 = useRef('Subject can not be blank')
    const inputRef5 = useRef('Message can not be blank')
    const inputRef6 = useRef('Enter a valid email address')
    const inputRef7 = useRef('Enter a valid valid phone number')

    const filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    // Function for check valid emails
    const checkEmail = (e) => {
        if (filterEmail.test(e.target.value)) {
            setValidEmail(true)
            setValidEmailError(false)
        }
        else {
            setValidEmail(false)
            setValidEmailError(true)
        }
    };

    // Function for check valid phone numbers
    const checkPhone = (e) => {
        const phoneRe = /^[0-9\b]+$/;
        if (phoneRe.test(e.target.value)) {
            setValidPhone(true);
            setValidPhoneError(false);
        } else {
            setValidPhone(false);
            setValidPhoneError(true);
        }
    }


    const submitBtn = (e) => {
        e.preventDefault();
        if (name !== "" && phone !== "" && email !== "" && subject !== "" && message !== "") {
            if (validEmail && validPhone) {
                alert(`Thank you "${name}" check your mail`)
            }
        } else {
            if (name === "") {
                setNameError(true)
            }
            if (phone === "") {
                setPhoneError(true)
                setValidPhoneError(false);
            }
            if (email === "") {
                setEmailError(true)
                setValidEmailError(false);
            }
            if (subject === "") {
                setSubjectError(true)
            }
            if (message === "") {
                setMessageError(true)
            }
        }
    }

    return (
        <div>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center heading-area">
                            <h2 className="title">Send Us a Message</h2>
                            <p className="sub-title">Fields marked with an * are required</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img src="images/contact.png" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="from-area">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e) => { setName(e.target.value); setNameError(false) }} />
                                    {nameError && (<small className="error">{inputRef.current}</small>)}
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" placeholder="Phone" onChange={(e) => { setPhone(e.target.value); setPhoneError(false) }} onKeyUp={checkPhone} />
                                    {phoneError && (<small className="error">{inputRef2.current}</small>)}
                                    {validPhoneError && (<small className="error">{inputRef7.current}</small>)}
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" placeholder="Email" onChange={(e) => { setEmail(e.target.value); setEmailError(false) }} onKeyUp={checkEmail} />
                                    {emailError && (<small className="error">{inputRef3.current}</small>)}
                                    {validEmailError && (<small className="error">{inputRef6.current}</small>)}
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" placeholder="Subject" onChange={(e) => { setSubject(e.target.value); setSubjectError(false) }} />
                                    {subjectError && (<small className="error">{inputRef4.current}</small>)}
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Message" rows="3" onChange={(e) => { setMessage(e.target.value); setMessageError(false) }}></textarea>
                                    {messageError && (<small className="error">{inputRef5.current}</small>)}
                                </div>
                                <div className="d-flex justify-content-center mt-5">
                                    <button type="submit" className="btn btn-primary frm-send-btn" onClick={submitBtn}>Submit</button>
                                </div>
                                <p className="validation-error" style={{ display: 'none' }}>Validation errors occurred. Please confirm the fields and submit it again.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SendUsMsg