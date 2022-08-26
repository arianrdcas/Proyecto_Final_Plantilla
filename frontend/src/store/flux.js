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
      currentUser: [],
      profile: null,
      proyectos:[]
    },

    actions: {
      isAuthenticated: () => {
        //console.log("verificanco usuario");
        if (sessionStorage.getItem("isAuth")) {
          setStore({
            isAuth: sessionStorage.getItem("isAuth"),
            currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
          });
        }
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
          .then((resp) => resp.json())
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      },

      handleChange: (e) => {
        setStore({
          [e.target.name]: e.target.value,  
        })
        
      },

      handleLogin: async (e) => {
        e.preventDefault();
        try {
          const { name, password } = getStore();
          const datos = { name: name, password: password };
          console.log(datos);
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
              password: "",
              error: infoUser.msg,
            });
          } else {
            setStore({
              nombre: "",
              password: "",
              error: null,
              currentUser: infoUser,
              isAuth: true,
            });
            sessionStorage.setItem("isAuth", true);
            sessionStorage.setItem("currentUser", JSON.stringify(infoUser));
            //history.push("/");
          }
        } catch (error) {
          setStore({
            error: error.message,
          });
        }
        //history.push("/");
      },

      sendForm: (e) => {
        e.preventDefault();
        const { nombre, descripcion, autor } = getStore();
        const dataForm = {
          nombre: nombre,
          descripcion: descripcion,
          autor: autor,
        };
        console.log(dataForm);
        fetch("http://127.0.0.1:5000/api/proyectos/register", {
          method: "POST",
          body: JSON.stringify(dataForm),
          headers: { "Content-type": "application/json" },
        })
          .then((resp) => resp.json())
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      },
      fetchProyecto: () => {
        fetch("http://127.0.0.1:5000/api/proyectos",{
          method:'GET',
          headers :{
            'Content-Type' : 'application/json'
          }})
            .then((resp) => resp.json())
            .then((response) => {
              //console.log(response)
              setStore({proyectos:response
              })
            })
            .catch(error => console.log(error));
            
        }, 

        logout:(history)=>{
          sessionStorage.clear()
          setStore({isAuth:false, currentUser:[]})
          history.push("/")
        },

      delete_proyecto: ( ) =>{
        const {proyectos} = getStore()
        fetch(`http://127.0.0.1:5000/api/proyectos/delete/${proyectos.idproyecto}`, {
          method: 'DELETE',
        })
        .then((result) =>{
          result.json()
          .then((resp)=>{
            console.warn(resp)
          })
        })
      }, 
    },
  };
};

export default getState;
