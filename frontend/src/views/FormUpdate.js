import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Context } from '../store/appContext'
import "../style/form.css";
import Modal from '../components/Modal';
import styled from "styled-components";



const FormUpdate = ({ location }) => {

    const{actions,store}=useContext(Context); 
    const history = useHistory()
    const {
        nombre,
        descripcion,
        autor,
        modal,  
    }=store; 

    useEffect(() => {
        actions.fetchOneProyecto(location.state.id); 
    }, []);


    const {handleChange, irListadoProyecto} = actions;

    const modificarProyecto = (e) => {
        //console.log("hola")
        e.preventDefault();
        var id = location.state.id
        //console.log(id)
        actions.editar_proyecto(e,id,history)
    } 

    return (
        <>
            <h1 className="contenedor" style={{ paddingTop: 30 }}>Modificar Proyecto </h1>
            <div className="contenedor" >
                {!!store.proyectos && store.proyectos.map((proyecto) => {

                    return (

                <form autoComplete="off"  onSubmit={modificarProyecto} style={{ paddingBottom: 80 }} method="post">
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
                <label>
                    Descripción del Proyecto:
                </label>
                <textarea
                    className="form-control" 
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange} 
                />

                <label>
                    Autor:
                </label>
                <input type="text"
                    className="form-control" 
                    name="autor"
                    value={autor}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary">Actualizar</button>
                </form>

                )
            })}
            </div>
            <Modal 
                estado={modal}
                >
                <Contenido>
                    <p>El proyecto se ha actualizado satisfactoriamente</p>
                    <button className="btn btn-primary" onClick={(e)=>irListadoProyecto(e,history)}>Aceptar</button>
                </Contenido>
            </Modal>
        </>
    );
};

export default FormUpdate;


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