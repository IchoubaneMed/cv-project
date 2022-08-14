import React, { Component } from 'react'
import { BsNewspaper } from "react-icons/bs";


class Header extends Component {
    render() {
        return(
            <div>
                <h1><BsNewspaper /><span>CV Builder Application</span></h1>
            </div>
        );
    }
}

export default Header;