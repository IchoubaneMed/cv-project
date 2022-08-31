import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaSave, FaEdit } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

import { connect } from 'react-redux';

class Certifications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date: new Date(),
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
        this.props.title_action(this.state.title);
        this.props.date_action(this.state.date.toString());
        this.setState({
            title: '',
            date: new Date(),
        });
    }

    handleEdit() {
        this.setState({
            title: this.props.title,
            date: Date.parse(this.props.date),
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

const mapStateToProps = (state) => {
    return {
        title: state.certificationsReducer.title,
        date: state.certificationsReducer.date,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        title_action: (title) => dispatch({type: 'TITLE', title}),
        date_action: (date) => dispatch({type: 'DATE', date}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Certifications);