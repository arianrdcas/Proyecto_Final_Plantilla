import React from "react";
import logo from  "../assets/images/logo/logo.png"

const Footer = () =>{
    return (
        <>
            {/*hm-footer start*/}
            <section className="hm-footer">
            <div className="container">
                <div className="hm-footer-details">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="hm-footer-widget">
                        <div className="hm-foot-title ">
                        <div className="logo">
                            <a href="index.html">
                            <img src={logo} alt="logo" />
                            </a>
                        </div>
                        {/* /.logo*/}
                        </div>
                        {/*/.hm-foot-title*/}
                        <div className="hm-foot-para">
                        <p>
                            Lorem ipsum dolor sit amt conetur adcing elit. Sed do eiusod
                            tempor utslr. Ut laboris nisi ut aute irure dolor in rein
                            velit esse.
                        </p>
                        </div>
                        {/*/.hm-foot-para*/}
                        <div className="hm-foot-icon">
                        <ul>
                            <li>
                            <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                            </li>
                            {/*/li*/}
                            <li>
                            <a href="#">
                                <i className="fa fa-google-plus" aria-hidden="true" />
                            </a>
                            </li>
                            {/*/li*/}
                            <li>
                            <a href="#">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                            </li>
                            {/*/li*/}
                            <li>
                            <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                            </li>
                            {/*/li*/}
                        </ul>
                        {/*/ul*/}
                        </div>
                        {/*/.hm-foot-icon*/}
                    </div>
                    {/*/.hm-footer-widget*/}
                    </div>
                    {/*/.col*/}
                    <div className=" col-md-2 col-sm-6 col-xs-12">
                    <div className="hm-footer-widget">
                        <div className="hm-foot-title">
                        <h4>Useful Links</h4>
                        </div>
                        {/*/.hm-foot-title*/}
                        <div className="footer-menu ">
                        <ul className="">
                            <li>
                            <a href="index.html">Home</a>
                            </li>
                            <li>
                            <a href="about.html">About</a>
                            </li>
                            <li>
                            <a href="services.html">Service</a>
                            </li>
                            <li>
                            <a href="portfolio.html">Portfolio</a>
                            </li>
                            <li>
                            <a href="blog.html">Blog</a>
                            </li>
                            <li>
                            <a href="contact.html">Contact us</a>
                            </li>
                        </ul>
                        </div>
                        {/* /.footer-menu*/}
                    </div>
                    {/*/.hm-footer-widget*/}
                    </div>
                    {/*/.col*/}
                    <div className=" col-md-3 col-sm-6 col-xs-12">
                    <div className="hm-footer-widget">
                        <div className="hm-foot-title">
                        <h4>from the news</h4>
                        </div>
                        {/*/.hm-foot-title*/}
                        <div className="hm-para-news">
                        <a href="blog_single.html">
                            The Pros and Cons of Starting an Online Business.
                        </a>
                        <span>12th June 2017</span>
                        </div>
                        {/*/.hm-para-news*/}
                        <div className="footer-line">
                        <div className="border-bottom" />
                        </div>
                        <div className="hm-para-news">
                        <a href="blog_single.html">
                            The Pros and Cons of Starting an Online Business.
                        </a>
                        <span>12th June 2017</span>
                        </div>
                        {/*/.hm-para-news*/}
                    </div>
                    {/*/.hm-footer-widget*/}
                    </div>
                    {/*/.col*/}
                    <div className=" col-md-3 col-sm-6  col-xs-12">
                    <div className="hm-footer-widget">
                        <div className="hm-foot-title">
                        <h4> Our Newsletter</h4>
                        </div>
                        {/*/.hm-foot-title*/}
                        <div className="hm-foot-para">
                        <p className="para-news">
                            Subscribe to our newsletter to get the latest News and
                            offers..
                        </p>
                        </div>
                        {/*/.hm-foot-para*/}
                        <div className="hm-foot-email">
                        <div className="foot-email-box">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                            />
                        </div>
                        {/*/.foot-email-box*/}
                        <div className="foot-email-subscribe">
                            <button type="button">go</button>
                        </div>
                        {/*/.foot-email-icon*/}
                        </div>
                        {/*/.hm-foot-email*/}
                    </div>
                    {/*/.hm-footer-widget*/}
                    </div>
                    {/*/.col*/}
                </div>
                {/*/.row*/}
                </div>
                {/*/.hm-footer-details*/}
            </div>
            {/*/.container*/}
            </section>
            {/*/.hm-footer-details*/}
            {/*hm-footer end*/}
            {/* footer-copyright start */}
            <footer className="footer-copyright">
            <div className="container">
                <div className="row">
                <div className="col-sm-7">
                    <div className="foot-copyright pull-left">
                    <p>
                        © All Rights Reserved. Designed and Developed by
                        <a href="https://www.themesine.com">ThemeSINE</a>
                    </p>
                    </div>
                    {/*/.foot-copyright*/}
                </div>
                {/*/.col*/}
                <div className="col-sm-5">
                    <div
                    className="foot-menu pull-right
                                "
                    >
                    <ul>
                        <li>
                        <a href="#">legal</a>
                        </li>
                        <li>
                        <a href="#">sitemap</a>
                        </li>
                        <li>
                        <a href="#">privacy policy</a>
                        </li>
                    </ul>
                    </div>
                    {/* /.foot-menu*/}
                </div>
                {/*/.col*/}
                </div>
                {/*/.row*/}
                <div id="scroll-Top">
                <i
                    className="fa fa-angle-double-up return-to-top"
                    id="scroll-top"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Back to Top"
                    aria-hidden="true"
                />
                </div>
                {/*/.scroll-Top*/}
            </div>
            {/* /.container*/}
            </footer>
            {/* /.footer-copyright*/}
            {/* footer-copyright end */}
        </>
        
    )
}
export default Footer; 