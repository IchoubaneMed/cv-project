import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaSave, FaEdit } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import uniqid from 'uniqid';
import { connect } from 'react-redux';

class WorkExperience extends Component {
    constructor() {
        super();
        this.state = {
            workExperience: {
                id: uniqid(),
                job_title: '',
                company_name: '',
                work_location: '',
                from: new Date(),
                to: new Date(),
                tasks: '',
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDateFrom = this.handleChangeDateFrom.bind(this);
        this.handleChangeDateTo = this.handleChangeDateTo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    handleChange(event) {
        this.setState({
            workExperience: {
                ...this.state.workExperience,
                [event.target.name]: event.target.value,
                id: uniqid(),
            },
        });
    }

    handleChangeDateFrom(date) {
        this.setState({
            workExperience: {
                ...this.state.workExperience,
                from: date,
            },
        });
    };

    handleChangeDateTo(date) {
        this.setState({
            workExperience: {
                ...this.state.workExperience,
                to: date,
            },
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        const WE = {
            id: this.state.workExperience.id,
            job_title: this.state.workExperience.job_title,
            company_name: this.state.workExperience.company_name,
            work_location: this.state.workExperience.work_location,
            from: this.state.workExperience.from.toString(),
            to: this.state.workExperience.to.toString(),
            tasks: this.state.workExperience.tasks,
        }
        this.setState({
            workExperience: {
                id: uniqid(),
                job_title: '',
                company_name: '',
                work_location: '',
                from: new Date(),
                to: new Date(),
                tasks: '',
            },
        });
        this.props.add_work_experience(WE);
    }

    handleEdit(id) {
        const WE = this.props.work_experience_array.filter(item => item.id === id);
        this.setState({
            workExperience: {
                id: WE[0].id,
                job_title: WE[0].job_title,
                company_name: WE[0].company_name,
                work_location: WE[0].work_location,
                from: Date.parse(WE[0].from),
                to: Date.parse(WE[0].to),
                tasks: WE[0].tasks,
            },
        });
        this.props.delete_work_experience(id);
    }

    handleDelete(id) {
        this.props.delete_work_experience(id);
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

        const userDate = date.split(" ");

        if (date === '') {
            return "";
        } else {
            return `${months[userDate[1]]} ${userDate[3]}`;
        }
    }

    render() {
        return (
            <div className="formSection">
                <h1>Work Experience <MdWork /></h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="jobTitle">Job title:</label>
                    <input type="text" id="jobTitle" name="job_title" value={this.state.workExperience.job_title} onChange={this.handleChange} />
                    <label htmlFor="companyName">Company name:</label>
                    <input type="text" id="companyName" name="company_name" value={this.state.workExperience.company_name} onChange={this.handleChange} />
                    <label htmlFor="workLocation">Work Location:</label>
                    <input type="text" id="workLocation" name="work_location" value={this.state.workExperience.work_location} onChange={this.handleChange} />
                    <label>From:</label>
                    <DatePicker
                        name="from"
                        selected={this.state.workExperience.from}
                        onChange={this.handleChangeDateFrom}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                    />
                    <label>To:</label>
                    <DatePicker
                        name="to"
                        selected={this.state.workExperience.to}
                        onChange={this.handleChangeDateTo}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                    />
                    <label>Tasks:</label>
                    <textarea name="tasks" value={this.state.workExperience.tasks} onChange={this.handleChange}></textarea>

                    <div className="div-btn2">
                        <button type="submit"><FaSave /> Add</button>
                    </div>
                </form>

                <h2>Work Experience List</h2>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.work_experience_array.length === 0 ?
                            <tr>
                                <td colSpan="8" style={{ textAlign: "center", }}>There is no work experience yet!</td>
                            </tr> :
                            this.props.work_experience_array.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.job_title}</td>
                                        <td>{item.company_name}</td>
                                        <td>{item.work_location}</td>
                                        <td>{this.handleDate(item.from)}</td>
                                        <td>{this.handleDate(item.to)}</td>
                                        <td><button className="Edit-btn" onClick={() => this.handleEdit(item.id)}><FaEdit /></button></td>
                                        <td><button className="Delete-btn" onClick={() => this.handleDelete(item.id)}><MdDeleteForever /></button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        work_experience_array: state.workExperienceReducer.work_experience,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_work_experience: (WE) => dispatch({ type: 'ADD_WORK_EXPERIENCE', WE }),
        delete_work_experience: (id) => dispatch({ type: 'DELETE_WORK_EXPERIENCE', id }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);