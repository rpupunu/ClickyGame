import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="header">
            <p id="headerLeft"> Pics Clicky Game </p>
            <p id="headerRight">Score: </p>
        </div>
    );
}

export default Header;