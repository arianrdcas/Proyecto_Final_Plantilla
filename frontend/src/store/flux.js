const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nombre: "",
      email: "",
      password: "",
      erro: null,
      isAuth: false,
      proyecto: "",
      descripcion: "",
      autor: "",
      currentUser: [],
      profile: null,
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

      register: (dataUser) => {
        //datos
        //console.log(dataUser)
        fetch("http://127.0.0.1:5000/api/register", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(dataUser), //datos
        })
          .then((resp) => resp.json())
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      },

      handleChange: (e) => {
        setStore({
          [e.target.name]: e.target.value,
        });
      },

      handleLogin: async (e) => {
        e.preventDefault();
        try{
            const { nombre, password } = getStore();
            const datos = { nombre: nombre, password: password };
            console.log(datos)
            const resp = await fetch("http://127.0.0.1:5000/api/login", {
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
                sessionStorage.setItem('isAuth', true);
                sessionStorage.setItem('currentUser', JSON.stringify(infoUser));
                //history.push("/");
            }
        } catch (error) {
        setStore({
          error: error.message
        });
      }
    }

    }
};
};

export default getState;
