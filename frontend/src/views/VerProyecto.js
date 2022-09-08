import React, { Fragment, useContext, useEffect, useState } from "react";
import Modal from '../components/Modal';
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../store/appContext";
import "../style/form.css";


const VerProyecto = () => {
  const { store, actions } = useContext(Context);

  const history = useHistory()

  const {irListadoProyecto} = actions;

  const {
    modal,
    beliminar,
    bmodifica,
    proyectos:[]  
  }=store;

  
  useEffect(() => {
    actions.fetchProyecto();
  }, []);

  const [checkBoxSelected, setCheckBoxSelected]=useState([]);

  const [botonActivo, setBotonActivo] = useState(false);

  const handleChangeCheckBox=(e)=>{
    var auxiliar=null;
      if(checkBoxSelected.includes(e.target.value)){
        auxiliar=checkBoxSelected.filter(elemento=>elemento!==e.target.value);

      }else{
        auxiliar=checkBoxSelected.concat(e.target.value);
      }
  
    setCheckBoxSelected(auxiliar);

    actions.changeCheckBox();

    /* if(auxiliar.length>0){
      setBotonActivo(true);

    }else{
      setBotonActivo(false)
    } */
  }

  const eliminarProyecto = () => {
    console.log(parseInt(checkBoxSelected));
    actions.delete_proyecto(checkBoxSelected,history)
    setCheckBoxSelected([]);
    history.push("/verproyecto")
  }

  const irUpdateProyecto = () => {
    history.push({
      pathname: "/formupdate/", state: {id: parseInt(checkBoxSelected)}
    })
  }

  return (
    <>
    <div className="container padre"> 
        <h1>Proyectos Creados</h1> 
        {/* <Link to={{ pathname: "/formupdate/", state: {id: parseInt(checkBoxSelected)} }} >
          <button  className="btn hijo btn-success"  disabled={!botonActivo}>Modificar</button>
        </Link> */}

        <button  className="btn hijo btn-success" onClick={irUpdateProyecto} disabled={!bmodifica}>Modificar</button>
        
        <button className="btn hijo btn-danger" onClick={eliminarProyecto} disabled={!beliminar} >Eliminar</button>
    </div>
      <div className="containerr" >
        <table>
          <tbody>
            <tr>
              <td><strong> </strong></td>
              <td><h4><strong>Nombre del Proyecto</strong></h4></td>
              <td><h4><strong>Nombre del Autor</strong></h4></td>
              <td><h4><strong>Descripción del Proyecto</strong></h4></td>
              
            </tr>
              {!!store.proyectos && store.proyectos.map((proyecto) => {
              return (
                <Fragment key={proyecto.idproyecto} >
                <tr >
                  <td >
                    <div className="form-check">
                      <input className="form-check-input"  type="checkbox" value={proyecto.idproyecto} onClick={(e)=>handleChangeCheckBox(e)}  id="flexCheckChecked"/>
                    </div>
                  </td>
                  <td><h4>{proyecto.nombre}</h4></td>
                  <td><h4>{proyecto.autor}</h4></td>
                  <td><h4>{proyecto.descripcion}</h4></td>
                </tr>
                </Fragment>
              ) 
            })}
          </tbody>
        </table>
      </div>
      <Modal 
          estado={modal}
          >
          <Contenido>
              <p>El proyecto ha sido eliminado satisfactoriamente</p>
              <button className="btn btn-primary" onClick={(e)=>irListadoProyecto(e,history)}>Aceptar</button>
          </Contenido>
      </Modal>

    </>
  );
};

export default VerProyecto;
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