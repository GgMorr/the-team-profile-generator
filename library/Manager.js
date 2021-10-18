const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, ofcNumber) {
    super(name, id, email);
    this.ofcNumber = ofcNumber;
}

getOfcNumber() {
    return this.ofcNumber;
    }

getEmpRole() {
    return 'Manager';
    }
}
module.exports = Manager;