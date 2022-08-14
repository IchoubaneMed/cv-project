import React, { Component } from 'react'
import { FaSave, FaEdit } from "react-icons/fa";

class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expert: '',
            advanced: '',
            familiar: '',
            skills: [],
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
        this.setState({
            skills: [
                this.state.expert,
                this.state.advanced,
                this.state.familiar,
            ],
            expert: '',
            advanced: '',
            familiar: '',
        });
    }

    handleEdit() {
        this.setState({
            expert: this.state.skills[0],
            advanced: this.state.skills[1],
            familiar: this.state.skills[2],
        });
    }

    render() {
        return(
            <div className="formSection">
                <h1>Sills</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="exp">Expert</label>
                    <input type="text" id="exp" name="expert" placeholder="Java, Python, C++, React, JavaScript, SQL, Git" value={this.state.expert} onChange={this.handleChange}/>
                    <label htmlFor="adv">Advanced</label>
                    <input type="text" id="adv" name="advanced" placeholder="Node.js, Rust, HTML5, CSS3, Android" value={this.state.advanced} onChange={this.handleChange}/>
                    <label htmlFor="fa">Familier</label>
                    <input type="text" id="fa" name="familiar" placeholder="Ruby, Swift, Web Design" value={this.state.familiar} onChange={this.handleChange}/>

                    <div className="div-btn">
                        <button type="submit"><FaSave /> Add</button>
                        <button type="button" onClick={this.handleEdit}><FaEdit /> Edit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Skills;