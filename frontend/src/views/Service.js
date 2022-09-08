import React, {useState, useEffect} from "react";
import CardService from "./CardService";
import service1 from "../assets/images/service/service1.png";
import service2 from "../assets/images/service/service2.png";
import service3 from "../assets/images/service/service3.png";

let ruta_image = "../assets/images/service/";

const Services = () =>{

    const [servicios] = useState([]);


    return (
        <>
        <section className="we-do">
            <div className="container">
                <div className="we-do-details">
                    <div className="section-header text-center">
                        <h2>Our Services</h2>
                        <p>
                            Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        </div>
                        <div className="we-do-carousel">
                        <div className="row">

                        {servicios && servicios.map(servicio =>{
                            return (
                                <div key= {servicio.id}>
                                    <div className="col-sm-4 col-xs-12">
                                            <CardService
                                                    image={servicio.image}
                                                    title={servicio.title}
                                                    descripcion= {servicio.description}
                                            />
                                    </div>
                                </div>    
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Services; 