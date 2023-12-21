import React from "react";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>GPS CITY</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">APARTMENTS</a></li>
                    <li><a href="/">INDIVIDUAL HOUSE</a></li>
                    <li><a href="/">LAND/PLOTS</a></li>
                    <li><a href="/">CONTACT</a></li>
                    
                </ul>
            </nav>
            <div className="btn">
                <button type="button">Login</button>
                
            </div>
        </div>
    );
}
export default Header;