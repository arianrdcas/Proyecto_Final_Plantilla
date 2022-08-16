import React from "react";
import { Link } from "react-router-dom";
import aboutpart from "../assets/images/about/about-part.jpg";

const About = () =>{
    return (
        <>
            {/*about-us start */}
            <section className="about-us">
                <div className="container">
                <div className="about-us-content">
                    <div className="row">
                    <div className="col-sm-6">
                        <div className="single-about-us">
                        <div className="about-us-txt">
                            <h2>about us</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                            <div className="project-btn">
                            <Link to="#" className="project-view">
                                learn more
                            </Link>
                            </div>
                            {/*/.project-btn*/}
                        </div>
                        {/*/.about-us-txt*/}
                        </div>
                        {/*/.single-about-us*/}
                    </div>
                    {/*/.col*/}
                    <div className="col-sm-6">
                        <div className="single-about-us">
                        <div className="about-us-img">
                            <img
                            src={aboutpart}
                            alt="about images"
                            />
                        </div>
                        {/*/.about-us-img*/}
                        </div>
                        {/*/.single-about-us*/}
                    </div>
                    {/*/.col*/}
                    </div>
                    {/*/.row*/}
                </div>
                {/*/.about-us-content*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.about-us*/}
            {/*about-us end */}
        </>
    )
}
export default About; 