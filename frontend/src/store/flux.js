const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      name: "",
      emailuser: "",
      password: "",
      error: null,
      isAuth: false,
      nombre: "",
      descripcion: "",
      autor: "",
      value:null,
      currentUser: [],
      proyectos:[],
      modal: false,
      modal1: false,
      beliminar: false,
      bmodifica: false

    },

    actions: {
      isAuthenticated: () => {
        if (sessionStorage.getItem("isAuth")) {
          setStore({
            isAuth: sessionStorage.getItem("isAuth"),
            currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
          });
        }
      },

      registro:()=>{
        setStore({
          modal: true,
        });
      },

      changeCheckBox:()=>{
        setStore({
          beliminar: true,
          bmodifica:true
        });
      },

      register: (e) => {
        e.preventDefault();
          const { name, emailuser, password } = getStore();
          const dataUser = {
            name: name,
            emailuser: emailuser,
            password: password,
          };
          console.log(dataUser);
          fetch("http://127.0.0.1:5000/api/users/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(dataUser),
          })
          .then((response) => {
            if(response.ok){
              console.log(response)
              setStore({
                name:"",
                password: "",
                modal: true,
              });
            }else{
              setStore({
                modal1: true,
              });
            }
          })
          .catch(error => console.log(error));
          e.target.reset();
      },

      irHome:(e,history)=>{
        history.push('/')
      },

      irRegistro:(e,history)=>{
        setStore({modal1:false})
        history.push('/registro')
      },

      handleChange: (e) => {
        setStore({
          [e.target.name]: e.target.value,  
        })
        
      },

      handleLogin: async (e, history) => {
        e.preventDefault();
        try {
          const { name, password } = getStore();
          const datos = { name: name, password: password };
          //console.log(datos);
          const resp = await fetch("http://127.0.0.1:5000/api/users/login", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const infoUser = await resp.json();
          if (infoUser.msg) {
            setStore({
              name:"",
              password: "",
              error: infoUser.msg,
            });
          } else {
            setStore({
              name: "",
              password: "",
              error: null,
              currentUser: infoUser,
              isAuth: true,
            });
            sessionStorage.setItem("isAuth", true);
            sessionStorage.setItem("currentUser", JSON.stringify(infoUser));
            history.push('/')
          }
        } catch (error) {
          setStore({
            error: error.message,
          });
        }
      },

      insertarProyecto: (e, history) => {
        e.preventDefault();
        const { nombre, descripcion, autor } = getStore();
        const dataForm = {
          nombre: nombre,
          descripcion: descripcion,
          autor: autor,
        }
        console.log(dataForm);
        fetch("http://127.0.0.1:5000/api/proyectos/register", {
          method: "POST",
          body: JSON.stringify(dataForm),
          headers: { "Content-type": "application/json" },
        })
          .then((resp) => resp.json())
          .then((response) => console.log(response))
          .then((response) => {
            console.log(response)
            setStore({
              nombre:"",
              descripcion:"",
              autor:"",
              modal: true,
            });
          })
          .catch((error) => console.error(error));    
      },

      irListadoProyecto:(e,history)=>{
        setStore({modal:false, beliminar:false,  bmodifica: false})

        fetch("http://127.0.0.1:5000/api/proyectos",{
          method:'GET',
          headers :{
            'Content-Type' : 'application/json'
          }})
            .then((resp) => resp.json())
            .then((response) => {
              console.log(response)
              setStore({proyectos:response
              })
            })
            .catch(error => console.log(error)); 
        history.push("/verproyecto")
      },

      fetchProyecto: () => {
        fetch("http://127.0.0.1:5000/api/proyectos",{
          method:'GET',
          headers :{
            'Content-Type' : 'application/json'
          }})
            .then((resp) => resp.json())
            .then((response) => {
              setStore({proyectos:response
              })
            })
            .catch(error => console.log(error)); 
      }, 

      fetchOneProyecto: (id) => {
        var idproyect = id
        fetch(`http://127.0.0.1:5000/api/proyecto/${idproyect}`,{
          method:'GET',
          headers :{
            'Content-Type' : 'application/json'
          }})
            .then((resp) => resp.json())
            .then((response) => {
              setStore({
                proyectos:response,
                nombre: response[0].nombre,
                descripcion:response[0].descripcion,
                autor: response[0].autor,
              });
            })
            .catch(error => console.log(error));  
      }, 

      logout:(history)=>{
        sessionStorage.clear()
        setStore({isAuth:false, currentUser:[]})
        history.push("/")
      },

      editar_proyecto: (e, id, history) => {
        console.log("estoy en flux");
        e.preventDefault();
        var idproyect = parseInt(id)
        const { nombre, descripcion, autor } = getStore();
        const dataFormUpdate = {
          nombre: nombre,
          descripcion: descripcion,
          autor: autor,
        };
        console.log(dataFormUpdate);
        fetch(`http://127.0.0.1:5000/api/proyectos/editar/${idproyect}`, {
          method: "PUT",
          body: JSON.stringify(dataFormUpdate),
          headers: { "Content-type": "application/json" },
        })
          .then((resp) => resp.json())
          .then((response) => console.log(response))
          setStore({
            modal: true,
            nombre:"",
            descripcion:"",
            autor:""
          })
          .catch((error) => console.error(error));
      },  

      delete_proyecto: (id,history) =>{
        var idproyect = parseInt(id)
        fetch(`http://127.0.0.1:5000/api/proyectos/delete/${idproyect}`, {
          method: 'DELETE',
          headers: { "Content-type": "application/json" },
        })
        .then((resp) => resp.json())
        .then((response) => {
          console.log(response)
          setStore({ proyectos:response, modal: true})
        })
        .catch(error => console.log(error));
      }, 

    },
  };
};

export default getState;