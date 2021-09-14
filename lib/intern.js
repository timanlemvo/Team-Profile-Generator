const Employee = require('../lib/Employee');
const inquirer = require('inquirer');

class Intern extends Employee () {
    constructor(name, id, email, school) {
        super(name,id,email);
        this.school = school;
    }

    getSchool() {
        return inquirer.prompt ({
            type: 'input',
            name: 'school',
            message: 'What school have you attended?'
        })
    }

    getRole () {
        return 'Intern'
    }

}

module.exports = Intern; 