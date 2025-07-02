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
var Institute = /** @class */ (function () {
    function Institute() {
    }
    return Institute;
}());
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School(instType) {
        var _this = _super.call(this) || this;
        _this.StudentList = [];
        _this.instType = instType;
        return _this;
    }
    School.prototype.getInstitutionType = function () {
        console.log(this.instType);
    };
    School.prototype.addStudent = function (name, roll, Class) {
        this.StudentList.push({ "Name": name, "Roll": roll, "Class": Class });
    };
    School.prototype.removeStudent = function (roll) {
        return this.StudentList = this.StudentList.filter(function (student) {
            student.roll !== roll;
        });
    };
    return School;
}(Institute));
var school1 = new School("Aided");
var school2 = new School("UnAided");
school1.addStudent("Sagar", 54, 'A');
school1.addStudent("Stro", 43, 'B');
school1.getInstitutionType();
console.log(school1.StudentList);
// school1.removeStudent(43);
console.log(school1.StudentList);
school2.addStudent("Harde", 45, 'A');
school2.addStudent("Theseus", 32, 'B');
school2.getInstitutionType();
console.log(school2.StudentList);
school1.removeStudent(32);
console.log(school1.StudentList);
