import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaSave, FaEdit } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from "react-icons/bs";
import uniqid from 'uniqid';

import { connect } from 'react-redux';

class Certifications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            certification: {
                id: uniqid(),
                title: '',
                date: new Date(),
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.goDown = this.goDown.bind(this);
        this.goUp = this.goUp.bind(this);
    }

    handleChange(event) {
        this.setState({
            certification: {
                ...this.state.certification,
                id: uniqid(),
                title: event.target.value
            },
        });
    }

    handleChangeDate(date) {
        this.setState({
            certification: {
                ...this.state.certification,
                date: date,
            },
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const certif = {
            id: this.state.certification.id,
            title: this.state.certification.title,
            date: this.state.certification.date.toString(),
        };
        this.setState({
            certification: {
                id: uniqid(),
                title: '',
                date: new Date(),
            }
        });
        this.props.certifications(certif);
    }

    handleEdit(id) {
        const certif = this.props.certificationsArray.filter(item => item.id === id);
        this.setState({
            certification: {
                id: certif[0].id,
                title: certif[0].title,
                date: Date.parse(certif[0].date),
            },
        });
        this.props.deleteCertification(id);
    }

    handleDelete(id) {
        this.props.deleteCertification(id);
    }

    goDown(index) {
        const arr = this.props.certificationsArray;
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
                <h1>Certifications <AiFillSafetyCertificate /></h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={this.state.certification.title} onChange={this.handleChange} />
                    <label htmlFor="date">Date</label>
                    <DatePicker
                        name="date"
                        id="date"
                        selected={this.state.certification.date}
                        onChange={this.handleChangeDate}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                    />

                    <div className="div-btn2">
                        <button type="submit"><FaSave /> Add</button>
                    </div>
                </form>
                <h2>Certifications List</h2>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>#</th>
                            <th>Certification</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Detele</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.certificationsArray.length === 0 ?
                            <tr>
                                <td colSpan="6" style={{ textAlign: "center", }}>There are no certifications yet!</td>
                            </tr> :
                            this.props.certificationsArray.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td className="Arrows">
                                            <button className="Arrow-down-btn" onClick={() => this.goDown(index)}><BsFillArrowDownSquareFill /></button>
                                            <button className="Arrow-up-btn" onClick={() => this.goUp(index)}><BsFillArrowUpSquareFill /></button>
                                        </td>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{this.handleDate(item.date)}</td>
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
        certificationsArray: state.certificationsReducer.certifications,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        certifications: (certifications) => dispatch({ type: 'CERTIFICATIONS', certifications }),
        deleteCertification: (id) => dispatch({ type: 'DELETECERTIFICATION', id }),
        go_down: (index) => dispatch({ type: 'GODOWN', index }),
        go_up: (index) => dispatch({type: 'GOUP', index}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Certifications);