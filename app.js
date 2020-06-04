const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require('path');
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const prompts = async function () {
    // Write code to use inquirer to gather information about the development team members,
    // and to create objects for each team member (using the correct classes as blueprints!)
    const employees = [];

    const answers = await inquirer
        .prompt([
            {
                message: "name:",
                name: "name"
            },
            {
                message: "id:",
                name: "id"
            },
            {
                message: "email:",
                name: "email"
            },
            {
                type: 'list',
                name: 'role',
                message: 'Which is better?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ]);

    //console.info('Answer:', answers.role);
    if (answers.role === 'Manager') {
        const last_answers = await inquirer
        .prompt([
            {
                message: "Office numbef:",
                name: "off_num"
            }
        ]);
        const empObj = new Manager(answers.name, answers.id, answers.email, last_answers.off_num);
        employees.push(empObj);
    }
    else if (answers.role === 'Engineer') {
        const empObj = new Engineer(answers.name, answers.id, answers.email, "1231231234");
        employees.push(empObj);
    }
    else if (answers.role === 'Intern') {
        const empObj = new Intern(answers.name, answers.id, answers.email, "1231231234");
        employees.push(empObj);
    }


    fs.writeFile(outputPath, render(employees), function (err) {
        console.log('wrote')
    });
}


const init = async function () {
    prompts();
}

init();