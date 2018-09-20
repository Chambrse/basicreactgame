import React, { Component } from "react";

class Navbar extends Component {
    
    
    componentDidMount() {
        console.log("compnoentdidmount");
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">ReactGame</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a>Score: { this.props.score }</a></li>
                        <li><a>Top Score: { this.props.topScore }</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
