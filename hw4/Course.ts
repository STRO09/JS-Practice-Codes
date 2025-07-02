class Course{

    courseName:String;
    courseCode:number;
    courseInstructor:String;

    constructor(name:String,code:number,instructor:String){
        this.courseName=name;
        this.courseCode=code;
        this.courseInstructor=instructor;
    }

    displayDetails(){
        console.log("Name: "+this.courseName+", Code: "+this.courseCode+", Instructor: "+this.courseInstructor);
    }

}

const course = new Course("SDAC Full stack Dev",1054,"Ajay Sir");
course.displayDetails();