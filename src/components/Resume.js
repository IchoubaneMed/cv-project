import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/resume.css';
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
//import { GoDash } from "react-icons/go";
import ReactToPrint from 'react-to-print';
import { AiFillPrinter } from "react-icons/ai";


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

        if (months[userDate[1]] === currentMonth && userDate[3] === currentYear) {
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
            <div className="resume-grid">
                <div className="resume-print">
                    <ReactToPrint
                        trigger={() => {
                            return <button className="btnPrint"><AiFillPrinter /> Print</button>
                        }}
                        content={() => this.componentRef}
                    />
                </div>

                <div className="resume-container" ref={el => (this.componentRef = el)}>
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
                        <h4 className="inline">{this.props.job_title}</h4>, <h4 className="inline">{this.props.work_location}</h4>
                        <p>{this.props.company_name}</p>
                        <p className="inline italic">{this.handleDate(this.props.from)}</p>-<p className="inline italic">{this.handleDate(this.props.to)}</p>
                        <p>{this.props.tasks}</p>
                    </div>

                    <div className="resume-education">
                        <h3 className="underline">Education</h3>
                        <h4>{this.props.degree_name}</h4>
                        <p>{this.props.university_name}</p>
                        <p className="inline italic">{this.handleDate(this.props.from_education)}</p>-<p className="inline italic">{this.handleDate(this.props.to_education)}</p>
                    </div>

                    <div className="resume-skills">
                        <h3 className="underline">Skills</h3>
                        <div>
                            <h4 className="inline flex">Expert ( <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /> ): </h4><p className="inline">{this.props.expert}</p>
                        </div>
                        <div>
                            <h4 className="inline flex">Advanced ( <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSLine /> ): </h4><p className="inline">{this.props.advanced}</p>
                        </div>
                        <div>
                            <h4 className="inline flex">Familiar ( <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSLine /><RiStarSLine /> ): </h4><p className="inline">{this.props.familiar}</p>
                        </div>
                    </div>

                    <div className="resume-certifications">
                        <h3 className="underline">Certifications</h3>
                        {/*
                        <p className="flex"><GoDash />{this.props.title}, <span className="italic">{this.handleDate(this.props.date)}</span></p>
                        */}
                        <ul>
                            {this.props.certifications.map(el => {
                                return <li key={el.id}>{el.title}, <span className="italic">{this.handleDate(el.date)}</span></li>
                            })}
                        </ul>

                    </div>
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

        degree_name: state.educationReducer.degree_name,
        university_name: state.educationReducer.university_name,
        from_education: state.educationReducer.from_education,
        to_education: state.educationReducer.to_education,

        expert: state.skillsReducer.expert,
        advanced: state.skillsReducer.advanced,
        familiar: state.skillsReducer.familiar,

        //title: state.certificationsReducer.title,
        //date: state.certificationsReducer.date,
        certifications: state.certificationsReducer.certifications,
    }
}

export default connect(mapStateToProps, null)(Resume);