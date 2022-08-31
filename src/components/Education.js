import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaSave, FaEdit, FaUniversity } from "react-icons/fa";

import { connect } from 'react-redux';

class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            degree_name: '',
            university_name: '',
            from: new Date(),
            to: new Date(),
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDateFrom = this.handleChangeDateFrom.bind(this);
        this.handleChangeDateTo = this.handleChangeDateTo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

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
        this.props.degree_name_action(this.state.degree_name);
        this.props.university_name_action(this.state.university_name);
        this.props.from_education_action(this.state.from.toString());
        this.props.to_education_action(this.state.to.toString());
        this.setState({
            degree_name: '',
            university_name: '',
            from: new Date(),
            to: new Date(),
        });
    }

    handleEdit() {
        this.setState({
            degree_name: this.props.degree_name,
            university_name: this.props.university_name,
            from: this.props.from_education === '' ? new Date() : Date.parse(this.props.from_education),
            to: this.props.to_education === '' ? new Date() : Date.parse(this.props.to_education),
        });
    }

    render() {
        return(
            <div className="formSection">
                <h1>Education <FaUniversity /></h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" name="degree_name" value={this.state.degree_name} onChange={this.handleChange}/>
                    <label htmlFor="university">University</label>
                    <input type="text" id="university" name="university_name" value={this.state.university_name} onChange={this.handleChange}/>
                    <label htmlFor="from">From</label>
                    <DatePicker 
                            name="from"
                            selected={this.state.from}
                            onChange={this.handleChangeDateFrom}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            showFullMonthYearPicker
                        />
                    <label htmlFor="to">To</label>
                    <DatePicker 
                            name="to"
                            selected={this.state.to}
                            onChange={this.handleChangeDateTo}
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
        degree_name: state.educationReducer.degree_name,
        university_name: state.educationReducer.university_name,
        from_education: state.educationReducer.from_education,
        to_education: state.educationReducer.to_education,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        degree_name_action: (degree) => dispatch({type: 'DEGREENAME', degree}),
        university_name_action: (university) => dispatch({type: 'UNIVERSITYNAME', university}),
        from_education_action: (from_education) => dispatch({type: 'FROMEDUCATION', from_education}),
        to_education_action: (to_education) => dispatch({type: 'TOEDUCATION', to_education}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);