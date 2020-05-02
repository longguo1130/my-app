import React from "react";
import "./styles.css";

function Menu() {
    return (
        <div className="menu">
            <div className="header-logo">
                <img src={require('../../assets/header-logo.png')}/>
            </div>
            <div className="menu-left">
                <div className="menu-left-content">
                    <h1>Work what we do</h1><h1> technologies why us</h1>
                </div>
            </div>
            <div className="menu-right">
                <div className="menu-right-content">
                    <h1> un projet web ?</h1>
                    <h1> une app ou un Saas ?</h1>
                    <h1 style={{color:'white'}}> nous les transformons </h1>
                </div>
                <div className="menu-right-next">
                    <a href="#">contactez-nous</a>
                </div>
            </div>
        </div>
    );
}

export default Menu;
