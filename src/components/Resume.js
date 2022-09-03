import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/resume.css';

class Resume extends Component {
    constructor(props) {
        super(props)
        this.handleDate = this.handleDate.bind(this);
    }

    handleDate(date = '') {
        const months = {
            Jan: 'January',
            Feb: 'February',
            Mar: 'March',
            Apr: 'April',
            May: 'May',
            Jun: 'June',
            Jul: 'July',
            Aug: 'August',
            Sep: 'September',
            Oct: 'October',
            Nov: 'November',
            Dec: 'December',
        }
        const currentDate = new Date();
        const currentMonth = months[currentDate.toString().split(" ")[1]]
        const currentYear = currentDate.toString().split(" ")[3]
        
        const userDate = date.split(" ");

        if(months[userDate[1]] === currentMonth && userDate[3] === currentYear) {
            return "Present";
        } else if (date === '') {
            return "";
        } else {
            return `${months[userDate[1]]} ${userDate[3]}`;
        }
    }

    render() {
        const portfolio = this.props.website.split("").splice(8).join("");
        const github = this.props.githubUrl.split("").splice(8).join("");
        const linkedin = this.props.linkedinUrl.split("").splice(12).join("");
        return (
            <div className="resume-container">
                <div className="resume-contactInfo">
                    <div className="resume-name">
                        <h1>{this.props.fullName}</h1>
                    </div>
                    <div className="resume-email-phone">
                        <h3>{this.props.email}</h3>
                        <h3>{this.props.phoneNumber}</h3>
                    </div>
                    <div className="resume-links">
                        <div>
                            <a href={this.props.website} target="_blank" rel="noreferrer">{portfolio}</a>
                        </div>
                        <div>
                            <a href={this.props.githubUrl} target="_blank" rel="noreferrer">{github}</a>
                        </div>
                        <div>
                            <a href={this.props.linkedinUrl} target="_blank" rel="noreferrer">{linkedin}</a>
                        </div>
                    </div>
                </div>

                <div className="resume-summaryState">
                    <h3 className="underline">Summary Statement</h3>
                    <p>{this.props.statement}</p>
                </div>

                <div className="resume-workExperience">
                    <h3 className="underline">Work Experience</h3>
                    <h4 className="inline bold">{this.props.job_title}</h4>, <h4 className="inline bold">{this.props.work_location}</h4>
                    <h4>{this.props.company_name}</h4>
                    <h4 className="inline italic">{this.handleDate(this.props.from)}</h4>-<h4 className="inline italic">{this.handleDate(this.props.to)}</h4>
                    <p>{this.props.tasks}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fullName: state.contactInformationReducer.fullName,
        email: state.contactInformationReducer.email,
        phoneNumber: state.contactInformationReducer.phoneNumber,
        website: state.contactInformationReducer.website,
        githubUrl: state.contactInformationReducer.githubUrl,
        linkedinUrl: state.contactInformationReducer.linkedinUrl,

        statement: state.summaryStatementReducer.statement,

        job_title: state.workExperienceReducer.job_title,
        company_name: state.workExperienceReducer.company_name,
        work_location: state.workExperienceReducer.work_location,
        from: state.workExperienceReducer.from,
        to: state.workExperienceReducer.to,
        tasks: state.workExperienceReducer.tasks,
    }
}

export default connect(mapStateToProps, null)(Resume);