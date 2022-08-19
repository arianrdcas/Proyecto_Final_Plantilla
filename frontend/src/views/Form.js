import React, { useContext, useState } from "react";
import { Context } from '../store/appContext'
import "../style/form.css";

const FormNewProject = () => {

    const{actions,store}=useContext(Context); 

    const {
        nombre ,
        descripcion,
        autor,  
    }=store;
     
    const {handleChange, sendForm} = actions;

    
    return (
        <>
            <div className="container">
                <h1>Proyecto Nuevo</h1>
                <form autoComplete="off"  onSubmit={sendForm} style={{ padding: 25 }} method="post">
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
                    Descripcion del Proyecto:
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

                <button type="submit">Enviar Proyecto</button>
                </form>
            </div>
        </>
    );
};

export default FormNewProject;
