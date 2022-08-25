import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext";



const VerProyecto = () => {

  const {store, actions}=useContext(Context)

  useEffect(() => {
    actions.fetchProyecto();
  }, []);


  return (
    <>
        <h1>VerProyecto</h1>
        <p>{store.nombre}</p>
        </>
  )
}

export default VerProyecto;