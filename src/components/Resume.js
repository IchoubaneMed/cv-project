import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/resume.css';

class Resume extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const portfolio = this.props.website.split("").splice(8).join("");
        const github = this.props.githubUrl.split("").splice(8).join("");
        const linkedin = this.props.linkedinUrl.split("").splice(12).join("");
        return (
            <div className="resume-container">
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
    }
}

export default connect(mapStateToProps, null)(Resume);