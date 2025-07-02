var Student = /** @class */ (function () {
    function Student(name, id, grade, address) {
        this.name = name;
        this.studentId = id;
        this.grade = grade;
        this.address = address;
    }
    Student.prototype.displayInfo = function () {
        console.log("Name: " + this.name + ", Student ID: " + this.studentId + ", Grade: " + this.grade + ", Address: " + this.address);
    };
    return Student;
}());
var student = new Student("Sagar", 1, 'B', "Mumbai");
console.log(student);
