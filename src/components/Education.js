import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaSave, FaEdit, FaUniversity } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from "react-icons/bs";
import uniqid from 'uniqid';
import { connect } from 'react-redux';

class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            education: {
                id: uniqid(),
                degree_name: '',
                university_name: '',
                from: new Date(),
                to: new Date(),
            },
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDateFrom = this.handleChangeDateFrom.bind(this);
        this.handleChangeDateTo = this.handleChangeDateTo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.goDown = this.goDown.bind(this);
        this.goUp = this.goUp.bind(this);
    }

    handleChange(event) {
        this.setState({
            education: {
                ...this.state.education,
                [event.target.name]: event.target.value,
                id: uniqid(),
            },
        });
    }

    handleChangeDateFrom(date) {
        this.setState({
            education: {
                ...this.state.education,
                from: date,
            },
        });
    };

    handleChangeDateTo(date) {
        this.setState({
            education: {
                ...this.state.education,
                to: date,
            },
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        const edu = {
            id: this.state.education.id,
            degree_name: this.state.education.degree_name,
            university_name: this.state.education.university_name,
            from: this.state.education.from.toString(),
            to: this.state.education.to.toString(),
        }
        this.setState({
            education: {
                id: uniqid(),
                degree_name: '',
                university_name: '',
                from: new Date(),
                to: new Date(),
            },
        });
        this.props.add_education(edu);
    }

    handleEdit(id) {
        const edu = this.props.education_array.filter(item => item.id === id);
        this.setState({
            education: {
                id: edu[0].id,
                degree_name: edu[0].degree_name,
                university_name: edu[0].university_name,
                from: Date.parse(edu[0].from),
                to: Date.parse(edu[0].to),
            },
        });
        this.props.delete_education(id);
    }

    handleDelete(id) {
        this.props.delete_education(id);
    }

    goDown(index) {
        const arr = this.props.education_array;
        if(index < arr.length - 1 && arr.length > 1) {
            this.props.go_down(index);
        }

    }

    goUp(index) {
        if(index > 0) {
            this.props.go_up(index);
        }
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
                <h1>Education <FaUniversity /></h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" name="degree_name" value={this.state.education.degree_name} onChange={this.handleChange} />
                    <label htmlFor="university">University</label>
                    <input type="text" id="university" name="university_name" value={this.state.education.university_name} onChange={this.handleChange} />
                    <label htmlFor="from">From</label>
                    <DatePicker
                        name="from"
                        selected={this.state.education.from}
                        onChange={this.handleChangeDateFrom}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                    />
                    <label htmlFor="to">To</label>
                    <DatePicker
                        name="to"
                        selected={this.state.education.to}
                        onChange={this.handleChangeDateTo}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                    />
                    <div className="div-btn2">
                        <button type="submit"><FaSave /> Add</button>
                    </div>
                </form>

                <h2>Education List</h2>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>#</th>
                            <th>Degree</th>
                            <th>University</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.education_array.length === 0 ?
                            <tr>
                                <td colSpan="8" style={{ textAlign: "center", }}>There is no education degree yet!</td>
                            </tr> :
                            this.props.education_array.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td className="Arrows">
                                            <button className="Arrow-down-btn" onClick={() => this.goDown(index)}><BsFillArrowDownSquareFill /></button>
                                            <button className="Arrow-up-btn" onClick={() => this.goUp(index)}><BsFillArrowUpSquareFill /></button>
                                        </td>
                                        <td>{index + 1}</td>
                                        <td>{item.degree_name}</td>
                                        <td>{item.university_name}</td>
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
        education_array: state.educationReducer.education,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_education: (edu) => dispatch({ type: 'ADD_EDUCATION', edu }),
        delete_education: (id) => dispatch({ type: 'DELETE_EDUCATION', id }),
        go_down: (index) => dispatch({ type: 'GO_DOWN_EDUCATION', index }),
        go_up: (index) => dispatch({type: 'GO_UP_EDUCATION', index}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);