/* export default class APIUser{

    static AutenticaUser (body){
        console.log(body)
        console.log("estoy en API User autenticaUser")
        return fetch(`http://localhost:5000/login`,{
            method: 'POST',
            headers : {
                'Content-Type':'application/json',
                "Accept" :'application/json' 
                },
            body: JSON.stringify(body)
            
        })
        .then(response => response.json())
    }

    static RegistrarUser (body){
        //console.log("llegue API user")
        //console.log(body)
        return fetch(`http://localhost:5000/register`,{
            'method':'POST',
            headers : {
            'Content-Type':'application/json',
            "Accept" :'application/json' 
            },
        body:JSON.stringify(body)
        })
        //alert("El usuario ha sido registrado satisfactoriamente")
        .then(response => response.json())
    }
    
    async RegistrarUser1 (body){
        console.log("llegue API user")
        //console.log(body)
        let result = await fetch(`http://localhost:5000/register`,{
            'method':'POST',
            headers : {
            'Content-Type':'application/json',
            "Accept" :'application/json' 
            },
        body:JSON.stringify(body)
        })

        //console.log(result)
        //return result = result.json();
        //alert("El usuario ha sido registrado satisfactoriamente")
        //.then(response => response.json())
    }
} */