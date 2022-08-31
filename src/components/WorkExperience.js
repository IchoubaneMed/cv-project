import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaSave, FaEdit } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import { connect } from 'react-redux';

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
        this.props.job_title_action(this.state.job_title);
        this.props.company_name_action(this.state.company_name);
        this.props.work_location_action(this.state.work_location);
        this.props.from_action(this.state.from.toString());
        this.props.to_action(this.state.to.toString());
        this.props.tasks_action(this.state.tasks);
        this.setState({
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
            job_title: this.props.job_title,
            company_name: this.props.company_name,
            work_location: this.props.work_location,
            from: this.props.from === '' ? new Date() : Date.parse(this.props.from),
            to: this.props.to === '' ? new Date() : Date.parse(this.props.to),
            tasks: this.props.tasks,
        });
    }

    render() {
        return (
            <div className="formSection">
                <h1>Work Experience <MdWork /></h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="jobTitle">Job title:</label>
                    <input type="text" id="jobTitle" name="job_title" value={this.state.job_title} onChange={this.handleChange} />
                    <label htmlFor="companyName">Company name:</label>
                    <input type="text" id="companyName" name="company_name" value={this.state.company_name} onChange={this.handleChange} />
                    <label htmlFor="workLocation">Work Location:</label>
                    <input type="text" id="workLocation" name="work_location" value={this.state.work_location} onChange={this.handleChange} />
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

const mapStateToProps = (state) => {
    return {
        job_title: state.workExperienceReducer.job_title,
        company_name: state.workExperienceReducer.company_name,
        work_location: state.workExperienceReducer.work_location,
        from: state.workExperienceReducer.from,
        to: state.workExperienceReducer.to,
        tasks: state.workExperienceReducer.tasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        job_title_action: (job_title) => dispatch({type: 'JOBTITLE', job_title}),
        company_name_action: (company_name) => dispatch({type: 'COMPANYNAME', company_name}),
        work_location_action: (work_location) => dispatch({type: 'WORKLOCATION', work_location}),
        from_action: (from) => dispatch({type: 'FROM', from}),
        to_action: (to) => dispatch({type: 'TO', to}),
        tasks_action: (tasks) => dispatch({type: 'TASKS', tasks}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);