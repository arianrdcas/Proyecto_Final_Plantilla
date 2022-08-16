import React from "react";
import { Link } from "react-router-dom";
import project1 from "../assets/images/project/project1.jpg";
import project2 from "../assets/images/project/project2.jpg";
import project3 from "../assets/images/project/project3.jpg";
import project4 from "../assets/images/project/project4.jpg";
import project5 from "../assets/images/project/project5.jpg";


const FinishProject = () =>{
    return (
        <>
            {/*project start*/}
            <section id="project" className="project">
                <div className="container">
                <div className="project-details">
                    <div className="project-header text-left">
                    <h2>Our Finished Projects</h2>
                    <p>Pallamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    {/*/.project-header*/}
                    <div className="project-content">
                    <div className="gallery-content">
                        <div className="isotope">
                        <div className="row">
                            <div className=" col-md-4 col-sm-12">
                            <div className="item big-height">
                                <img
                                src={project1}
                                alt="portfolio image"
                                />
                                <div className="isotope-overlay">
                                <Link to="project.html">
                                    <span className="lnr lnr-link" />
                                </Link>
                                <h3>
                                    <Link to="project.html">aquisition plan</Link>
                                </h3>
                                <p>busisness planning</p>
                                </div>
                                {/* /.isotope-overlay */}
                            </div>
                            {/* /.item */}
                            </div>
                            {/* /.col */}
                            <div className="col-md-8 col-sm-12">
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                <div className="item">
                                    <img
                                    src={project2}
                                    alt="portfolio image"
                                    />
                                    <div className="isotope-overlay">
                                    <Link to="project.html">
                                        <span className="lnr lnr-link" />
                                    </Link>
                                    <h3>
                                        <Link to="project.html">aquisition plan</Link>
                                    </h3>
                                    <p>busisness planning</p>
                                    </div>
                                    {/* /.isotope-overlay */}
                                </div>
                                {/* /.item */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-6 col-xs-12">
                                <div className="item">
                                    <img
                                    src={project3}
                                    alt="portfolio image"
                                    />
                                    <div className="isotope-overlay">
                                    <Link to="project.html">
                                        <span className="lnr lnr-link" />
                                    </Link>
                                    <h3>
                                        <Link to="project.html">aquisition plan</Link>
                                    </h3>
                                    <p>busisness planning</p>
                                    </div>
                                    {/* /.isotope-overlay */}
                                </div>
                                {/* /.item */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row*/}
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                <div className="item">
                                    <img
                                    src={project4}
                                    alt="portfolio image"
                                    />
                                    <div className="isotope-overlay">
                                    <Link to="project.html">
                                        <span className="lnr lnr-link" />
                                    </Link>
                                    <h3>
                                        <a href="project.html">aquisition plan</a>
                                    </h3>
                                    <p>busisness planning</p>
                                    </div>
                                    {/* /.isotope-overlay */}
                                </div>
                                {/* /.item */}
                                </div>
                                {/* /.col */}
                                <div className="col-sm-6 col-xs-12">
                                <div className="item">
                                    <img
                                    src={project5}
                                    alt="portfolio image"
                                    />
                                    <div className="isotope-overlay">
                                    <Link to="project.html">
                                        <span className="lnr lnr-link" />
                                    </Link>
                                    <h3>
                                        <Link to="project.html">aquisition plan</Link>
                                    </h3>
                                    <p>busisness planning</p>
                                    </div>
                                    {/* /.isotope-overlay */}
                                </div>
                                {/*/.item */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row*/}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                        </div>
                        {/*/.isotope*/}
                    </div>
                    {/*/.gallery-content*/}
                    </div>
                    {/*/.project-content*/}
                </div>
                {/*/.project-details*/}
                <div className="project-btn text-center">
                    <a href="project.html" className="project-view">
                    view all
                    </a>
                </div>
                {/*/.project-btn*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.project*/}
            {/*project end*/}
            </>

    )
}
export default FinishProject; 