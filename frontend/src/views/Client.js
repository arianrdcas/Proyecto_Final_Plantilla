import React from "react";
import { Link } from "react-router-dom";
import testimonio from "../assets/images/client/testimonial1.jpg"
import testimonial1 from "../assets/images/client/testimonial1.jpg"
import testimonial2 from "../assets/images/client/testimonial2.jpg"



const Client = () =>{
    return (
        <>
            {/* testemonial Start */}
            <section className="testemonial">
                <div className="container">
                <div className="section-header text-center">
                    <h2>
                    <span>what our client say about us</span>
                    </h2>
                </div>
                {/*/.section-header*/}
                <div className="owl-carousel owl-theme" id="testemonial-carousel">
                    <div className="home1-testm item">
                    <div className="home1-testm-single text-center">
                        <div className="home1-testm-img">
                        <img src={testimonial1} alt="img" />
                        </div>
                        {/*/.home1-testm-img*/}
                        <div className="home1-testm-txt">
                        <span className="icon section-icon">
                            <i className="fa fa-quote-left" aria-hidden="true" />
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet conse adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam..
                        </p>
                        <h3>
                            <Link to="#">kevin watson</Link>
                        </h3>
                        <h4>CEO, Kingston</h4>
                        </div>
                        {/*/.home1-testm-txt*/}
                    </div>
                    {/*/.home1-testm-single*/}
                    </div>
                    {/*/.item*/}
                    <div className="home1-testm item">
                    <div className="home1-testm-single text-center">
                        <div className="home1-testm-img">
                        <img src={testimonial2} alt="img" />
                        </div>
                        {/*/.home1-testm-img*/}
                        <div className="home1-testm-txt">
                        <span className="icon section-icon">
                            <i className="fa fa-quote-left" aria-hidden="true" />
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet conse adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam..
                        </p>
                        <h3>
                            <Link to="#">kevin watson</Link>
                        </h3>
                        <h4>CEO, Kingston</h4>
                        </div>
                        {/*/.home1-testm-txt*/}
                    </div>
                    {/*/.home1-testm-single*/}
                    </div>
                    {/*/.item*/}
                    <div className="home1-testm item">
                    <div className="home1-testm-single text-center">
                        <div className="home1-testm-img">
                        <img src={testimonio} alt="img" />
                        </div>
                        {/*/.home1-testm-img*/}
                        <div className="home1-testm-txt">
                        <span className="icon section-icon">
                            <i className="fa fa-quote-left" aria-hidden="true" />
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet conse adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam..
                        </p>
                        <h3>
                            <Link to="#">kevin watson</Link>
                        </h3>
                        <h4>CEO, Kingston</h4>
                        </div>
                        {/*/.home1-testm-txt*/}
                    </div>
                    {/*/.home1-testm-single*/}
                    </div>
                    {/*/.item*/}
                </div>
                {/*/.testemonial-carousel*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.testimonial*/}
            {/* testemonial End */}
            </>
    )
}
export default Client; 