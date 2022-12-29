const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/generateTeam");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamArr = [];
const addManager = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Manager name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
      },
    ])
    .then((answers) => {
      const { name, id, email, officeNumber } = answers;
      const manager = new Manager(name, id, email, officeNumber);
      teamArr.push(manager);
      console.log(manager);
    });
};
