import React, { useContext, useState } from "react";
import { Context } from '../store/appContext'
import "../style/form.css";

const FormNewProject = () => {

    const{actions}=useContext(Context); 

    const [data, setData] = useState ({
        proyecto : '',
        descripcion : '',
        autor : '',  
    })
     
    const {handleChange} = actions;

    const enviarForm = (e) => {
        e.preventDefault ();
        //console.log("Enviando formulario");
        //console.log(data.proyecto + " " + data.descripcion + " " + data.autor);
        
    }
    return (
        <>
            <div className="container">
                <h1>Proyecto Nuevo</h1>
                <form autoComplete="off"  onSubmit={enviarForm} style={{ padding: 25 }} method="post">
                <label>
                    Nombre del Proyecto:
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="proyecto"
                    //value={data.proyecto}
                    onChange={handleChange}
                />
                <label>
                    Descripcion del Proyecto:
                </label>
                <textarea
                    className="form-control" 
                    name="descripcion"
                    //value={data.descripcion}
                    onChange={handleChange} 
                />

                <label>
                    Autor:
                </label>
                <input type="text"
                    className="form-control" 
                    name="autor"
                    //value={data.autor}
                    onChange={handleChange}
                />

                <button type="submit">Enviar Proyecto</button>
                </form>
            </div>
        </>
    );
};

export default FormNewProject;
