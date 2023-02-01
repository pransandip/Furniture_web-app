import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import swal from 'sweetalert';
import moment from 'moment';
import axios from "../../api/axios";
import { ACTIONS } from "../../Store/actions";

const Qaulification = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user_data = useSelector((state) => state.userData);

    // Define State
    const [highestQualification, sethighestQualification] = useState(user_data.highestQualification)
    const [choiceOfCourses, setchoiceOfCourses] = useState(user_data.choiceOfCourses)
    const [userData, setUserData] = useState({})
    const [userData2, setUserData2] = useState({})

    // Define Error State
    const [highestQualificationError, setHighestQualificationError] = useState(false)
    const [choiceOfCoursesError, setChoiceOfCoursesError] = useState(false)

    // Define Reference
    const inputRef = useRef('Highest qualification can not be blank')
    const inputRef2 = useRef('Choice of courses can not be blank')

    // User object define
    let user3 = {
        highestQualification: highestQualification,
        choiceOfCourses: choiceOfCourses
    }


    // Function for sending mail
    const submit = (userData) => {
        if (highestQualification !== "" && choiceOfCourses !== "") {
            dispatch({type: ACTIONS.UPDATE_USER_DATA, payload: user3})
            // AddUser()
            // const params = new URLSearchParams();
            // params.append("to", userData.email);
            // params.append("subject", choiceOfCourses);
            // axios.post(`/send-email`, params)
            const params2 = new URLSearchParams();
            params2.append("first_middle_name", userData.firstName);
            params2.append("last_name", userData.lastName);
            params2.append("gender", userData.gender);
            params2.append("date_of_birth", moment(userData.dob).format('YYYY-MM-DD'));
            params2.append("email", userData.email);
            params2.append("phone_number", userData.phone);
            params2.append("passport_number", userData.passportNo);
            params2.append("house_no_building_no_flat_no", userData2.houseBuildingFlatNo);
            params2.append("street_name", userData2.streetName);
            params2.append("province", userData2.province);
            params2.append("city", userData2.city);
            params2.append("zip_code", userData2.zipCode);
            params2.append("highest_qualification", highestQualification);
            params2.append("choice_of_courses", choiceOfCourses);
    
            axios.post(`/user`, params2)
                .then((res) => {
                    swal({
                        title: "Applied successfully",
                        text: "Mail sent! check your email",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "OK",
                                value: "catch",
                            },
                        },
                    }).then((value) => {
                        if (value == "catch") {
                            dispatch({type: ACTIONS.CLEAR_USER_DATA})
                            navigate('/')
                        }
                    })
                })
                .catch((err) => {
                    swal({
                        title: "There is some Error",
                        text: "mail not sent!",
                        icon: "error",
                        button: "OK",
                    });
                });
        } else {
            if (highestQualification === "") {
                setHighestQualificationError(true)
            }
            if (choiceOfCourses === "") {
                setChoiceOfCoursesError(true)
            }
        }

    }

    // //Add user to database
    // const AddUser = () => {
    //     const params2 = new URLSearchParams();
    //     params2.append("first_middle_name", userData.firstName);
    //     params2.append("last_name", userData.lastName);
    //     params2.append("gender", userData.gender);
    //     params2.append("date_of_birth", moment(userData.dob).format('YYYY-MM-DD'));
    //     params2.append("email", userData.email);
    //     params2.append("phone_number", userData.phone);
    //     params2.append("passport_number", userData.passportNo);
    //     params2.append("house_no_building_no_flat_no", userData2.houseBuildingFlatNo);
    //     params2.append("street_name", userData2.streetName);
    //     params2.append("province", userData2.province);
    //     params2.append("city", userData2.city);
    //     params2.append("zip_code", userData2.zipCode);
    //     params2.append("highest_qualification", highestQualification);
    //     params2.append("choice_of_courses", choiceOfCourses);
    //     //params2.append("passport_photo", `ghkukukuikuikikujit`);

    //     axios.post(`/user`, params2)
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err))
    // }


    // Assinging to variable
    const { nextStep, prevStep } = props;

    // Assigning user data to object from session
    useEffect(() => {
        let obj = JSON.parse(sessionStorage.user)
        let obj2 = JSON.parse(sessionStorage.user2)
        setUserData(obj)
        setUserData2(obj2)
    }, [])

    return (
        <div>
            <section>
                <div className="progress-content">
                    <div className="container">
                        <ul id="progressbar-details">
                            <li className="completed" id="personal"><strong>Personal Details</strong></li>
                            <li className="completed" id="mailing"><strong>Mailing Address</strong></li>
                            <li className="active" id="qulification"><strong>Qualification</strong></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="contact-section apply-form">
                <div className="container">
                    <div className="from-area">
                        <div className="form-group">
                            <label>Highest Qualification<span className="mnd">*</span></label>
                            <select class="form-control" id="" value={highestQualification} onChange={(e) => { sethighestQualification(e.target.value); setHighestQualificationError(false) }}>
                                <option value=''>Select Highest Qualification</option>
                                <option value='High School'>High School</option>
                                <option value='Intermediate'>Intermediate</option>
                                <option value='Bachelors in Arts'>Bachelors in Arts</option>
                                <option value='Bachelors in Commerce'>Bachelors in Commerce</option>
                                <option value='Bachelor of Science'>Bachelor of Science</option>
                                <option value='Bachelor of Engg./Tech'>Bachelor of Engg./Tech</option>
                                <option value='Masters'>Masters</option>
                            </select>
                            {highestQualificationError && (<small className="error">{inputRef.current}</small>)}
                        </div>
                        <div className="form-group">
                            <label>Choice of Courses<span className="mnd">*</span></label>
                            <select class="form-control" id="" value={choiceOfCourses} onChange={(e) => { setchoiceOfCourses(e.target.value); setChoiceOfCoursesError(false) }}>
                                <option value=''>Chooce Your Course</option>
                                <option value="Advanced Diploma in Food Production Cookery supervision">Advanced Diploma in Food Production &amp; Cookery supervision</option>
                                <option value="Patisserie">Patisserie</option>
                                <option value="Bar Tending">Bar Tending</option>
                                <option value="Barista">Barista</option>
                                <option value="Housekeeping">Housekeeping</option>
                            </select>
                            {choiceOfCoursesError && (<small className="error">{inputRef2.current}</small>)}
                        </div>
                        {/* <div className="form-group">
                            <label>Passport size photo<span className="mnd">*</span></label>
                            <input type="file" className="fw-file-upload-input" id="name" placeholder="Email" />
                            <label class="fw-btn fw-button-fileupload" for="fw-1-2-0-2">
                                <i class="fa fa-upload fw-file-upload-status" aria-hidden="true"></i>
                                <span>Choose a file</span>
                            </label>
                            <small className="error"></small>
                        </div> */}
                         <div className="d-flex justify-content-center mt-5">
                            <button type="submit" className="btn btn-primary frm-send-btn" onClick={() => prevStep('step2')}>Previous Step</button><span> </span>
                            <button type="submit" className="btn btn-primary frm-send-btn" onClick={() => submit(userData)}>Submit</button>
                        </div>
                        <p className="validation-error" style={{ display: 'none' }}>Validation errors occurred. Please confirm the fields and submit it again.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Qaulification