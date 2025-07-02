abstract class Person {
    abstract getDetails();
    abstract getRole();
}

class Student1  extends Person {
    StudentDetails: String 
    role: String = "Student";

    constructor(details:String) {
        super();
        this.StudentDetails=details;

    }
    getDetails() {
        console.log(this.role+" Details: "+this.StudentDetails);
    }
    getRole() {
        console.log("Role: ",this.role);
        }
    
}

class Teacher extends Person {
    TeacherDetails: String
    role: String= "Teacher"

    constructor(details:String){
        super();
        this.TeacherDetails=details;
    }
    getDetails() {
        console.log(this.role+" Details: "+this.TeacherDetails);

    }
    getRole() {
       console.log("Role: ",this.role); 
    }

    
}

const student1 = new Student1("Very good student"); 
const teacher = new Teacher("Remarkable Teacher");

student1.getRole();
student1.getDetails();

teacher.getRole();
teacher.getDetails();

