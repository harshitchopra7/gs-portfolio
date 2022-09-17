import React from "react";
import './Navbar.css'

function Navbar() {

    const name = "<HC />"

    return (
        <div className="navbar_container">
            {/* Left Div  */}
            <div className="navbar_left">
                {name}
            </div>
            {/* Right Div  */}
            <div className="navbar_right">
                <a>About</a>
                <a>Tools</a>
                <a>Experience</a>
                <a>Projects</a>
            </div>
        </div>
    )
}
export default Navbar;