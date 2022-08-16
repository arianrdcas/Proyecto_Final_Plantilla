
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Footer from "../components/Footer";

import bl2 from "../assets/images/blog/bl2.jpg";
import bl1 from "../assets/images/blog/bl1.jpg";
import bl4 from "../assets/images/blog/bl4.jpg";
import playicon from "../assets/images/blog/play-icon.png";
import bl3 from "../assets/images/blog/bl3.jpg";
import bl5 from "../assets/images/blog/bl5.jpg";
import bl6 from "../assets/images/blog/bl6.jpg";
import rp1 from "../assets/images/blog/rp1.jpg";
import rp2 from "../assets/images/blog/rp2.jpg";
import rp3 from "../assets/images/blog/rp3.jpg";

import StartNow from "./StarNow";
import { Link } from "react-router-dom";

const Blog = () => {

  const { store, actions } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (!store.isAuth) history.push("/");
    //actions.getProfile();
  }, []);
  
  return (
    <>
      {/*about-part start*/}
      <section className="about-part blog-part">
        <div className="container">
          <div className="about-part-details text-center">
            <h2>blog</h2>
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <ol className="breadcrumb">
                    <li>
                      <a href="/">home</a>
                      <span></span>
                    </li>
                    <li>
                      <Link to="/blog">blog</Link>
                    </li>
                  </ol>
                  {/*/.breadcrumb*/}
                </div>
                {/*/.container*/}
              </div>
              {/*/.breadcrumbs*/}
            </div>
            {/*/.about-part-content*/}
          </div>
          {/*/.about-part-details*/}
        </div>
        {/*/.container*/}
      </section>
      {/*/.about-part*/}
      {/*about-part end*/}

      {/*nwes start */}
      <section className="news">
        <div className="container">
          <div className="news-details">
            <div className="section-header text-center">
              <h2>our latest news</h2>
              <p>
                Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
            {/*/.section-header*/}
            <div className="news-card">
              <div className="row">
                <div className="col-md-8">
                  <div className="blog-left">
                    <div className="col-sm-6">
                      <div className="single-news-box news-mb-20">
                        <div className="news-box-bg">
                          <img src={bl2} alt="blog image" />
                          <div className="isotope-overlay">
                            <a href="blog_single.html">
                              <span className="lnr lnr-link" />
                            </a>
                          </div>
                        </div>
                        {/*/.team-box-bg*/}
                        <div className="news-box-inner">
                          <h3>
                            <Link to="blog_single.html">
                              The Pros and Cons of Starting an Online Consulting
                              Business
                            </Link>
                          </h3>
                          <p className="news-meta">
                            Posted By: <span>Mick Steven</span> // On{" "}
                            <span>12th June, 2017</span>
                          </p>
                          {/* <a href="#" class="learn-btn">
                                                                    learn more
                                                                </a> */}
                        </div>
                        {/*/.news-box-inner*/}
                      </div>
                      {/*/.single-news-box*/}
                      <div className="single-news-box news-mb-20">
                        <div className="news-box-bg">
                          <img src={bl1} alt="blog image" />
                          <div className="isotope-overlay">
                            <Link to="blog_single.html">
                              <span className="lnr lnr-link" />
                            </Link>
                          </div>
                        </div>
                        {/*/.team-box-bg*/}
                        <div className="news-box-inner">
                          <h3>
                            <Link to="blog_single.html">
                              The Pros and Cons of Starting an Online Consulting
                              Business
                            </Link>
                          </h3>
                          <p className="news-meta">
                            Posted By: <span>Mick Steven</span> // On{" "}
                            <span>12th June, 2017</span>
                          </p>
                          {/* <a href="#" class="learn-btn">
                                                                    learn more
                                                                </a> */}
                        </div>
                        {/*/.news-box-inner*/}
                      </div>
                      {/*/.single-news-box*/}
                      <div className="single-news-box news-mb-20">
                        <div className="news-box-bg">
                          <img src={bl4} alt="blog image" />
                          <div className="isotope-overlay">
                            <Link
                              to="https://www.youtube.com/watch?v=kr2aGgcrQjc&t=1s"
                              className="vedio-play-icon mfp-iframe"
                            >
                              <img src={playicon} alt="play-icon" />
                            </Link>
                          </div>
                        </div>
                        {/*/.news-box-bg*/}
                        <div className="news-box-inner">
                          <h3>
                            <Link to="#">
                              The Pros and Cons of Starting an Online Consulting
                              Business
                            </Link>
                          </h3>
                          <p className="news-meta">
                            Posted By: <span>Mick Steven</span> // On{" "}
                            <span>12th June, 2017</span>
                          </p>
                          {/* <a href="#" class="learn-btn">
                                                                    learn more
                                                                </a> */}
                        </div>
                        {/*/.news-box-inner*/}
                      </div>
                      {/*/.single-news-box*/}
                    </div>
                    {/*.col*/}
                    <div className=" col-sm-6">
                      <div className="single-news-box news-mb-20">
                        <div className="news-box-bg">
                          <img src={bl3} alt="blog image" />
                          <div className="isotope-overlay">
                            <Link to="blog_single.html">
                              <span className="lnr lnr-link" />
                            </Link>
                          </div>
                        </div>
                        {/*/.team-box-bg*/}
                        <div className="news-box-inner">
                          <h3>
                            <Link to="blog_single.html">
                              The Pros and Cons of Starting an Online Consulting
                              Business
                            </Link>
                          </h3>
                          <p className="news-meta">
                            Posted By: <span>Mick Steven</span> // On{" "}
                            <span>12th June, 2017</span>
                          </p>
                          {/* <a href="#" class="learn-btn">
                                                                    learn more
                                                                </a> */}
                        </div>
                        {/*/.news-box-inner*/}
                      </div>
                      {/*/.single-news-box*/}
                      <div className="single-news-box news-mb-20">
                        <div className="news-box-bg">
                          <img src={bl5} alt="blog image" />
                          <div className="isotope-overlay">
                            <Link to="blog_single.html">
                              <span className="lnr lnr-link" />
                            </Link>
                          </div>
                        </div>
                        {/*/.team-box-bg*/}
                        <div className="news-box-inner">
                          <h3>
                            <Link to="blog_single.html">
                              The Pros and Cons of Starting an Online Consulting
                              Business
                            </Link>
                          </h3>
                          <p className="news-meta">
                            Posted By: <span>Mick Steven</span> // On{" "}
                            <span>12th June, 2017</span>
                          </p>
                          {/* <a href="#" class="learn-btn">
                                                                    learn more
                                                                </a> */}
                        </div>
                        {/*/.news-box-inner*/}
                      </div>
                      {/*/.single-news-box*/}
                      <div className="single-news-box news-mb-20">
                        <div className="news-box-bg">
                          <img src={bl6} alt="blog image" />
                          <div className="isotope-overlay">
                            <Link href="blog_single.html">
                              <span className="lnr lnr-link" />
                            </Link>
                          </div>
                        </div>
                        {/*/.team-box-bg*/}
                        <div className="news-box-inner">
                          <h3>
                            <Link to="blog_single.html">
                              The Pros and Cons of Starting an Online Consulting
                              Business
                            </Link>
                          </h3>
                          <p className="news-meta">
                            Posted By: <span>Mick Steven</span> // On{" "}
                            <span>12th June, 2017</span>
                          </p>
                          {/* <a href="#" class="learn-btn">
                                                                    learn more
                                                                </a> */}
                        </div>
                        {/*/.news-box-inner*/}
                      </div>
                      {/*/.single-news-box*/}
                    </div>
                    {/*.col*/}
                    <div className="pagination-part text-center">
                      <ul className="pagination">
                        <li className="active">
                          <Link to="#">
                            1 <span className="sr-only">(current)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">2</Link>
                        </li>
                        <li>
                          <Link to="#">3</Link>
                        </li>
                        <li>
                          <Link to="#">
                            Next
                            <span className="fa fa-angle-right"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" aria-label="Next"></Link>
                        </li>
                      </ul>
                    </div>
                    {/*/.pagination-part(&raquo;)*/}
                  </div>
                  {/*/.blog-left*/}
                </div>
                {/*/.col*/}
                <div className="col-md-4">
                  <div className="blog-right">
                    <div className="blogs-widget">
                      <form>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                      </form>
                      {/*/.form*/}
                      <div className="blog-search-icon">
                        <Link to="#">
                          <span className="lnr lnr-magnifier"></span>
                        </Link>
                      </div>
                      {/*/.blog-search-icon*/}
                    </div>
                    {/*/.blog-widget*/}
                    <div className="blogs-widget">
                      <h2>categories</h2>
                      <div className="blog-categories-list">
                        <ul>
                          <li>
                            <Link to="#">all</Link>
                          </li>
                          <li>
                            <Link to="#">busisness</Link>
                          </li>
                          <li>
                            <Link to="#">consultency</Link>
                          </li>
                          <li>
                            <Link to="#">corporate</Link>
                          </li>
                          <li>
                            <Link to="#">politics</Link>
                          </li>
                          <li>
                            <Link to="#">marketing</Link>
                          </li>
                          <li>
                            <Link to="#">lifestyle</Link>
                          </li>
                        </ul>
                      </div>
                      {/*/.blog-categories-list*/}
                    </div>
                    {/*/.blog-widget*/}
                    <div className="blogs-widget">
                      <h2>related news</h2>
                      <div className="blog-related-news">
                        <div
                          className="bl-txt wow fadeInUp"
                          data-wow-duration=".7s"
                          data-wow-delay=".7s"
                        >
                          <div className="bl-img">
                            <Link to="#">
                              <img src={rp1} alt="image" />
                            </Link>
                          </div>
                          {/*/.bl-img*/}
                          <p>
                            <Link to="#">
                              CFOs focused on retaining key talent
                            </Link>
                            <span>25th Feb, 2017</span>
                          </p>
                        </div>
                        {/*/.bl-txt*/}
                        <div className="bl-txt">
                          <div className="bl-img">
                            <Link href="#">
                              <img src={rp2} alt="image" />
                            </Link>
                          </div>
                          {/*/.bl-img*/}
                          <p>
                            <Link to="#">
                              Accenture acquires for the undisclosed sum
                            </Link>
                            <span>25th Feb, 2017</span>
                          </p>
                        </div>
                        {/*/.bl-txt*/}
                        <div className="bl-txt">
                          <div className="bl-img">
                            <Link to="#">
                              <img src={rp3} alt="image" />
                            </Link>
                          </div>
                          {/*/.bl-img*/}
                          <p>
                            <Link to="#">
                              Startup investments drop on venturing rises
                            </Link>
                            <span>25th Feb, 2017</span>
                          </p>
                        </div>
                        {/*/.bl-txt*/}
                      </div>
                      {/*/.blog-related-news*/}
                    </div>
                    {/*/.blog-widget*/}
                    <div className="blogs-widget">
                      <h2>Archives</h2>
                      <div className="blog-categories-list">
                        <ul>
                          <li>
                            <Link to="#">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                              November 2017
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                              October 2017
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                              September 2017
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                              August 2017
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                              July 2017
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                              June 2017
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*/.blog-widget*/}
                    <div
                      className="blogs-widget
                                                    "
                    >
                      <h2>popular tags</h2>
                      <div className="blog-tags">
                        <button type="button" className="btn btn-default">
                          busisness
                        </button>
                        <button type="button" className="btn btn-default">
                          consultency
                        </button>
                        <button type="button" className="btn btn-default">
                          market
                        </button>
                        <br />
                        <button type="button" className="btn btn-default">
                          sales
                        </button>
                        <button type="button" className="btn btn-default">
                          corporate
                        </button>
                        <button type="button" className="btn btn-default">
                          politics
                        </button>
                      </div>
                      {/*/.blog-tags*/}
                    </div>
                    {/*/.blog-widget*/}
                  </div>
                  {/*/.blog-right*/}
                </div>
                {/*/.col*/}
              </div>
              {/*/.row*/}
            </div>
            {/*/.news-card*/}
          </div>
          {/*/news-details*/}
        </div>
        {/*/.container*/}
      </section>
      {/*/news*/}
      {/*news end*/}
      <StartNow />
      <Footer />
    </>
  );
};

export default Blog;
