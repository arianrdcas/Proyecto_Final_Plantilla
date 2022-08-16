import React, { useState, useEffect } from 'react';
import APIService from '../servicio/APIService';


function Form(props) {

    //console.log(props);

    const [title, setTitle] = useState(props.servicio.title)
    const [description, setDescripcion] = useState(props.servicio.description)

    const updateServicio = () => {
        //console.log(props.servicio.id)
        APIService.UpdateServicio(props.servicio.id, {title, description})
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    const insertServicio = (servicio) => {

        console.log("estoy aquí en insertar")
        console.log(title)

        APIService.InsertServicio({title, description})
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <div>
            {props.servicio ? (

                <div className = "mb-3">

                    <label htmlFor = "title" className ="form-label"> Titulo</label>

                    <input type = "text" className ="form-control" 

                    value = {title}
                    
                    placeholder = "Por favor coloque el titulo"
                        onChange = {(e) => setTitle(e.target.value)}
                    />
                    
                    <label htmlFor = "description" className ="form-label"> Descripcion</label>

                    <textarea
                    rows = "5"
                    value = {description}
                    className ="form-control" 
                    
                    placeholder = "Por favor coloque una descripcion"
                        onChange = {(e) => setDescripcion(e.target.value)}
                    />

                    {
                        props.servicio.id ? <button
                        onClick = {updateServicio}
                        className = "btn btn-success mt-3"
                        > Actualizar</button>
                        :

                        <button
                        onClick = {insertServicio}
                        className = "btn btn-success mt-3"
                        > Insertar</button>

                    }

                </div> 

            ):null}

        </div>
    )
}

export default Form