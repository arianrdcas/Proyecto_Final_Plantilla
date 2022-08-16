import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";

import Footer from "../components/Footer";

import ab1 from "../assets/images/about/ab1.jpg";
import ab2 from "../assets/images/about/ab2.jpg";

import Estadistica from "./Estadistica";
import WeDo from "./WeDo";
import Client from "./Client";
import StartNow from "./StarNow";


const ViewAbout = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (!store.isAuth) history.push("/");
    //actions.getProfile();
  }, []);

  return (
    <>
      {/*about-part start*/}
      <section className="about-part">
        <div className="container">
          <div className="about-part-details text-center">
            <h2>about us</h2>
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <ol className="breadcrumb">
                    <li>
                      <a href="/">home</a>
                      <span></span>
                    </li>
                    <li>
                      <a href="/about">about</a>
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
      {/*about-history start*/}
      <div className="about-history">
        <div className="container">
          <div className="about-history-content">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <div className="single-about-history">
                  <div className="about-history-img">
                    <img src={ab1} alt="about" />
                  </div>
                  {/*/.about-history-img*/}
                </div>
                {/*/.single-about-history*/}
              </div>
              {/*/.col*/}
              <div className="col-md-offset-1 col-md-6 col-sm-12">
                <div className="single-about-history">
                  <div className="about-history-txt">
                    <h2>our history</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adiping elit, sed
                      do eiusmod tempor incidd ut labore rhei et dolore magna
                      aliqua. Ut enim ad veniam, quis laboris nisi ut aliquip ex
                      ea commodo. Duis aute irure dolor in repre voluptate in
                      the velit esse.
                    </p>
                    <div className="main-timeline">
                      <div className="row">
                        <div className="col-md-2 col-sm-2">
                          <div className="experience-time">
                            <h3>2002</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-10 col-sm-10">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                {" "}
                                <span>
                                  <i
                                    className="fa fa-circle-o"
                                    aria-hidden="true"
                                  />
                                </span>
                              </h4>
                              <ul className="description">
                                <li>
                                  Duis aute irure dolor in reprehenderit in the
                                  voluptate velit esse cillum dolore eu ugiat
                                  nulla pariatur cupiat non proident.
                                </li>
                              </ul>
                            </div>
                            {/*/.timeline-content*/}
                          </div>
                          {/*/.timeline*/}
                        </div>
                        {/*/.col*/}
                      </div>
                      {/*/.row*/}
                      <div className="row">
                        <div className="col-md-2 col-sm-2">
                          <div className="experience-time">
                            <h3>2007</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-10 col-sm-10">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                {" "}
                                <span>
                                  <i
                                    className="fa fa-circle-o"
                                    aria-hidden="true"
                                  />
                                </span>
                              </h4>
                              <ul className="description">
                                <li>
                                  Duis aute irure dolor in reprehenderit in the
                                  voluptate velit esse cillum dolore eu ugiat
                                  nulla pariatur cupiat non proident.
                                </li>
                              </ul>
                            </div>
                            {/*/.timeline-content*/}
                          </div>
                          {/*/.timeline*/}
                        </div>
                        {/*/.col*/}
                      </div>
                      {/*/.row*/}
                      <div className="row">
                        <div className="col-md-2 col-sm-2">
                          <div className="experience-time">
                            <h3>2012</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-10 col-sm-10">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                {" "}
                                <span>
                                  <i
                                    className="fa fa-circle-o"
                                    aria-hidden="true"
                                  />
                                </span>
                              </h4>
                              <ul className="description">
                                <li>
                                  Duis aute irure dolor in reprehenderit in the
                                  voluptate velit esse cillum dolore eu ugiat
                                  nulla pariatur cupiat non proident.
                                </li>
                              </ul>
                            </div>
                            {/*/.timeline-content*/}
                          </div>
                          {/*/.timeline*/}
                        </div>
                        {/*/.col*/}
                      </div>
                      {/*/.row*/}
                      <div className="row">
                        <div className="col-md-2 col-sm-2">
                          <div className="experience-time">
                            <h3>2016</h3>
                          </div>
                          {/*/.experience-time*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-md-10 col-sm-10">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                {" "}
                                <span>
                                  <i
                                    className="fa fa-circle-o"
                                    aria-hidden="true"
                                  />
                                </span>
                              </h4>
                              <ul className="description">
                                <li>
                                  Duis aute irure dolor in reprehenderit in the
                                  voluptate velit esse cillum dolore eu ugiat
                                  nulla pariatur cupiat non proident.
                                </li>
                              </ul>
                            </div>
                            {/*/.timeline-content*/}
                          </div>
                          {/*/.timeline*/}
                        </div>
                        {/*/.col*/}
                      </div>
                      {/*/.row*/}
                    </div>
                    {/*.main-timeline*/}
                  </div>
                  {/*/.about-history-txt*/}
                </div>
                {/*/.single-about-history*/}
              </div>
              {/*/.col*/}
            </div>
            {/*/.row*/}
            <div className="row">
              <div className="about-vission-content">
                <div className="col-md-6 col-sm-12">
                  <div className="single-about-history">
                    <div className="about-history-txt">
                      <h2>vision and mission</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiping elit,
                        sed do eiusmod tempor incidd ut labore rhei et dolore
                        magna aliqua. Ut enim ad veniam, quis laboris nisi ut
                        aliquip ex ea commodo. Duis aute irure dolor in repre
                        voluptate in the velit esse.
                      </p>
                      <div className="main-timeline  xtra-timeline">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="timeline timeline-ml-20">
                              <div className="timeline-content">
                                <h4 className="title">
                                  {" "}
                                  <span>
                                    <i
                                      className="fa fa-circle-o"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </h4>
                                <ul className="description">
                                  <li>
                                    Duis aute irure dolor in reprehenderit in
                                    the voluptate velit esse cillum dolore eu
                                    ugiat nulla pariatur cupiat non proident.
                                  </li>
                                </ul>
                              </div>
                              {/*/.timeline-content*/}
                            </div>
                            {/*/.timeline*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="timeline timeline-ml-20">
                              <div className="timeline-content">
                                <h4 className="title">
                                  {" "}
                                  <span>
                                    <i
                                      className="fa fa-circle-o"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </h4>
                                <ul className="description">
                                  <li>
                                    Duis aute irure dolor in reprehenderit in
                                    the voluptate velit esse cillum dolore eu
                                    ugiat nulla pariatur cupiat non proident.
                                  </li>
                                </ul>
                              </div>
                              {/*/.timeline-content*/}
                            </div>
                            {/*/.timeline*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="timeline timeline-ml-20">
                              <div className="timeline-content">
                                <h4 className="title">
                                  {" "}
                                  <span>
                                    <i
                                      className="fa fa-circle-o"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </h4>
                                <ul className="description">
                                  <li>
                                    Duis aute irure dolor in reprehenderit in
                                    the voluptate velit esse cillum dolore eu
                                    ugiat nulla pariatur cupiat non proident.
                                  </li>
                                </ul>
                              </div>
                              {/*/.timeline-content*/}
                            </div>
                            {/*/.timeline*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                      </div>
                      {/*.main-timeline*/}
                    </div>
                    {/*/.about-history-txt*/}
                  </div>
                  {/*/.single-about-history*/}
                </div>
                {/*/.col*/}
                <div className="col-md-offset-1 col-md-5 col-sm-12">
                  <div className="single-about-history">
                    <div className="about-history-img">
                      <img src={ab2} alt="about" />
                    </div>
                    {/*/.about-history-img*/}
                  </div>
                  {/*/.single-about-history*/}
                </div>
                {/*/.col*/}
              </div>
              {/*/.about-vission-content*/}
            </div>
            {/*/.row*/}
          </div>
          {/*/.about-history-content*/}
        </div>
        {/*/.container*/}
      </div>
      {/*/.about-history*/}
      {/*about-history end*/}
      <Estadistica />
      <WeDo />
      <Client />
      <StartNow />
      <Footer />
    </>
  );
};

export default ViewAbout;
