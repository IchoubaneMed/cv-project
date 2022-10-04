import { configureStore } from '@reduxjs/toolkit';
import { data } from './data';

const initialState = data;

const FULLNAME = 'FULLNAME';
const EMAIL = 'EMAIL';
const PHONENUMBER = 'PHONENUMBER';
const WEBSITE = 'WEBSITE';
const GITHUBURL = 'GITHUBURL';
const LINKEDINURL = 'LINKEDINURL';

const STATEMENT = 'STATEMENT';

const ADD_WORK_EXPERIENCE = 'ADD_WORK_EXPERIENCE';
const DELETE_WORK_EXPERIENCE = 'DELETE_WORK_EXPERIENCE';

const ADD_EDUCATION = 'ADD_EDUCATION';
const DELETE_EDUCATION = 'DELETE_EDUCATION';
const GO_DOWN_EDUCATION = 'GO_DOWN_EDUCATION';
const GO_UP_EDUCATION = 'GO_UP_EDUCATION';


const EXPERT = 'EXPERT';
const ADVANCED = 'ADVANCED';
const FAMILIER = 'FAMILIER';

const CERTIFICATIONS = 'CERTIFICATIONS';
const DELETECERTIFICATION = 'DELETECERTIFICATION';

const LOAD = 'LOAD';
const CLEAR = 'CLEAR';

const GODOWN = 'GODOWN';
const GOUP = 'GOUP';

const contactInformationReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case LOAD:
            return {
                ...state,
                fullName: data.fullName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                website: data.website,
                githubUrl: data.githubUrl,
                linkedinUrl: data.linkedinUrl,
            }
        case CLEAR:
            return {
                ...state,
                fullName: '',
                email: '',
                phoneNumber: '',
                website: '',
                githubUrl: '',
                linkedinUrl: '',
            }
        default:
            return state;
    }
}

const summaryStatementReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATEMENT:
            return {
                ...state,
                statement: action.statement,
            }
        case LOAD:
            return {
                ...state,
                statement: data.statement,
            }
        case CLEAR:
            return {
                ...state,
                statement: '',
            }
        default:
            return state;
    }
}

const workExperienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORK_EXPERIENCE:
            return {
                ...state,
                work_experience: state.work_experience.concat(action.WE),
            }
        case DELETE_WORK_EXPERIENCE:
            return {
                ...state,
                work_experience: state.work_experience.filter(item => item.id !== action.id),
            }
        case LOAD:
            return {
                ...state,
                work_experience: data.work_experience,
            }
        case CLEAR:
            return {
                ...state,
                work_experience: [],
            }
        default:
            return state;
    }
}

const educationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EDUCATION:
            return {
                ...state,
                education: state.education.concat(action.edu),
            }
        case DELETE_EDUCATION:
            return {
                ...state,
                education: state.education.filter(item => item.id !== action.id),
            }
        case LOAD:
            return {
                ...state,
                education: data.education,
            }
        case CLEAR:
            return {
                ...state,
                education: [],
            }
        case GO_DOWN_EDUCATION:
            const arr = [...state.education];

            let temp = arr[action.index];

            arr[action.index] = arr[action.index + 1];

            arr[action.index + 1] = temp;
            return {
                ...state,
                education: arr,
            }
        case GO_UP_EDUCATION:
            const arr2 = [...state.education];

            [arr2[action.index - 1], arr2[action.index]] = [arr2[action.index], arr2[action.index - 1]];
            return {
                ...state,
                education: arr2,
            }
        default:
            return state;
    }
}

const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXPERT:
            return {
                ...state,
                expert: action.expert,
            }
        case ADVANCED:
            return {
                ...state,
                advanced: action.advanced,
            }
        case FAMILIER:
            return {
                ...state,
                familiar: action.familiar,
            }
        case LOAD:
            return {
                ...state,
                expert: data.expert,
                advanced: data.advanced,
                familiar: data.familiar,
            }
        case CLEAR:
            return {
                ...state,
                expert: '',
                advanced: '',
                familiar: '',
            }
        default:
            return state;
    }
}

const certificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CERTIFICATIONS:
            return {
                ...state,
                certifications: state.certifications.concat(action.certifications),
            }
        case DELETECERTIFICATION:
            return {
                ...state,
                certifications: state.certifications.filter(item => item.id !== action.id)
            }
        case LOAD:
            return {
                ...state,
                certifications: data.certifications,
            }
        case CLEAR:
            return {
                ...state,
                certifications: [],
            }
        case GODOWN:
            const arr = [...state.certifications];

            let temp = arr[action.index];

            arr[action.index] = arr[action.index + 1];

            arr[action.index + 1] = temp;
            return {
                ...state,
                certifications: arr,
            }
        case GOUP:
            const arr2 = [...state.certifications];

            [arr2[action.index - 1], arr2[action.index]] = [arr2[action.index], arr2[action.index - 1]];
            return {
                ...state,
                certifications: arr2,
            }
        default:
            return state;
    }
}

const store = configureStore({
    reducer: { contactInformationReducer, summaryStatementReducer, workExperienceReducer, educationReducer, skillsReducer, certificationsReducer },
})

export default store;
