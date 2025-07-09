var Employee = /** @class */ (function () {
    function Employee(_name, salary, position, department) {
        var _this = this;
        this.getEmployeeInfo = function () {
            return "Nom: ".concat(_this._name, " - poste: ").concat(_this.position);
        };
        this._name = _name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    return Employee;
}());
