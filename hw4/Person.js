var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(details) {
        var _this = _super.call(this) || this;
        _this.role = "Student";
        _this.StudentDetails = details;
        return _this;
    }
    Student1.prototype.getDetails = function () {
        console.log(this.role + " Details: " + this.StudentDetails);
    };
    Student1.prototype.getRole = function () {
        console.log("Role: ", this.role);
    };
    return Student1;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(details) {
        var _this = _super.call(this) || this;
        _this.role = "Teacher";
        _this.TeacherDetails = details;
        return _this;
    }
    Teacher.prototype.getDetails = function () {
        console.log(this.role + " Details: " + this.TeacherDetails);
    };
    Teacher.prototype.getRole = function () {
        console.log("Role: ", this.role);
    };
    return Teacher;
}(Person));
var student1 = new Student1("Very good student");
var teacher = new Teacher("Remarkable Teacher");
student1.getRole();
student1.getDetails();
teacher.getRole();
teacher.getDetails();
