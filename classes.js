// Design a class for employee which takes id and name in during construction of object and has a salary property
// Design a class for manager which is employee and can have department property

class Employee {
    constructor(id, name) {
        if (!id || !name) {
            throw new Error("Id and the name are must!")
        }
        this.id = id;
        this.name = name
    }

    setSalary(salary) {
        this.salary = salary
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }

}

class Manager extends Employee{
    setDepartment(department){
        this.department = department
    }
    getDepartment(){
        return this.department
    }
}

const employee = new Employee(1, "Sicario")
const manager = new Manager(2, "Albert")

manager.setSalary("$4000")
manager.setDepartment("transDev")

console.log(manager.getDepartment())