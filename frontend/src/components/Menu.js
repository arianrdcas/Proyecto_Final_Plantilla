import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/images/logo/logo.png';
import { Context } from "../store/appContext";

const Menu = () => {

    const {store, actions}=useContext(Context)
   
    const location = useLocation();

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
                            <a className="navbar-brand" href="index.html">
                            <img src={logo} alt="logo" /> 
                            </a>
                        </div>
                        {/*/.navbar-header */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div
                            className="collapse navbar-collapse"
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <Link className={"nav-link " + (location.pathname === '/' ? "active" : "")} to= "/" >Home</Link>
                            </li>
                            <li>
                                <Link className={"nav-link " + (location.pathname === "/about" ? "active" : "")} to= "/about" >About</Link>
                            </li>
                            <li>
                                <Link className={"nav-link " + (location.pathname === "/service" ? "active" : "")} to="/service">Service</Link>
                            </li>
                            <li>
                                <Link className={"nav-link " + (location.pathname === "/project" ? "active" : "")} to="/project">Project</Link>
                            </li>
                            <li>
                                <Link className={"nav-link " + (location.pathname === "/team" ? "active" : "")} to="/team">Team</Link>
                            </li>
                            <li>
                                <Link className={"nav-link " + (location.pathname === "/blog" ? "active" : "")} to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link className={"nav-link " + (location.pathname === "/contact" ? "active" : "")} to="/contact">Contact</Link>
                            </li>
                            <li>
                                <a href="/#">
                                <span className="lnr lnr-cart" />
                                </a>
                            </li>
                            <li className="search">
                                <form action="">
                                <input type="text" name="search" placeholder="Search...." />
                                <a href="/#">
                                    <span className="lnr lnr-magnifier" />
                                </a>
                                </form>
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
export default Menu; 