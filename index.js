const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/generateTeam");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamArr = [];
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((answers) => {
      const { name, id, email, officeNumber } = answers;
      const manager = new Manager(name, id, email, officeNumber);
      teamArr.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the employee's github account?",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Where does this intern go to school?",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "confirmEmployee",
        message: "Would you like the add any more employee's?",
        default: false,
      },
    ])
    .then((data) => {
      let { role, name, id, email, github, school, confirmEmployee } = data;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      teamArr.push(employee);
      if (confirmEmployee) {
        return addEmployee(teamArr);
      } else {
        return teamArr;
      }
    });
};

const writeFile = function (data) {
  fs.writeFile("./dist/index.html", data, (err) => {
    console.log(data),
      err
        ? console.log(err, "uh oh something went wrong")
        : console.log("success");
  });
};

addManager()
  .then(addEmployee)
  .then((teamArr) => {
    return generateHTML(teamArr);
  })
  .then((page) => {
    return writeFile(page);
  })
  .catch((err) => {
    console.log(err);
  });
