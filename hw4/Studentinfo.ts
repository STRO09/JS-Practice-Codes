class Student {

    name:String
    studentId:number 
    grade: String 
    address: String 

    constructor(name:String,id:number,grade:String,address:String){
        this.name=name;
        this.studentId=id;
        this.grade=grade;
        this.address=address;

    }
    displayInfo(){
        console.log("Name: "+this.name+ ", Student ID: "+this.studentId+", Grade: "+this.grade+", Address: "+this.address);
    }
}

const student = new Student("Sagar",1,'B',"Mumbai");
console.log(student);