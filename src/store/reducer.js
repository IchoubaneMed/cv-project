import { configureStore } from '@reduxjs/toolkit';


const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    website: '',
    githubUrl: '',
    linkedinUrl: '',
}

const FULLNAME = 'FULLNAME';
const EMAIL = 'EMAIL';
const PHONENUMBER = 'PHONENUMBER';
const WEBSITE = 'WEBSITE';
const GITHUBURL = 'GITHUBURL';
const LINKEDINURL = 'LINKEDINURL';

const contactInformationReducer = (state = initialState, action) => {
    switch(action.type) {
        case FULLNAME:
            return {
                ...state,
                fullName: action.fullName,
            }
        case EMAIL:
            return {
                ...state,
                email: action.email,
            }
        case PHONENUMBER:
            return {
                ...state,
                phoneNumber: action.phoneNumber,
            }
        case WEBSITE:
            return {
                ...state,
                website: action.website,
            }
        case GITHUBURL:
            return {
                ...state,
                githubUrl: action.githubUrl,
            }
        case LINKEDINURL:
            return {
                ...state,
                linkedinUrl: action.linkedinUrl, 
            }
        default:
            return state;   
    }
}


const store = configureStore({
    reducer: {contactInformationReducer},
})

export default store;
