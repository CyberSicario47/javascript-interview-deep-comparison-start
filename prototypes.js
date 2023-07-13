// Design the same classes by using only Javascript prototypes

var Employee = function (id, name) {
    if(!id || !name){
        throw new Error("id and name are required")
    }
    this.id = id;
    this.name = name
}

Employee.prototype.setSalary = function (salary){
    this.salary = salary
}

Employee.prototype.getId = function (){
    return this.id
}

Employee.prototype.getName = function (){
    return this.name
}

Employee.prototype.getSalary = function (){
    return this.salary
}


var Manager = function (params) {

    Employee.apply(this, arguments)
    // this.image = params.image
}
// this is very important to extend the function functionality   first it will copy all the functions and then need to overwrite the constructor back to manager
Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager

Manager.prototype.setDepartment = function (department){
    this.department = department
}

Manager.prototype.getDepartment = function (){
    return this.department
}



const manager = new Manager(1,"mark")