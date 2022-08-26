import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../style/form.css";

const VerProyecto = () => {
  const { store, actions } = useContext(Context);


  const [botonActivo, setBotonActivo] = useState(false);
  


  useEffect(() => {
    actions.fetchProyecto();
  }, []);

  
const [checkBoxSelected, setCheckBoxSelected]=useState([]);

const handleChangeCheckBox=e=>{
  console.log(e.target.value);
  var auxiliar=null;
  if(checkBoxSelected.includes(e.target.value)){
    auxiliar=checkBoxSelected.filter(elemento=>elemento!==e.target.value);

  }else{
    auxiliar=checkBoxSelected.concat(e.target.value);
  }
  setCheckBoxSelected(auxiliar);

  if(auxiliar.length>0){
    setBotonActivo(true);

  }else{
    setBotonActivo(false)
  }
}
  

  return (
    <>
    <ul className="container"> 
      <li>
        <h1 >Proyectos Creados</h1> 
        <button className="btn btn-success" disabled={!botonActivo} >Modificar</button>
        <button className="btn btn-danger" disabled={!botonActivo} >Eliminar</button>
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
                      <input className="form-check-input"  type="checkbox" value={proyecto.idproyecto} onChange={handleChangeCheckBox}  id="flexCheckChecked"/>
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