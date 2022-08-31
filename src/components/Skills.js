import React, { Component } from 'react'
import { FaSave, FaEdit } from "react-icons/fa";
import { GiBattery75 } from "react-icons/gi";

import { connect } from 'react-redux';

class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expert: '',
            advanced: '',
            familiar: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.expert_action(this.state.expert);
        this.props.advanced_action(this.state.advanced);
        this.props.familiar_action(this.state.familiar);
        this.setState({
            expert: '',
            advanced: '',
            familiar: '',
        });
    }

    handleEdit() {
        this.setState({
            expert: this.props.expert,
            advanced: this.props.advanced,
            familiar: this.props.familiar,
        });
    }

    render() {
        return (
            <div className="formSection">
                <h1>Sills <GiBattery75 /></h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="exp">Expert</label>
                    <input type="text" id="exp" name="expert" placeholder="Java, Python, C++, React, JavaScript, SQL, Git" value={this.state.expert} onChange={this.handleChange} />
                    <label htmlFor="adv">Advanced</label>
                    <input type="text" id="adv" name="advanced" placeholder="Node.js, Rust, HTML5, CSS3, Android" value={this.state.advanced} onChange={this.handleChange} />
                    <label htmlFor="fa">Familier</label>
                    <input type="text" id="fa" name="familiar" placeholder="Ruby, Swift, Web Design" value={this.state.familiar} onChange={this.handleChange} />

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
        expert: state.skillsReducer.expert,
        advanced: state.skillsReducer.advanced,
        familiar: state.skillsReducer.familiar,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        expert_action: (expert) => dispatch({type: 'EXPERT', expert}),
        advanced_action: (advanced) => dispatch({type: 'ADVANCED', advanced}),
        familiar_action: (familiar) => dispatch({type: 'FAMILIER', familiar}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);