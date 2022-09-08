import React, { useContext } from "react";
//import { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import logo from '../assets/images/logo/logo.png';
import { Context } from "../store/appContext";

const Menu = () => {

    const {store, actions}=useContext(Context)
    const history = useHistory()
    const location = useLocation();

    /* useEffect(() => {
        if(store.isAuth) history.push('/');
    }, []); */

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
                            <li className="nav-item">
                                <Link className="nav-link active" to= "/" >Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link active "  to="/project">Project</Link>
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