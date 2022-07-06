const url = "http://localhost:5500/api";
const newUser =  {
        name: "John",
        avatar: "http://lorempixel.com.br/500/400/?1",
        city: "New York"
}

const UserUpdated =  {
        name: "Antonio Alexandre",
        avatar: "https://avatars.githubusercontent.com/u/53489752?s=400&u=5b0908d92ad766a59cca02f8016154ed4a52ef4e&v=4",
        city: "sao paulo"
}
    
function getUser() {
    axios.get(url)
        .then(response => { 
            const data = response.data;
            renderResults.textContent = JSON.stringify(data);
        })
    .catch(error =>{console.log(error)})
}
getUser();

function addNewUser() {
    axios.post(url,newUser)
    .then(response => { 
        alert(JSON.stringify (response.data));
        
    })  .catch(error =>{console.log(error)})
}
//addNewUser();

function UpdateUser() {
    axios.put(`${url}/3`,UserUpdated)
    .then(response => { 
        alert(JSON.stringify (response.data)); 
    })  .catch(error =>{console.log(error)})
}
// UpdateUser()

function DeleteUser() {
    axios.delete(`${url}/36`)
    .then(response => { 
        alert(JSON.stringify (response.data));
        
    })  .catch(error =>{console.log(error)})
}

DeleteUser();

function getOneUser() { 
    axios.get(`${url}/35`)
    .then(response => { 
        alert(JSON.stringify (response.data));
        
    })  .catch(error =>{console.log(error)})
}

getOneUser();



