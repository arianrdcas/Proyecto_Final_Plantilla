import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../style/form.css";

const VerProyecto = () => {
  const { store, actions } = useContext(Context);


  const [modificar, setModificar] = useState(true)
  const [eliminar, seteliminar] = useState(true)


  useEffect(() => {
    actions.fetchProyecto();
  }, []);

  
const {delete_proyecto} = actions
  
const getItem = () =>{
  console.log()
}

  return (
    <>
    <ul className="container"> 
      <li>
        <h1 >Proyectos Creados</h1> 
        <button className="btn btn-success" disabled={true} >Modificar</button>
        <button className="btn btn-danger" disabled={true} onClick={(e) => delete_proyecto(e)}>Eliminar</button>
      </li>
    </ul>
      <div className="container" >
        <table>
          <tbody>
            <tr>
              <td><strong> </strong></td>
              <td><strong>Nombre del Proyecto</strong></td>
              <td><strong>Nombre del Autor</strong></td>
              <td><strong>Descripcion del Proyecto</strong></td>
            </tr>
              {!!store.proyectos && store.proyectos.map((proyecto) => {
              return (
                <Fragment key={proyecto.idproyecto} >
                <tr >
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" onClick={(e) => getItem(e,proyecto.idproyecto)} type="checkbox" value="" id="flexCheckChecked"/>
                    </div>
                  </td>
                  <td>{proyecto.nombre}</td>
                  <td>{proyecto.autor}</td>
                  <td>{proyecto.descripcion}</td>
                  <td>{proyecto.idproyecto}</td> 
                </tr>
                </Fragment>
              ) 
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VerProyecto;


{/* <table className="table table-dark">
    <thead />
    <tbody>
      <tr className="table-active" />
      <tr />
      <tr>
        <th scope="row">3</th>
        <td colSpan={2} className="table-active">
          Larry the Bird
        </td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table> */}