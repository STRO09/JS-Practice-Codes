interface Management {
    addStudent(name:String,roll:number,Class:String);
    removeStudent(roll:number);
}

abstract class Institute{
    abstract getInstitutionType();
}

class School extends Institute implements Management{

    instType:"Aided"|"UnAided";
    StudentList:any= [];

    constructor(instType:"Aided"|"UnAided"){
        super();
        this.instType=instType;
    }

    getInstitutionType() {
        console.log(this.instType);
    }
    addStudent(name:String,roll:number,Class:String) {
        this.StudentList.push({"Name":name,"Roll":roll,"Class":Class});
    }
    removeStudent(roll:number) {
        return this.StudentList= this.StudentList.filter((student)=>{
             student.roll!==roll;
        })
    }

}

const school1 = new School("Aided");
const school2 = new School("UnAided");
school1.addStudent("Sagar",54,'A');
school1.addStudent("Stro",43,'B');
school1.getInstitutionType();
console.log(school1.StudentList);
// school1.removeStudent(43);
console.log(school1.StudentList);

school2.addStudent("Harde",45,'A');
school2.addStudent("Theseus",32,'B');
school2.getInstitutionType();
console.log(school2.StudentList);
school1.removeStudent(32);
console.log(school1.StudentList);
