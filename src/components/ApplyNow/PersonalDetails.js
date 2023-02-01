import { useState, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from "../../Store/actions";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const PersonalDetails = (props) => {

    const dispatch = useDispatch()
    const user_data = useSelector((state) => state.userData);

    // Define State
    const [firstname, setFirstName] = useState(user_data.firstName)
    const [lastName, setLastName] = useState(user_data.lastName)
    const [gender, setGender] = useState(user_data.gender)
    const [subject, setSubject] = useState('')
    const [dob, setDOB] = useState(new Date(user_data.dob))
    const [email, setEmail] = useState(user_data.email)
    const [phone, setPhone] = useState(user_data.phone)
    const [passportNo, setPassportNo] = useState(user_data.passportNo)
    const [open, setOpen] = useState(false)
    const [validEmail, setValidEmail] = useState(user_data.validEmail)
    const [validPhone, setValidPhone] = useState(user_data.validPhone)

    // Define Error State
    const [firstnameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [genderError, setGenderError] = useState(false)
    const [subjectError, setSubjectError] = useState(false)
    const [dobError, setDOBError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [passportNoError, setPassportNoError] = useState(false)
    const [validEmailError, setValidEmailError] = useState(false)
    const [validPhoneError, setValidPhoneError] = useState(false)


    // Define Reference
    const inputRef = useRef('First name can not be blank')
    const inputRef2 = useRef('Last name can not be blank')
    const inputRef3 = useRef('DOB can not be blank')
    const inputRef4 = useRef('Email can not be blank')
    const inputRef5 = useRef('Phone Number can not be blank')
    const inputRef6 = useRef('Enter a valid email address')
    const inputRef7 = useRef('Enter a valid valid phone number')

    const filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // User object define
    let user = {
        name: `${firstname} ${lastName}`,
        firstName: firstname,
        lastName: lastName,
        gender: gender,
        dob: dob,
        email: email,
        phone: phone,
        passportNo: passportNo,
        validEmail: validEmail,
        validPhone: validPhone
    }

    // Assinging to variable
    const { nextStep } = props;

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

    // Function for routing
    const handleChange = (e) => {
        e.preventDefault();
        if (firstname !== "" && lastName !== "" && dob !== "" && email !== "" && phone !== "") {
            if (validEmail && validPhone) {
                if (user !== "") {
                    dispatch({type: ACTIONS.UPDATE_USER_DATA, payload: user})
                    sessionStorage.setItem('user', JSON.stringify(user))
                }
                nextStep('step2')
            }
        } else {
            if (firstname === "") {
                setFirstNameError(true)
            }
            if (lastName === "") {
                setLastNameError(true)
            }
            if (dob === "") {
                setDOBError(true)
            }
            if (email === "") {
                setEmailError(true)
                setValidEmailError(false);
            }
            if (phone === "") {
                setPhoneError(true)
                setValidPhoneError(false);
            }
        }

    }

    // Calendar Handler
    const openRequestCalendar = () => {
        setOpen(true)
    }

    console.log(user)
    return (
        <div>
            <section>
                <div className="progress-content">
                    <div className="container">
                        <ul id="progressbar-details">
                            <li className="active" id="personal"><strong>Personal Details</strong></li>
                            <li id="mailing"><strong>Mailing Address</strong></li>
                            <li id="qulification"><strong>Qualification</strong></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="contact-section apply-form">
                <div className="container">
                    <div className="from-area">
                        <div className="form-group">
                            <label>First Name<span className="mnd">*</span></label>
                            <input type="text" className="form-control" id="name" placeholder="First Name" value={firstname} onChange={(e) => { setFirstName(e.target.value); setFirstNameError(false) }} />
                            {firstnameError && (<small className="error">{inputRef.current}</small>)}
                        </div>
                        <div className="form-group">
                            <label>Last Name<span className="mnd">*</span></label>
                            <input type="text" className="form-control" id="name" placeholder="Last Name" value={lastName} onChange={(e) => { setLastName(e.target.value); setLastNameError(false) }} />
                            {lastNameError && (<small className="error">{inputRef2.current}</small>)}
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <div className="form-check">
                                <input className="form-check-input" name="gender" type="radio" value="Male" id="flexCheckDefault" checked={gender == 'Male' ? true : false} onChange={(e) => setGender(e.target.value)} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">Male</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" name="gender" type="radio" value="Female" id="flexCheckChecked" checked={gender == 'Female' ? true : false} onChange={(e) => setGender(e.target.value)} />
                                <label className="form-check-label" htmlFor="flexCheckChecked">Female</label>
                            </div>
                        </div>
                        <div className="form-group icon-calander">
                            <label>Date of Birth<span className="mnd">*</span></label>
                            <p onClick={openRequestCalendar}><i className="fa fa-calendar" aria-hidden="true"></i>{open && <Calendar value={dob} onChange={(e) => { setDOB(e); setOpen(false) }} />}</p>
                            <input type="text" name="conf_d_o_b" value={dob.toLocaleDateString()} className="input required form-control datepicker " id="conf_d_o_b" required="required" readOnly="readOnly" tabIndex="9" placeholder="DD-MMM-YYYY" />
                            {dobError && (<small className="error">{inputRef3.current}</small>)}
                        </div>

                        <div className="form-group">
                            <label>Email<span className="mnd">*</span></label>
                            <input type="text" className="form-control" id="name" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(false) }} onKeyUp={checkEmail} />
                            {emailError && (<small className="error">{inputRef4.current}</small>)}
                            {validEmailError && (<small className="error">{inputRef6.current}</small>)}
                        </div>
                        <div className="form-group">
                            <label>Phone Number<span className="mnd">*</span></label>
                            <input type="text" className="form-control" id="name" placeholder="Phone Number" value={phone} onChange={(e) => {
                                if (e.target.value.length <= 10) {
                                    setPhone(e.target.value);
                                    setPhoneError(false);
                                }
                            }} onKeyUp={checkPhone} />
                            {phoneError && (<small className="error">{inputRef5.current}</small>)}
                            {validPhoneError && (<small className="error">{inputRef7.current}</small>)}
                        </div>

                        <div className="form-group">
                            <label>Passport Number</label>
                            <input type="text" className="form-control" id="name" placeholder="Passport Number" value={passportNo} onChange={(e) => { setPassportNo(e.target.value) }} />
                            <small className="error"></small>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary frm-send-btn" onClick={handleChange}>Next Step</button>
                        </div>
                        
                        <p className="validation-error" style={{ display: 'none' }}>Validation errors occurred. Please confirm the fields and submit it again.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PersonalDetails