import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo/logo.png';

const MenuAuthen = () =>{

    /* let user = JSON.parse(localStorage.getItem('user-info')) */

    return (
        <>
            {/*menu start*/}
            <section id="menu">
                <div className="container">
                    <div className="menubar">
                        <nav className="navbar navbar-default">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false"
                            >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            </button>
                            <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" /> 
                            </Link>
                        </div>
                        {/*/.navbar-header */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div
                            className="collapse navbar-collapse"
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active">
                                    <Link to="/gestionar">Principal</Link>
                                </li>
                                <li>
                                    <Link to="/gservice">Service</Link>
                                </li>
                            </ul>
                            {/* / ul */}
                        </div>
                        {/* /.navbar-collapse */}
                        </nav>
                        {/*/nav */}
                    </div>
                    {/*/.menubar */}
                    </div>
                {/* /.container */}
            </section>
            {/*/#menu*/}
            {/*menu end*/}
            </>

    )
}
export default MenuAuthen; 