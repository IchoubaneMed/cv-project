import React, { Component } from 'react'
import ContactInformation from "./ContactInformation";
import SummaryStatement from "./SummaryStatement";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import '../styles/forms.css';

class Form extends Component {
    render() {
        return(
            <div>
                <ContactInformation />
                <SummaryStatement />
                <WorkExperience />
                <Education />
                <Skills />
                <Certifications />
            </div>
        );
    }
}

export default Form;