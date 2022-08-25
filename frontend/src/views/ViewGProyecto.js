import React, {useEffect,useState} from "react";

import Footer from "../components/Footer";
import StartNow from "./StarNow";


//import SevicioList from "./SevicioList";
import Form from "./Form";
import HeaderStartAuthen from "../components/HeaderStartAuthen";
import MenuAuthen from "../components/MenuAuthen";

const ViewGServicio = () => {

  const [servicios, setServices] = useState([]);

  const [editedServicio, setEditedService] = useState(null);

  useEffect(()=>{
      fetch('http://localhost:5000/listAllservices',{
          'method':'GET',
          headers : {
          'Content-Type':'application/json'
      }
      })
      .then(response => response.json())
      .then(response => setServices(response))
      .catch(error => console.log(error))
  
  },[])


  const editServicio = (servicio) => {
    setEditedService(servicio)
  }

  const updateServicio = (servicio) => {
    console.log("estoy aquí")
      const new_servicio = servicios.map(my_servicio => {
        if(my_servicio.id === servicio.id){
          return servicio
        } else {
          return my_servicio
        }
      })
      setServices(new_servicio)
  }

  const openForm = () => {
    setEditedService({title:'', description:''})
  }

  const insertedServicio = (servicio) => {
    //console.log(servicio.title) 
    const new_servicios = [...servicios, servicio]
    setServices(new_servicios)
  }

  const deleteServicio = (servicio) =>{
    const new_servicios = servicios.filter(myservicio => {
      if(myservicio.id === servicio.id) {
        return false;
      }
      return true;
    })

    setServices(new_servicios)
  }
  
  return (
    <>
      <div className="container">
        <div className = "row">
          <div className = "col">
          <h2 className = "my-5">  Todos nuestros proyectos </h2>
          </div>
          <div className = "col">
          <button
          className="btn btn-success"
          onClick = {openForm}
          >Insertar nuevo Proyecto</button>

          </div>
        </div>  

          {/* <SevicioList servicios = {servicios} editServicio = {editServicio} deleteServicio = {deleteServicio} />

          {editedServicio ? <Form servicio = {editedServicio}  updateServicio = {updateServicio} insertedServicio = {insertedServicio}/> : null } */}

      </div>


      <StartNow/>
      <Footer/>
    </>
  
  );
}

export default ViewGServicio;