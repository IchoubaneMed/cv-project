import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    website: '',
    githubUrl: '',
    linkedinUrl: '',

    statement: '',

    job_title: '',
    company_name: '',
    work_location: '',
    from: '',
    to: '',
    tasks: '',

    degree_name: '',
    university_name: '',
    from_education: '',
    to_education: '',

    expert: '',
    advanced: '',
    familiar: '',

    certifications: [],
}

const FULLNAME = 'FULLNAME';
const EMAIL = 'EMAIL';
const PHONENUMBER = 'PHONENUMBER';
const WEBSITE = 'WEBSITE';
const GITHUBURL = 'GITHUBURL';
const LINKEDINURL = 'LINKEDINURL';

const STATEMENT = 'STATEMENT';

const JOBTITLE = 'JOBTITLE';
const COMPANYNAME = 'COMPANYNAME';
const WORKLOCATION = 'WORKLOCATION';
const FROM = 'FROM';
const TO = 'TO';
const TASKS = 'TASKS';

const DEGREENAME = 'DEGREENAME';
const UNIVERSITYNAME = 'UNIVERSITYNAME';
const FROMEDUCATION = 'FROMEDUCATION';
const TOEDUCATION = 'TOEDUCATION';

const EXPERT = 'EXPERT';
const ADVANCED = 'ADVANCED';
const FAMILIER = 'FAMILIER';

//const TITLE = 'TITLE';
//const DATE = 'DATE';
const CERTIFICATIONS = 'CERTIFICATIONS';
const DELETECERTIFICATION = 'DELETECERTIFICATION';

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
        default:
            return state;
    }
}

const workExperienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOBTITLE:
            return {
                ...state,
                job_title: action.job_title,
            }
        case COMPANYNAME:
            return {
                ...state,
                company_name: action.company_name,
            }
        case WORKLOCATION:
            return {
                ...state,
                work_location: action.work_location,
            }
        case FROM:
            return {
                ...state,
                from: action.from,
            }
        case TO:
            return {
                ...state,
                to: action.to,
            }
        case TASKS:
            return {
                ...state,
                tasks: action.tasks,
            }
        default:
            return state;
    }
}

const educationReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEGREENAME:
            return {
                ...state,
                degree_name: action.degree,
            }
        case UNIVERSITYNAME:
            return {
                ...state,
                university_name: action.university,
            }
        case FROMEDUCATION:
            return {
                ...state,
                from_education: action.from_education,
            }
        case TOEDUCATION:
            return {
                ...state,
                to_education: action.to_education,
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
        default:
            return state;
    }
}

const certificationsReducer = (state = initialState, action) => {
    switch(action.type) {
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
        default:
            return state;
    }
}

const store = configureStore({
    reducer: { contactInformationReducer, summaryStatementReducer, workExperienceReducer, educationReducer, skillsReducer, certificationsReducer },
})

export default store;
