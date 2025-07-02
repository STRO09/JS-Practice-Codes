class School {

    static totalStudents: number = 0;
    studentList:any=[];

    addDetails(name:String,roll: number, Class:String){
        this.studentList.push({"name":name,"Roll no.":roll,"class":Class});
        console.log("Added Students");
        School.totalStudents++;
    }
}

const school = new School;

school.addDetails("Sagar",54,'A');
school.addDetails("Stro",55,'A');
school.addDetails("Theseus",56,'B');
console.log(school.studentList);
console.log(School.totalStudents);