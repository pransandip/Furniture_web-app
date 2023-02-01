import { useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ACTIONS } from "../../Store/actions";
const MailingAddress = (props) => {

    const dispatch = useDispatch()
    const user_data = useSelector((state) => state.userData);

    // Define State
    const [houseBuildingFlatNo, setHouseBuildingFlatNo] = useState(user_data.houseBuildingFlatNo)
    const [streetName, setStreetName] = useState(user_data.streetName)
    const [province, setProvince] = useState(user_data.province)
    const [city, setCity] = useState(user_data.city)
    const [zipCode, setzipCode] = useState(user_data.zipCode)
    const [validZipCode, setValidZipCode] = useState(user_data.validZipCode)

    // Define Error State
    const [houseBuildingFlatNoError, setHouseBuildingFlatNoError] = useState(false)
    const [streetNameError, setStreetNameError] = useState(false)
    const [provinceError, setProvinceError] = useState(false)
    const [cityError, setCityError] = useState(false)
    const [zipCodeError, setZipCodeError] = useState(false)
    const [validZipCodeError, setValidZipCodeError] = useState(false)

    // Define Reference
    const inputRef = useRef('House No / Building No / Flat No can not be blank')
    const inputRef2 = useRef('Street name can not be blank')
    const inputRef3 = useRef('Province can not be blank')
    const inputRef4 = useRef('City can not be blank')
    const inputRef5 = useRef('Zip code can not be blank')
    const inputRef6 = useRef('Enter a valid zip code')

    // User object define
    let user2 = {
        houseBuildingFlatNo: houseBuildingFlatNo,
        streetName: streetName,
        province: province,
        city: city,
        zipCode: zipCode,
        validZipCode: validZipCode
    }

    // Assinging to variable
    const { nextStep, prevStep } = props;

    // Function for check valid zip code
    const checkZipCode = (e) => {
        const zipRe = /^[0-9\b]+$/;
        if (zipRe.test(e.target.value)) {
            setValidZipCode(true);
            setValidZipCodeError(false);
        } else {
            setValidZipCode(false);
            setValidZipCodeError(true);
        }
    }

    // Function for routing
    const handleChange = (e) => {
        e.preventDefault();
        if (houseBuildingFlatNo !== "" && streetName !== "" && province !== "" && city !== "" && zipCode !== "") {
            if (validZipCode) {
                if (user2 !== "") {
                    dispatch({type: ACTIONS.UPDATE_USER_DATA, payload: user2})
                    sessionStorage.setItem('user2', JSON.stringify(user2))
                }
                nextStep('step3')
            }
        } else {
            if (houseBuildingFlatNo === "") {
                setHouseBuildingFlatNoError(true)
            }
            if (streetName === "") {
                setStreetNameError(true)
            }
            if (province === "") {
                setProvinceError(true)
            }
            if (city === "") {
                setCityError(true)
            }
            if (zipCode === "") {
                setZipCodeError(true)
                setValidZipCodeError(false);
            }
        }

    }

    console.log(validZipCode)
    return (
        <div>
            <section>
                <div className="progress-content">
                    <div className="container">
                        <ul id="progressbar-details">
                            <li className="completed" id="personal"><strong>Personal Details</strong></li>
                            <li className="active" id="mailing"><strong>Mailing Address</strong></li>
                            <li id="qulification"><strong>Qualification</strong></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="contact-section apply-form">
                <div className="container">
                    <div className="from-area">
                        <div className="form-group">
                            <label>House No/ Building No / Flat No<span className="mnd">*</span></label>
                            <input type="text" className="form-control" id="name" placeholder="House No/ Building No / Flat No" value={houseBuildingFlatNo} onChange={(e) => { setHouseBuildingFlatNo(e.target.value); setHouseBuildingFlatNoError(false) }} />
                            {houseBuildingFlatNoError && (<small className="error">{inputRef.current}</small>)}
                        </div>
                        <div className="form-group">
                            <label>Street Name<span className="mnd">*</span></label>
                            <input type="text" className="form-control" id="name" placeholder="Street Name" value={streetName} onChange={(e) => { setStreetName(e.target.value); setStreetNameError(false) }} />
                            {streetNameError && (<small className="error">{inputRef2.current}</small>)}
                        </div>
                        <div className="form-group">
                            <label>Province<span className="mnd">*</span></label>
                            <select class="form-control" id="" value={province} onChange={(e) => { setProvince(e.target.value); setProvinceError(false) }}>
                                <option value=''>Choose Province</option>
                                <option value='Andhra Pradesh' >Andhra Pradesh</option>
                                <option value='Arunachal Pradesh' >Arunachal Pradesh</option>
                                <option value='Assam' >Assam</option>
                                <option value='Bihar' >Bihar</option>
                                <option value='Chhattisgarh' >Chhattisgarh</option>
                                <option value='Goa' >Goa</option>
                                <option value='Gujarat' >Gujarat</option>
                                <option value='Haryana' >Haryana</option>
                                <option value='Himachal Pradesh' >Himachal Pradesh</option>
                                <option value='Jharkhand' >Jharkhand</option>
                                <option value='Karnataka' >Karnataka</option>
                                <option value='Kerala' >Kerala</option>
                                <option value='Madhya Pradesh' >Madhya Pradesh</option>
                                <option value='Maharashtra' >Maharashtra</option>
                                <option value='Manipur' >Manipur</option>
                                <option value='Meghalaya' >Meghalaya</option>
                                <option value='Mizoram' >Mizoram</option>
                                <option value='Nagaland' >Nagaland</option>
                                <option value='Odisha' >Odisha</option>
                                <option value='Punjab' >Punjab</option>
                                <option value='Rajasthan' >Rajasthan</option>
                                <option value='Sikkim' >Sikkim</option>
                                <option value='Tamil Nadu' >Tamil Nadu</option>
                                <option value='Telangana' >Telangana</option>
                                <option value='Tripura' >Tripura</option>
                                <option value='Uttar Pradesh' >Uttar Pradesh</option>
                                <option value='Uttarakhand' >Uttarakhand</option>
                                <option value='West Bengal' >West Bengal</option>
                            </select>
                            {provinceError && (<small className="error">{inputRef3.current}</small>)}

                        </div>
                        <div className="form-group">
                            <label>City<span className="mnd">*</span></label>
                            <input type="text" name="conf_d_o_b" value={city} className="required form-control  " id="conf_d_o_b" required="required" placeholder="City" onChange={(e) => { setCity(e.target.value); setCityError(false) }} />
                            {cityError && (<small className="error">{inputRef4.current}</small>)}
                        </div>

                        <div className="form-group">
                            <label>Zip Code<span className="mnd">*</span></label>
                            <input type="text" className="form-control" id="name" placeholder="Zip Code" value={zipCode} onChange={(e) => {
                                if (e.target.value.length <= 8) {
                                    setzipCode(e.target.value);
                                    setZipCodeError(false);
                                }
                            }} onKeyUp={checkZipCode} />
                            {zipCodeError && (<small className="error">{inputRef5.current}</small>)}
                            {validZipCodeError && (<small className="error">{inputRef6.current}</small>)}
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <button type="submit" className="btn btn-primary frm-send-btn" onClick={() => prevStep('step1')}>Previous Step</button><span> </span>
                            <button type="submit" className="btn btn-primary frm-send-btn" onClick={handleChange}>Next Step</button>
                        </div>
                        <p className="validation-error" style={{ display: 'none' }}>Validation errors occurred. Please confirm the fields and submit it again.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MailingAddress