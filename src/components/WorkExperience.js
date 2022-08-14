import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaSave, FaEdit } from "react-icons/fa";
import { MdWork } from "react-icons/md";

class WorkExperience extends Component {
    constructor() {
        super();
        this.state = {
            job_title: '',
            company_name: '',
            work_location: '',
            from: new Date(),
            to: new Date(),
            tasks: '',
            work_info: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDateFrom = this.handleChangeDateFrom.bind(this);
        this.handleChangeDateTo = this.handleChangeDateTo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleChangeDateFrom(date) {
        this.setState({
            from: date,
        });
    };

    handleChangeDateTo(date) {
        this.setState({
            to: date,
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            work_info: [
                    this.state.job_title,
                    this.state.company_name,
                    this.state.work_location,
                    this.state.from,
                    this.state.to,
                    this.state.tasks,
                    ],
            job_title: '',
            company_name: '',
            work_location: '',
            from: new Date(),
            to: new Date(),
            tasks: '',
        });
    }

    handleEdit() {
        this.setState({
            job_title: this.state.work_info[0],
            company_name: this.state.work_info[1],
            work_location: this.state.work_info[2],
            from: this.state.work_info[3],
            to: this.state.work_info[4],
            tasks: this.state.work_info[5],
        });
    }

    render() {
        return(
            <div className="formSection">
                <h1>Work Experience <MdWork /></h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="jobTitle">Job title:</label>
                    <input type="text" id="jobTitle" name="job_title" value={this.state.job_title} onChange={this.handleChange}/>
                    <label htmlFor="companyName">Company name:</label>
                    <input type="text" id="companyName" name="company_name" value={this.state.company_name} onChange={this.handleChange}/>
                    <label htmlFor="workLocation">Work Location:</label>
                    <input type="text" id="workLocation" name="work_location" value={this.state.work_location} onChange={this.handleChange}/>
                    <label>From:</label>
                    <DatePicker 
                        name="from"
                        selected={this.state.from}
                        onChange={this.handleChangeDateFrom}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                    />
                    <label>To:</label>
                    <DatePicker 
                        name="to"
                        selected={this.state.to}
                        onChange={this.handleChangeDateTo}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                    />
                    <label>Tasks:</label>
                    <textarea name="tasks" value={this.state.tasks} onChange={this.handleChange}></textarea>

                    <div className="div-btn">
                        <button type="submit"><FaSave /> Add</button>
                        <button type="button" onClick={this.handleEdit}><FaEdit /> Edit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default WorkExperience;