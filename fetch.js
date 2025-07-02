async function fetchUsers() {
    try{
        const response = await fetch('https://reqres.in/api/users?page=2')
        const users = await response.json()
        console.log("Users:",users)
    }   
    catch(e){
        console.log("Error: "+e.name)
    }
}

fetchUsers()
