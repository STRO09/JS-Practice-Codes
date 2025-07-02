interface Attendance {
    markAttendance(name:String,status:"Present"|"Absent");
}

class Student2 implements Attendance {
    name:String
    status:"Present"|"Absent";
    markAttendance(name:String,status:"Present"|"Absent") {

        this.name=name;
        this.status=status;
    }


    getAttendance(){
        console.log(this.name+" is "+this.status);
    }

}


const studentA = new Student2();
const StudentB = new Student2();
const StudentC = new Student2();
studentA.markAttendance("Sagar","Absent");
studentA.getAttendance();
StudentB.markAttendance("Valentina","Present");
StudentB.getAttendance();
StudentC.markAttendance("Ishika","Present");
StudentC.getAttendance();

