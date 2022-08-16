const getState =({getStore, getActions, setStore})=>{
    return{
        store:{
            nombre:"",
            email:"",
            password:"",
            isAuth: false,
        },

        actions: {
            handleChange : e => {
                setStore({
                  [e.target.name]: e.target.value
                })
            }, 

            register: (state) => { //datos 
                fetch("http://127.0.0.1:5000/api/register", {
                  method: "POST",
                  headers: { "Content-type" : "application/json"},
                  body: JSON.stringify(state), //datos
                })
                  .then((resp) => resp.json())
                  .then((response) => console.log(response))
                  .catch((error) => console.error(error));
            },
        }

    }
};

export default getState;