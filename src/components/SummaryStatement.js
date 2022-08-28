import React, { Component } from "react";
import { FaSave, FaEdit } from "react-icons/fa";
import { MdSummarize } from "react-icons/md";

import { connect } from 'react-redux';

class SummaryStatement extends Component {
    constructor() {
        super()

        this.state = {
            text: '',
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
        this.props.addStatement(this.state.text)
        this.setState({
            text: '',
        }); 
    };

    handleEdit() {
        this.setState({
            text: this.props.statement,
        });
    };

    render() {
        return(
            <div className="formSection">
                <h1>Summary Statement <MdSummarize /></h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.handleChange} value={this.state.text}></textarea>

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
        statement: state.summaryStatementReducer.statement,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStatement: (statement) => dispatch({type: 'STATEMENT', statement}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryStatement);