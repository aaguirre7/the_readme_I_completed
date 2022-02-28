// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFile = require('./utils/writeMD.js');

// TODO: Create an array of questions for user input
const theQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: '💡 What is the name of your repo?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('⚠️ Please enter your project name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: '📄 Make it cool add a description:',
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                } else {
                    console.log('⚠️ Dont be lazy, say something about what you have done')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: '📦 Does your project need special instructions on how to install?',
            default: true
        },
        {
            type: 'input',
            name: 'install',
            message: '📄 Enter your installation instructions:',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: '🚀 Please explain the usage of this project:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: '📝 license',
            choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC']
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: '🤝 Will your project be open to contributions?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: '📄 so you have contributions, but you need to explain them guidelines:',
            when: ({ confirmContribute }) => {
                if (confirmContribute) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: '📄 Will your project need testing instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'testing',
            message: '⚠️ Please input testing instructions for the user:',
            when: ({ confirmTest }) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: '👤 What is your GitHub username?',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('⚠️ Username? seriously you cant avoid this');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitLink',
            message: '🏠 Please enter your GitHub Profile Link:',
            validate: gitLinkInput => {
                if (gitLinkInput) {
                    return true;
                } else {
                    console.log('⚠️ uhn... can you read? Github profile Link please');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: '👤 Please enter your email adress for people to contact you:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('⚠️ No email? then no one will be able to tell you how cool this is');
                    return false;
                }
            }
        }

    ])
        .then(response => generateMarkdown(response))
        .then(newReadme =>writeFile(newReadme))
        .catch(err => {
            console.log(err);
        })
}

// TODO: Create a function to initialize app
function init() {
    theQuestions()
}

// Function call to initialize app
init();
