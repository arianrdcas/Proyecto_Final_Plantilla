import React from "react";

import { Link } from "react-router-dom";

const HeaderStartAuthen = () =>{

   /* //console.warn(user)

    const logout =() => {
        localStorage.clear();
        window.location.href = '/';
    } */

    return(
        <>
            {/*header start*/}
            <section className="header">
                <div className="container">
                <div className="header-left">
                    <ul className="pull-left">
                    <li>
                        <Link to="#">
                        <i className="fa fa-phone" aria-hidden="true" /> +992 563 542
                        </Link>
                    </li>
                    {/*/li*/}
                    <li>
                        <Link to="#">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        info@mail.com
                        </Link>
                    </li>
                    {/*/li*/}
                    </ul>
                    {/*/ul*/}
                </div>
                {/*/.header-left */}
                <div className="header-right pull-right">
                    <ul>
                    <li className="reg">
                        <Link to= "/home"/*  onClick = {logout} */> Log out  </Link>
                    </li>
                    {/*/li */}
                    <li>
                        <div className="social-icon">
                        <ul>
                            <li>
                            <Link to="#">
                                <i className="fa fa-facebook" />
                            </Link>
                            </li>
                            <li>
                            <Link to="#">
                                <i className="fa fa-google-plus" />
                            </Link>
                            </li>
                            <li>
                            <Link to="#">
                                <i className="fa fa-linkedin" />
                            </Link>
                            </li>
                            <li>
                            <Link to="#">
                                <i className="fa fa-twitter" />
                            </Link>
                            </li>
                        </ul>
                        {/*/.ul */}
                        </div>
                        {/*/.social-icon */}
                    </li>
                    {/*/li */}
                    </ul>
                    {/*/ul */}
                </div>
                {/*/.header-right */}
                </div>
                {/*/.container */}
            </section>
            {/*/.header*/}
            {/*header end*/}
            </>
    )
}

export default HeaderStartAuthen;