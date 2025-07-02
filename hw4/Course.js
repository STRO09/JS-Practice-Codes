var Course = /** @class */ (function () {
    function Course(name, code, instructor) {
        this.courseName = name;
        this.courseCode = code;
        this.courseInstructor = instructor;
    }
    Course.prototype.displayDetails = function () {
        console.log("Name: " + this.courseName + ", Code: " + this.courseCode + ", Instructor: " + this.courseInstructor);
    };
    return Course;
}());
var course = new Course("SDAC Full stack Dev", 1054, "Ajay Sir");
course.displayDetails();
