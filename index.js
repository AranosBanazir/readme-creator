//setting up the required modules
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown");

//Questions for the inquierer prompt function.
//I made each index in the array a question with the type and key included
const questions = [
    "title/input/What is the title of your project?",
    "description/input/Enter the description of your project:",
    "install/input/Enter install instructions (hit enter if there are none):",
    "usage/input/How do you use your project?",
    "contribution/input/Please list any contributors (hit enter if there are none):",
    "tests/input/Where any tests done on the project? (hit enter if there were none):",
    "license/list/What license did you use? (use the arrow keys, or hit enter if there were none)/None/MIT/Mozilla Public License 2.0/Apache 2.0 License/Boost Software License 1.0",
  ].map((question) => {
    const [name, type, message, ...choices] = question.split("/");
    return { name, type, message, choices };
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
