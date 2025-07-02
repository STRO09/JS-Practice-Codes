var School = /** @class */ (function () {
    function School() {
        this.studentList = [];
    }
    School.prototype.addDetails = function (name, roll, Class) {
        this.studentList.push({ "name": name, "Roll no.": roll, "class": Class });
        console.log("Added Students");
        School.totalStudents++;
    };
    School.totalStudents = 0;
    return School;
}());
var school = new School;
school.addDetails("Sagar", 54, 'A');
school.addDetails("Stro", 55, 'A');
school.addDetails("Theseus", 56, 'B');
console.log(school.studentList);
console.log(School.totalStudents);
