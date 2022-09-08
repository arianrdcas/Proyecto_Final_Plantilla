import React, { useContext, useEffect } from "react";

import CardWedo from "./CardWedo";
import consultency from '../assets/images/home/consultency.png';
import bussines from '../assets/images/home/busisness_grow.png';
import support from '../assets/images/home/support-logo.png';
import { Context } from "../store/appContext";


const WeDo = () =>{

    const { store, actions } = useContext(Context);


    useEffect(() => {
        actions.fetchProyecto();
      }, []);

    return (
        <>
        <section className="we-do">
            <div className="container">
                <div className="we-do-details">
                    <div className="section-header text-center">
                        <h2>Nuestros Proyectos</h2>
                        <p>
                           Cada uno de estos proyectos inspira un gran desafío. Pulsa sobre uno de ellos y encontrarás una gran oportunidad para entrar al mundo de los negocios.
                        </p>
                        </div>
                        <div className="we-do-carousel">
                        <div className="row">
                            {!!store.proyectos && store.proyectos.map((proyecto) => {
                                return (

                                    <div className="col-sm-4 col-xs-12">
                                        <CardWedo key={proyecto.idproyecto} 
                                            image={consultency}
                                            title={proyecto.nombre}
                                            descripcion={proyecto.descripcion}
                                        />
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
export default WeDo; 