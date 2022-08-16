import React from "react";
import { Link } from "react-router-dom";


const CardTeam = (props) =>{
    return (
        <div className="single-team-box team-box-bg-1">
                <div className="team-box-inner">
                <h3>tom hanks</h3>
                <p className="team-meta">Founder &amp; CEO</p>
                <Link to="/#" className="learn-btn">{props.image}</Link>
                 learn more
                </div>
                
        </div>
    )
}
export default CardTeam; 