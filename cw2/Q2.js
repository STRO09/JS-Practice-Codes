// Create a class named Emp with following attribute name, id, salary &  displayInfo method provide access code for the same. 

class Emp {
    name 
    id 
    salary 

    constructor(name,id,salary) {
        this.name = name
        this.id = id
        this.salary = salary
    }
    displayInfo() {
        console.log("Name: "+this.name+", ID: "+this.id+ ", Salary: "+this.salary)
    }
}


emp = new Emp("Sagar",34, 56700)

console.log(emp)