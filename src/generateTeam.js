const managerCard = function (manager) {
  return `
  <div>
    <div>
      <div>
        <h3>${manager.name}</h3>
        <h4>Manager</h4><i>groups</i>
      </div>
      <div>
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p>Office Number: ${manager.officeNumber}</p>
      </div>
    </div>
  </div>
  `;
};

const engineerCard = function (engineer) {
  return `
  <div>
    <div>
      <div>
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4><i>engineering</i>
      </div>
      <div>
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
      </div>
    </div>
  </div>
  `;
};

const internCard = function (intern) {
  return `
  <div>
    <div>
      <div>
        <h3>${intern.name}</h3>
        <h4>Intern</h4><i>school</i>
      </div>
      <div>
        <p>ID: ${intern.id}</p>
        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p>School: ${intern.school}</p>
      </div>
    </div>
  </div>
  `;
};

const generateHTML = function (data) {
  pageArr = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCards = managerCard(employee);
      pageArr.push(managerCards);
    }

    if (role === "Engineer") {
      const engineerCards = engineerCard(employee);
      pageArr.push(engineerCards);
    }

    if (role === "Intern") {
      const internCards = internCard(employee);
      pageArr.push(internCards);
    }
  }

  const employeeCards = pageArr.join("");
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

const generateTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="'./dist/styles.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <title>Team Page</title>
    </head>
    <body>
      <header>
        <nav class="navbar">
          <span class="navbar-brand mb-0 h1 w-100 text-center">Team Page</span>
        </nav>
      </header>
      <main>
        <div class="container">
          <div class="row justify-content-center">${employeeCards}</div>
        </div>
      </main>
    </body>
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
  </html>
  `;
};
module.exports = generateTeam;
