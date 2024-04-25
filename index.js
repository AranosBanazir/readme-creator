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
    "tests/input/Were any tests done on the project? (hit enter if there were none):",
    "license/list/What license did you use? (use the arrow keys, or hit enter if there were none)/None/MIT/Mozilla Public License 2.0/Apache 2.0 License/Boost Software License 1.0",
    "username/input/Enter your Github username:",
    "email/input/Enter your email to be reached at:"
  ].map((question) => {
    const [name, type, message, ...choices] = question.split("/");
    return { name, type, message, choices };
  });

// Takes in the object from the inquirer
// With key:value pairs of the title of the question and the answer and passes the object to generateMarkdown
function writeToFile(answers) {
    fs.writeFile("README.md", generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log("Successfully created your README!")
    );
  }


  //if the email that is entered does not contain an @ symbol we will 
  //loop this function until a valid email is entered
  let firstAnswers
  function validateEmail(answers){
    if (typeof firstAnswers !== 'object'){
      firstAnswers = answers
    }

    if (!answers.email.match(/\@/g) && answers.email !== ('None' || 'none' || undefined)){
      inquirer.prompt({
        name: 'email',
        type: 'input',
        message: 'Please enter a valid email:',
      }).then(validateEmail)
    }else{
      firstAnswers.email = answers.email
      writeToFile(firstAnswers)
    }
    
  }

// sends the inquirer prompt method to
// iterate through the questions array
function init() {
    //takes the answers and validates that the email is properly formatted
    inquirer.prompt(questions).then(validateEmail)
}

// Function call to initialize app
init();
