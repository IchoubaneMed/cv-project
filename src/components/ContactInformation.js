import React, { Component } from 'react';
import { FaSave, FaEdit } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import '../styles/global.css'

import { connect } from 'react-redux';

class ContactInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            email: '',
            phoneNumber: '',
            website: '',
            githubUrl: '',
            linkedinUrl: '',
        };
        
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    handleSubmit(event) {
        event.preventDefault()
        this.props.fullName_action(this.state.fullName);
        this.props.email_action(this.state.email);
        this.props.phoneNumber_action(this.state.phoneNumber);
        this.props.website_action(this.state.website);
        this.props.githubUrl_action(this.state.githubUrl);
        this.props.linkedinUrl_action(this.state.linkedinUrl);
        this.setState({
            fullName: '',
            email: '',
            phoneNumber: '',
            website: '',
            githubUrl: '',
            linkedinUrl: '',
        });
    };

    handleEdit() {
        this.setState({
            fullName: this.props.fullName_data,
            email: this.props.email_data,
            phoneNumber: this.props.phoneNumber_data,
            website: this.props.website_data,
            githubUrl: this.props.githubUrl_data,
            linkedinUrl: this.props.linkedinUrl_data,
        });
    }

    render() {
        return(
            <div className="formSection">
                <h1>Contact Information <IoMdContact /></h1>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="fullName">Full name</label>
                <input type="text" name="fullName" id="fullName" placeholder="fullName" onChange={this.handleChange} value={this.state.fullName} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="email" onChange={this.handleChange} value={this.state.email}/>
                <label htmlFor="phoneNumber">Phone number</label>
                <input type="text" name="phoneNumber" id="phoneNumber" placeholder="phoneNumber" onChange={this.handleChange} value={this.state.phoneNumber}/>
                <label htmlFor="website">Website</label>
                <input type="text" name="website" id="website" placeholder="website" onChange={this.handleChange} value={this.state.website}/>
                <label htmlFor="githubUrl">Github URL</label>
                <input type="text" name="githubUrl" id="githubUrl" placeholder="githubUrl" onChange={this.handleChange} value={this.state.githubUrl}/>
                <label htmlFor="linkedinUrl">Linkedin URL</label>
                <input type="text" name="linkedinUrl" id="linkedinUrl" placeholder="linkedinUrl" onChange={this.handleChange} value={this.state.linkedinUrl}/>
                
                <div className="div-btn">
                    <button type="submit"><FaSave /> Add</button>
                    <button type="button" onClick={this.handleEdit}><FaEdit /> Edit</button>
                </div>
                </form>
            </div>

            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fullName_data: state.contactInformationReducer.fullName,
        email_data: state.contactInformationReducer.email,
        phoneNumber_data: state.contactInformationReducer.phoneNumber,
        website_data: state.contactInformationReducer.website,
        githubUrl_data: state.contactInformationReducer.githubUrl,
        linkedinUrl_data: state.contactInformationReducer.linkedinUrl,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fullName_action: (fullName) => dispatch({type: 'FULLNAME', fullName}),
        email_action: (email) => dispatch({type: 'EMAIL', email}),
        phoneNumber_action: (phoneNumber) => dispatch({type: 'PHONENUMBER', phoneNumber}),
        website_action: (website) => dispatch({type: 'WEBSITE', website}),
        githubUrl_action: (githubUrl) => dispatch({type: 'GITHUBURL', githubUrl}),
        linkedinUrl_action: (linkedinUrl) => dispatch({type: 'LINKEDINURL', linkedinUrl}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactInformation);