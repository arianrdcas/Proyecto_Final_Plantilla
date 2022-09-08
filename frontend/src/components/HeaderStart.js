import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'
import Login from "./LoginUser";
import Register from "./Register";


const HeaderStart = () =>{

    const{actions,store}=useContext(Context); 

    const{registro} = actions;

    const history = useHistory()

    const isAuth = store.isAuth

    const logout = () =>{
        actions.logout(history)
    };

    return(
        <>
            {/*header start*/}
            <section className="header">
                <div className="container">
                <div className="header-left">
                    <ul className="pull-left">
                    <li>
                        <a href="#">
                        <i className="fa fa-phone" aria-hidden="true" /> +992 563 542
                        </a>
                    </li>
                    {/*/li*/}
                    <li>
                        <a href="#">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        info@mail.com
                        </a>
                    </li>
                    {/*/li*/}
                    </ul>
                    {/*/ul*/}
                </div>
                {/*/.header-left */}
                <div className="header-right pull-right">
                
                    <ul>{ !isAuth ?
                        <li className="reg">
                            <Link to='/loginuser'  data-target=".bs-example-modal-sm">
                                Log in 
                            </Link>
                            /
                            <Link to='/registro'  data-target=".bs-example-modal-lg">
                                Register
                            </Link>
                        </li>
                        :
                            <Link onClick={logout} type="button" className="reg">
                                Logout
                            </Link>
                        } 
                            {/*  */}
                        {/*/li */}
                        <li>
                        <div className="social-icon">
                        <ul>
                            <li>
                                {
                                    !!store.currentUser && (
                                    <>
                                        <a><i className="fa-solid fa-user"/></a>
                                        <a><h3 className="user">{store?.currentUser?.user?.name}</h3></a>
                                    
                                    </>
                                    )
                                }
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-facebook" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-google-plus" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-linkedin" />
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="fa fa-twitter" />
                            </a>
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

export default HeaderStart;