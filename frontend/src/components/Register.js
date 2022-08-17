import React, { useContext, useState } from "react";
import { Context } from '../store/appContext'

const Register = () => {

    const{actions}=useContext(Context);    

    const [dataUser, setDataUser] = useState ({
        nombre : '',
        email : '',
        password : '',
        error : null,
        
    })  

    const handleInputChange = (e) => {
        setDataUser({
            ...dataUser,
            [e.target.name] : e.target.value
        })
    }
        
    const enviarDatos = (e) => {
        e.preventDefault ();
        let hasError = false
        if(e.target.nombre.value === "") { 
            setDataUser(prevState => {
                return {
                    ...prevState,
                    error: {
                        ...prevState.error,
                        nombre:{
                            msg : "Por favor, introduzca su nombre",
                        } 
                    }
                }    
            })
            hasError = true;
        } else {
            setDataUser(prevState => {
                delete prevState.error?.nombre;
                return {
                    ...prevState, 
                }
            })
        } 
        if(e.target.email.value === "") { 
            setDataUser(prevState => {
                return {
                    ...prevState,
                    error: {
                        ...prevState.error,
                        email:{
                            msg : 'Por favor, introduzca su email',
                        } 
                    }
                }    
            })
            hasError = true;
        } else {
            setDataUser(prevState => {
                delete prevState.error?.nombre;
                return {
                    ...prevState, 
                }
            })
        } 
        if (e.target.password.value === "") {
            setDataUser(prevState => {
                return {
                    ...prevState,
                    error: {
                        ...prevState.error,
                        password:{
                            msg : 'Por favor, introduzca su password',
                        } 
                    }
                }    
            })
            hasError = true;
        } else {
            setDataUser(prevState => {
                delete prevState.error?.password;
                return {
                    ...prevState, 
                }
            })
        }  
        
        if (hasError) return;

        actions.register(dataUser)
        console.log(dataUser)
        setDataUser({
            nombre:"",
            email:"",
            password:""
        })
    
    }
    
    return (  
        <>
            <div className="modal fade bs-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        >
                        <span aria-hidden="true">
                            <i className="fa fa-close" />
                        </span>
                        </button>
                        <h4 className="modal-title" id="myLargeModalLabel">
                        Registrarse
                        </h4>
                        <form className="lg-frm" autoComplete="off" onSubmit={enviarDatos} style={{ padding: 25 }} method="post" >
                            <label>Nombre :</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Introduzca su nombre"
                                name="nombre"
                                value={dataUser.nombre}
                                onChange={handleInputChange}
                            />
                            {!!dataUser.error && dataUser.error.nombre ? dataUser.error.nombre.msg : ""} 
                            <br/>

                            <label>Email :</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Introduzca su email"
                                name="email"
                                value={dataUser.email}
                                onChange={handleInputChange}
                            />
                            {!!dataUser.error && dataUser.error.email ? dataUser.error.email.msg : ""} 
                            <br/>

                            <label>Password :</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Introduzca su password"
                                name="password"
                                value={dataUser.password}
                                onChange={handleInputChange}
                            />
                            {!!dataUser.error && dataUser.error.password ? dataUser.error.password.msg : ""} 
                            <br/>
                            
                            <button
                            type="button"
                            className="btn btn-default pull-right"
                            type="submit"
                            value="Submit"
                        >
                            Enviar
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>

    );
    
   
}

export default Register;