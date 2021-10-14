// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown1 = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
/*
inquirer
  .prompt(*/
    const questions = [
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a brief description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please explain how to install your project:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Please explain how to use your project:',
        name: 'usage',
    },
    {
        type: 'list',
        message: '',
        choices: ['None',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please list any contributors',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please list any test instructions for your project',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please enter email address where you can be contacted for any questions regarding your project',
        name: 'questions',
    },
  ]
  /*
    .then((data) => {
      console.log(data)
     /* let generateMarkdown = generateMarkdown1(data);
      writeToFile(generateMarkdown);
    })*/

 
  
// TODO: Create a function to write README file
/*
function writeToFile(generateMarkdown) {
    fs.writeFile("README.md", generateMarkdown, function (err) {
    err ? console.log(err) : console.log('success!');
    
})
}*/
// can use back ticks and template literal to stringify  
function writeToFile(generateMarkdown) {
  fs.writeFile("README.md", generateMarkdown, function (err) {
    err ? console.log(err) : console.log('Congradulations, you have successfully created a README.md for your project!');
  })
}    

// TODO: Create a function to initialize app

function init() {
  inquirer
    .prompt()
    .then((data) => {
      console.log(data);
      generateMarkdown(data);
    })
}

// Function call to initialize app
//init();
