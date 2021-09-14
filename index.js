const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const employeeArr = [];

const questions = [
    {
            type: 'list',
            name: 'roleChoice',
            message: 'What position is this employee?',
            choices: ['Manager', 'Intern', 'Engineer']
    },
    {
        type: 'input',
        name: 'name',
        message:'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school have you attended?',
        when: answers => answers.roleChoice === 'Intern'
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your github username?',
        when: answers => answers.rolechoice === 'Engineer'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'what is your office number?',
        when: answers => answers.roleChoice === 'Manager'
    }
    ]

function initQuest() {
    inquirer.prompt(questions).then((answers) => {
        if(answers.roleChoice === 'Intern') {
           const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeeArr.push(intern);
            console.log(intern);
        } else if (answers.roleChoice === 'Engineer') {
           const engineer =  new Engineer(answers.name, answers.id, answers.email, answers.github);
           console.log(engineer);
           employeeArr.push(engineer);
        } else if (answers.roleChoice === 'Manager') {
          const manager = new Manager(answers.name, answers.id, answers.email, answers.phone); 
          console.log(manager); 
          employeeArr.push(manager);
        }
    })
}




initQuest();