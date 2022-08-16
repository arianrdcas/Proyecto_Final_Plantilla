
import React from "react";


function LoginUser () {

    /* let user = JSON.parse(localStorage.getItem('user-info'))

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const [fallo, setFallo] = useState(false);
    const [error, setError] = useState("");
    const [erroruser, setErroruser] = useState("");

    const [usuar, setUsuario] = useState([]);

    async function ulogin(){

        if(!username.trim()){
            setFallo(true)
            setError("Por favor, introduzca su username")
            return
        }

        if(!password.trim()){
            setFallo(true)
            setError("Por favor, introduzca su password")
            return
        }

        const usuario = {
            username,
            password
        }
        setFallo(false)
        setUsuario(usuario)

        //console.log(usuario)

        let item = {username, password}
        let result = await fetch(`http://localhost:5000/login`,{
            method: 'POST',
            headers : {
                'Content-Type':'application/json',
                "Accept" :'application/json' 
                },
            body: JSON.stringify(item) 
            
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))

        if(user && user.name){
            setFallo(false)
            localStorage.clear();
            window.location.href = '/gestionar';
            
        }
        
        else{
            setFallo(true)
            setError("El usuario no se encuentra registrado. Por favor, regístrese.")
            return
        }
    }

    const uClose = () => {
        //console.log("hola estoy en login y quiero cerrar")
        
    } */

    return ( 
        <>
            {/* small modal */}
            <div className="modal fade bs-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-dialog modal-sm" role="document">
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
                            <h4 className="modal-title mt-5" id="mySmallModalLabel">
                            Sign In
                            </h4>
                            
                            <form className="sm-frm" style={{ padding: 30 }} >
                                <label>Name :</label>
                                <input
                                    type="text"
                                    name = "username"
                                    className="form-control"
                                    placeholder="username"
                                    
                                />
                                <label>Password :</label>
                                <input
                                    type="password" 
                                    name = "password" 
                                    className="form-control"
                                    placeholder="password"   
                                    
                                />
                                <button className="btn btn-default" type="button" >
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

export default LoginUser;