import React, { useContext } from 'react'
import { Context } from "../store/appContext";



const VerProyecto = () => {

    const {store}=useContext(Context)

  return (
    <>
        <h1>VerProyecto</h1>
        <p>{store.proyecto}</p>
    </>
  )
}

export default VerProyecto;