import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaSave, FaEdit } from "react-icons/fa";

class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            degree_name: '',
            university_name: '',
            from: new Date(),
            to: new Date(),
            education: [],
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
        this.setState({
            education: [
                this.state.degree_name,
                this.state.university_name,
                this.state.from,
                this.state.to,
            ],
            degree_name: '',
            university_name: '',
            from: new Date(),
            to: new Date(),
        });
    }

    handleEdit() {
        this.setState({
            degree_name: this.state.education[0],
            university_name: this.state.education[1],
            from: this.state.education[2],
            to: this.state.education[3],
        });
    }

    render() {
        return(
            <div className="formSection">
                <h1>Education</h1>
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

export default Education;