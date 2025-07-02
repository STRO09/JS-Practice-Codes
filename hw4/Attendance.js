var Student2 = /** @class */ (function () {
    function Student2() {
    }
    Student2.prototype.markAttendance = function (name, status) {
        this.name = name;
        this.status = status;
    };
    Student2.prototype.getAttendance = function () {
        console.log(this.name + " is " + this.status);
    };
    return Student2;
}());
var studentA = new Student2();
var StudentB = new Student2();
var StudentC = new Student2();
studentA.markAttendance("Sagar", "Absent");
studentA.getAttendance();
StudentB.markAttendance("Valentina", "Present");
StudentB.getAttendance();
StudentC.markAttendance("Ishika", "Present");
StudentC.getAttendance();
