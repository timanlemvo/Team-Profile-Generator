// const inquirer = require('inquirer');
// const questions = require('../src/questions');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        // console.log(id);
    }

    getName() { 
      return this.name;
        
    };

    getId () {
        return this.id 
        // console.log(id);
        
    };

    getEmail() {
        return this.email 

    };

    getRole() {
        return 'Employee'
    };

}

module.exports = Employee;