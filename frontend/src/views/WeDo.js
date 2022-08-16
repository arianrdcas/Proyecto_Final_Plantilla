import React from "react";

import CardWedo from "./CardWedo";
import consultency from '../assets/images/home/consultency.png';
import bussines from '../assets/images/home/busisness_grow.png';
import support from '../assets/images/home/support-logo.png';


const WeDo = () =>{
    return (
        <>
        <section className="we-do">
            <div className="container">
                <div className="we-do-details">
                    <div className="section-header text-center">
                        <h2>what we do</h2>
                        <p>
                            Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        </div>
                        <div className="we-do-carousel">
                        <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <CardWedo 
                                        image={consultency}
                                        title="Business Consultancy"
                                        descripcion="Descripcion 1"
                                    />
                                </div>
                                
                                <div className="col-sm-4 col-xs-12">
                                    <CardWedo
                                        image={bussines}
                                        title="Help To Grow Business"
                                        descripcion="Descripcion 2"
                                    />
                                </div>

                                <div className="col-sm-4 col-xs-12">
                                    <CardWedo 
                                        image={support}
                                        title="Great Support"
                                        descripcion="Descripcion 3"
                                    />
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}
export default WeDo; 