import React from "react";


const CardPricingTable = (props) =>{
    return (
        <div className="pricing-box">
            <div className="pricing-header">
                <h2>{props.oferta}</h2>
                <h3 className="packeg_p"> <span>$</span>{props.precio}</h3>
                <p>{props.periodo}</p>
            </div>
            <ul className="plan-lists">
                <li>{props.user}</li>
                <li>{props.project}</li>
                <li>{props.advisor}</li>
                <li>{props.statistics}</li>
                <li>{props.email}</li>
            </ul>
            
            <div className="project-btn pricing-btn text-center">
            <a href="project.html" className="project-view">
                Sign Up Now
            </a>
            </div>
            
        </div>
        
        
    )
}
export default CardPricingTable; 