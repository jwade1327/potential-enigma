const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generatePage = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the steps required to install your project. (Required)'
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples of your project's usage. (Required)"
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license(s) do you want to include with your project?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'NONE']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contributing information for your project. (Required)'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide testing information for your project. (Required)'
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please enter your GitHub link. (ex:http://www.github.com/USERNAME)'
        }
];

// function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// function to initialize program

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log('Create README for you!');
        writeToFile('README.md', generatePage({...response}));
    })
}


// function call to initialize program
init();
