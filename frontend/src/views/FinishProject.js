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
                
                {/*/.project-details*/}
                <div className="project-btn text-center">
                    <Link to="/verproyecto" className="project-view">
                    view all
                    </Link>
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