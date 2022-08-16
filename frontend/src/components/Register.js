import React, { useContext, useState } from "react";
import { Context } from '../store/appContext'

const Register = () => {

    const{actions}=useContext(Context);    

    /* const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(""); */

    const [state, setState] = useState ({
        nombre : '',
        email : '',
        password : '',
        error : null,
        
    })  


    const handleChange = e => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }


    const enviarDatos = (e) => {
        e.preventDefault ();
        console.log("Enviando formulario");
        //console.log(e.target.nombre.value);
        let hasError = false
        if(e.target.nombre.value === "") { 
            setState(prevState => {
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
            setState(prevState => {
                delete prevState.error?.nombre;
                return {
                    ...prevState, 
                }
            })
        } 
        if(e.target.email.value === "") { 
            setState(prevState => {
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
            setState(prevState => {
                delete prevState.error?.nombre;
                return {
                    ...prevState, 
                }
            })
        } 
        if (e.target.password.value === "") {
            setState(prevState => {
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
            setState(prevState => {
                delete prevState.error?.password;
                return {
                    ...prevState, 
                }
            })
        }  
        
        /*if (!hasError == false){ 
            console.log("tengo error")

            return;
        }*/
        if (hasError) return;
        //console.log('enviando datos...' + state.nombre + ' ' + state.email + ' ' + state.password)

        actions.register(state)
        setState({
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
                                value={state.nombre}
                                onChange={handleChange}
                            />
                            {!!state.error && state.error.nombre ? state.error.nombre.msg : ""} 
                            <br/>

                            <label>Email :</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Introduzca su email"
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                            />
                            {!!state.error && state.error.email ? state.error.email.msg : ""} 
                            <br/>

                            <label>Password :</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Introduzca su password"
                                name="password"
                                value={state.password}
                                onChange={handleChange}
                            />
                            {!!state.error && state.error.password ? state.error.password.msg : ""} 
                            <br/>
                            
                            <button
                            type="button"
                            className="btn btn-default pull-right"
                            type="submit"
                            value="Submit"
                            //onClick={registrarse}
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