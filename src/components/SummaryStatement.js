import React, { Component } from "react";
import { FaSave, FaEdit } from "react-icons/fa";

class SummaryStatement extends Component {
    constructor() {
        super()

        this.state = {
            text: '',
            statement: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    };

    handleChange(event) {
        this.setState({
            text: event.target.value,
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            statement: [this.state.text],
            text: '',
        }); 
    };

    handleEdit() {
        this.setState({
            text: this.state.statement[0],
        });
    };

    render() {
        return(
            <div className="formSection">
                <h1>Summary Statement</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.handleChange} value={this.state.text}></textarea>

                    <div className="div-btn">
                        <button type="submit"><FaSave /> Add</button>
                        <button type="button" onClick={this.handleEdit}><FaEdit /> Edit</button>
                    </div>
                </form>

                <p>{this.state.statement[0]}</p>
            </div>
        );
    }
} 

export default SummaryStatement;