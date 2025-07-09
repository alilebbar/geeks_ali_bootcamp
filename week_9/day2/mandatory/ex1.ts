class Employee {
  private _name: string;
  private  salary: number;
  public position: string;
  protected department: string;

  constructor(_name: string, salary: number, position: string, department: string) {
    this._name = _name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }
  getEmployeeInfo = ()=>{
    return `Nom: ${this._name} - poste: ${this.position}`;
  }
}