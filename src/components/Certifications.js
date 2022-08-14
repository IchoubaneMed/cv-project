import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaSave, FaEdit } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";


class Certifications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date: new Date(),
            certifications: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(event) {
        this.setState({
            title: event.target.value,
        });
    }

    handleChangeDate(date) {
        this.setState({
            date: date,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            certifications: [
                this.state.title,
                this.state.date,
            ],
            title: '',
            date: new Date(),
        });
    }

    handleEdit() {
        this.setState({
            title: this.state.certifications[0],
            date: this.state.certifications[1],
        });
    }

    render() {
        return(
            <div className="formSection">
                <h1>Certifications <AiFillSafetyCertificate /></h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={this.state.title} onChange={this.handleChange}/>
                    <label htmlFor="date">Date</label>
                    <DatePicker 
                        name="date"
                        id="date"
                        selected={this.state.date}
                        onChange={this.handleChangeDate}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFullMonthYearPicker
                    />

                    <div className="div-btn">
                        <button type="submit"><FaSave /> Add</button>
                        <button type="button" onClick={this.handleEdit}><FaEdit /> Edit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Certifications;