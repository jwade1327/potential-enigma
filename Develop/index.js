const inquirer = require('inquirer');
// array of questions for user
const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: projectnameInput => {
                if (projectnameInput) {
                    return true;
                } else {
                    console.log("Please enter your project's title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the steps required to install your project. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide step by step description on how to install your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples of your project's usage. (Required)",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide isntructions and examples of usage.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'Provide license information for your project. (Required)',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please provide license information for your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contributing information for your project. (Required)',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please provide contributing information for your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide testing information for your project. (Required)',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please provide testing information for your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please enter your GitHub username. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        }
    ]);
};

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();