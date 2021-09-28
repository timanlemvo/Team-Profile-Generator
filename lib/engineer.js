const Employee = require('../lib/Employee');
// const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        
    }

    getGitHub() {
        return this.github;
    }
    
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;