import React from "react";
import CardTeam from "./CardTeam";
import team from "../assets/images/team/team.jpg";
import { Link } from "react-router-dom";


const Team = () =>{
    return (
        <>
        {/*team start */}
        <section className="team">
            <div className="container">
            <div className="team-details">
                <div className="project-header team-header text-left">
                <h2>Our expert team</h2>
                <p>Pallamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                {/*/.project-header*/}
                <div className="team-card">
                <div className="container">
                    <div className="row">
                    <div className="owl-carousel  team-carousel">
                        <div className="col-sm-3 col-xs-12">
                        <div className="single-team-box team-box-bg-1">
                            <div className="team-box-inner">
                            <h3>tom hanks</h3>
                            <p className="team-meta">Founder &amp; CEO</p>
                            <Link to="team.html" className="learn-btn">
                                learn more
                            </Link>
                            </div>
                            {/*/.team-box-inner*/}
                        </div>
                        {/*/.single-team-box*/}
                        </div>
                        {/*.col*/}
                        <div className="col-sm-3 col-xs-12">
                        <div className="single-team-box team-box-bg-2">
                            <div className="team-box-inner">
                            <h3>alex browne</h3>
                            <p className="team-meta">
                                Director, Management &amp; Research
                            </p>
                            <Link to="team.html" className="learn-btn">
                                learn more
                            </Link>
                            </div>
                            {/*/.team-box-inner*/}
                        </div>
                        {/*/.single-team-box*/}
                        </div>
                        {/*.col*/}
                        <div className="col-sm-3 col-xs-12">
                        <div className="single-team-box team-box-bg-3">
                            <div className="team-box-inner">
                            <h3>darren j. stevens</h3>
                            <p className="team-meta">Director, Finance Solution</p>
                            <Link to="team.html" className="learn-btn">
                                learn more
                            </Link>
                            </div>
                            {/*/.team-box-inner*/}
                        </div>
                        {/*/.single-team-box*/}
                        </div>
                        {/*.col*/}
                        <div className="col-sm-3 col-xs-12">
                        <div className="single-team-box team-box-bg-4">
                            <div className="team-box-inner">
                            <h3>kevin thomson</h3>
                            <p className="team-meta">Head, Legal Advising</p>
                            <Link to="team.html" className="learn-btn">
                                learn more
                            </Link>
                            </div>
                            {/*/.team-box-inner*/}
                        </div>
                        {/*/.single-team-box*/}
                        </div>
                        {/*.col*/}
                    </div>
                    {/*/.team-carousel*/}
                    </div>
                    {/*/.row*/}
                </div>
                {/*/.container*/}
                </div>
                {/*/.team-card*/}
            </div>
            {/*/.team-details*/}
            </div>
            {/*/.container*/}
        </section>
        {/*/.team*/}
        {/*team end*/}
        </>

    )
}
export default Team; 