/* import Modal from '../components/Modal';
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Context } from '../store/appContext';
import styled from "styled-components";
import "../style/form.css";

const Register = () => {

    const{store, actions}=useContext(Context); 

    const history = useHistory()   

    const { name, emailuser, password, error, modal} = store;

    console.log(modal);

    const { handleChange, register } = actions; */



    /* const [dataUser, setDataUser] = useState ({
        name : '',
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
        if(e.target.name.value === "") { 
            setDataUser(prevState => {
                return {
                    ...prevState,
                    error: {
                        ...prevState.error,
                        name:{
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
        //console.log(dataUser)
        setDataUser({
            name:"",
            email:"",
            password:""
        }) 
    
    }*/
    

   /*  return (  
        <>
        
               <Modal 
                estado={modal}
                //cambiarEstado={cambiarEstadoModal}
                >
                <Contenido>
                    <p>El proyecto se ha insertado satisfactoriamente</p>
                    <button className="btn btn-primary" >Aceptar</button>
                </Contenido>
            </Modal>
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
                        Registrarseteeeeeeeeeeeee
                        </h4>
                        <form className="lg-frm" autoComplete="off"  onSubmit={(e) => register(e, history)}  style={{ padding: 25 }} method="post" >
                            <label>Nombre :</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Introduzca su nombre"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                            {!!error && error.nombre ? error.nombre.msg : ""}  

                            <label>Email :</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Introduzca su email"
                                name="emailuser"
                                value={emailuser}
                                onChange={handleChange}
                            />
                            {!!error && error.emailuser ? error.emailuser.msg : ""} 

                            <label>Password :</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Introduzca su password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                            {!!error && error.password ? error.password.msg : ""} 
                            
                            <button
                                type="button"
                                className="btn btn-default pull-right"
                                type="submit"
                                value="Submit">
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
	
`; */