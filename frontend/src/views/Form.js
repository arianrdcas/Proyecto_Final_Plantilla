import Modal from '../components/Modal';
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from '../store/appContext'
import "../style/form.css";


const FormNewProject = () => {

    const{actions,store}=useContext(Context);

    const history = useHistory();

    const {
        nombre ,
        descripcion,
        autor,
        modal,  
    }=store;
  
    const {handleChange, insertarProyecto, irListadoProyecto} = actions;
     
    return (
        <>
            <h1 className="contenedor" style={{ paddingTop: 30 }}>Proyecto Nuevo</h1>        
            <div className="contenedor">
                <form autoComplete="off" onSubmit={(e)=>insertarProyecto(e,history)} style={{ paddingBottom: 80 }} method="post"> 
                <label>
                    Nombre del Proyecto:
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={nombre}       
                    onChange={handleChange}
                />
                {!nombre.trim()?  
                    <p className="text-danger">Por favor, inserte un nombre de proyecto</p>
                : ""}            
                <label>
                    Descripción del Proyecto:
                </label>
                <textarea
                    className="form-control" 
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange} 
                />
                {!descripcion.trim() ?  
                    <p className="text-danger">Por favor, inserte una descripción del proyecto</p>
                : ""}
                <label>
                    Autor:
                </label>
                <input type="text"
                    className="form-control" 
                    name="autor"
                    value={autor}
                    onChange={handleChange}
                />
                {!autor.trim() ?  
                    <p className="text-danger">Por favor, inserte el autor del proyecto</p>
                : ""}
                <button type="submit" className="btn btn-primary" disabled = {(nombre && descripcion && autor) ? false:true}>
                    Insertar Proyecto
                </button>
                </form> 
            </div>
            <Modal 
                estado={modal}
                >
                <Contenido>
                    <p>El proyecto se ha insertado satisfactoriamente</p>
                    <button className="btn btn-primary" onClick={(e)=>irListadoProyecto(e,history)}>Aceptar</button>
                </Contenido>
            </Modal>
        </>

    );
   
};

export default FormNewProject;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	
`;