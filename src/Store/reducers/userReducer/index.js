import { ACTIONS } from "../../actions";

/**
 * Reducer specific to handeling all user data
 */

const initialState = {
    name: '',
    firstName: '',
    lastName: '',
    gender: '',
    dob: new Date(),
    email: '',
    phone: '',
    passportNo: '',
    validEmail: false,
    validPhone: false,
    houseBuildingFlatNo: '',
    streetName: '',
    province: '',
    city: '',
    zipCode: '',
    validZipCode: false,
    highestQualification: '',
    choiceOfCourses: ''
};
const userData = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case ACTIONS.UPDATE_USER_DATA:
            const newObj = {
                ...newState,
                ...action.payload
            }
            return newObj;
        case ACTIONS.GET_USER_DATA:
            return {
                ...newState,
                ...action.payload
            }
        case ACTIONS.CLEAR_USER_DATA:
            const obj = {
                name: '',
                firstName: '',
                lastName: '',
                gender: '',
                dob: new Date(),
                email: '',
                phone: '',
                passportNo: '',
                validEmail: false,
                validPhone: false,
                houseBuildingFlatNo: '',
                streetName: '',
                province: '',
                city: '',
                zipCode: '',
                validZipCode: false,
                highestQualification: '',
                choiceOfCourses: ''
            };
            return obj;
        default:
            return state;
    }
}

export default userData