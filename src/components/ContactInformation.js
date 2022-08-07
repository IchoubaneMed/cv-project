import React, { Component } from 'react';
import { FaSave, FaEdit } from "react-icons/fa";

class ContactInformation extends Component {
    constructor() {
        super();

        this.state = {
            fullName: '',
            email: '',
            phoneNumber: '',
            website: '',
            githubUrl: '',
            linkedinUrl: '',

            contactInfo: [],
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
        event.preventDefault();
        this.setState({
            contactInfo: [ 
                             this.state.fullName, 
                             this.state.email, 
                             this.state.phoneNumber, 
                             this.state.website, 
                             this.state.githubUrl, 
                             this.state.linkedinUrl
                         ],
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
            fullName: this.state.contactInfo[0],
            email: this.state.contactInfo[1],
            phoneNumber: this.state.contactInfo[2],
            website: this.state.contactInfo[3],
            githubUrl: this.state.contactInfo[4],
            linkedinUrl: this.state.contactInfo[5],
        });
    }

    render() {
        const contactInfo = this.state.contactInfo.filter(elem => elem !== "");
        return(
            <div className="formSection">
                <h1>Contact Information</h1>
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

                <ul>
                    {contactInfo.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>

            
        );
    }
}

export default ContactInformation;