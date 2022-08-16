/* 

export default class APIService{

    static UpdateServicio (id, body){
        console.log('hola')
        console.log(body)
        return fetch(`http://localhost:5000/upservices/${id}`,{
            'method':'PUT',
            headers : {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static InsertServicio (body){
        console.log("llegue API service")
        console.log(body)
        return fetch(`http://localhost:5000/addservices`,{
            'method':'POST',
            headers : {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
        })
        .then(response => response.json())
    }

    static DeleteServicio (id){
        return fetch(`http://localhost:5000/deleteservice/${id}`,{
            'method':'DELETE',
            headers : {
                'Content-Type':'application/json'
            },
        })

    }

}

 */