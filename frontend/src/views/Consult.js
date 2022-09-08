import React, {useContext, useState} from "react";
import Modal from '../components/Modal';
import styled from 'styled-components';
import { Context } from "../store/appContext";

const Consult = () =>{

    const{store, actions}=useContext(Context);
    const[estadoModal, cambiarEstadoModal] = useState(false);

    return (
        <>
        {/* header-slider-area start */}
        <section className="header-slider-area">
            <div
            id="carousel-example-generic"
            className="carousel slide carousel-fade"
            data-ride="carousel"
            >
            {/* Indicators */}
            <ol className="carousel-indicators">
                <li
                data-target="#carousel-example-generic"
                data-slide-to={0}
                className="active"
                />
                <li data-target="#carousel-example-generic" data-slide-to={1} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                <div className="single-slide-item slide-1">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="single-slide-item-content">
                            <h2>
                           Consulta tus Proyectos <br /> de negocios con nosotros
                            </h2>
                            <p>

                            Somos la única consultora que apoya tu negocio
                            y que está lista para tomar el desafío de darle publicidad a tus resultados.
                            
                            </p>
                             <button type="button" onClick={() => cambiarEstadoModal(!estadoModal) } className="slide-btn"> 
                                Instrucciones
                            </button>
                             <Modal
                                estado={estadoModal}
                                cambiarEstado={cambiarEstadoModal}
                            >
                                <Contenido>
                                    <h6>1- Regístrese para poder acceseder al sitio.</h6>
                                    <h6>2- Una vez registrado, podrá loguearse.</h6>
                                    <h6>3- Luego de loguearse, usted podrá crear un proyecto.</h6>
                                    <h6>4- En la opción Project, encontrará dos botones: Nuevo Proyecto y Ver Proyectos</h6>
                                    <h6>5- Por último para salir del sitio deberá cerrar sesión.</h6>
                                    <button className="btn btn-primary" onClick={() => cambiarEstadoModal(!estadoModal) }>Aceptar</button>
                                </Contenido>
                            </Modal> 
                        </div>
                        {/* /.single-slide-item-content*/}
                        </div>
                        {/* /.col*/}
                    </div>
                    {/* /.row*/}
                    </div>
                    {/* /.container*/}
                </div>
                {/* /.single-slide-item*/}
                </div>
                {/* /.item .active*/}
                
                {/* /.item .active*/}
            </div>
            {/* /.carousel-inner*/}
            {/* Controls */}
            
            </div>
            {/* /.carousel*/}
        </section>
        {/* /.header-slider-area*/}
        {/* header-slider-area end */}
        </>

    )
}
export default Consult; 

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
    justify-content: center;
	h6 {
		font-size: 18px;
		margin-bottom: 20px;
        align-items: left;
        text-transform: none;
	}
	
`;