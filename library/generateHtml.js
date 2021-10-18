// const path = require('path');
// const fs = require('fs');

// const tempDir = path.resolve(__dirname, 'templates'); // Import templates folder

// const generate = employees => {
//     const html = [];

//     html.push(employees
//         .filter(employee => employee.getGenerate)
//         .map(manager => generateManager(manager))
//         );

//     html.push(employees
//         .filter(employee => employee.getGenerate)
//         .map(engineer => generateEngineer(engineer))
//         );
    
//     html.push(employees
//     .filter(employee => employee.getGenerate)
//     .map(intern => generateIntern(intern))
//     );
    
//     return generateMain(html.join(''));
// };

const generateTeam = (team) => {
    console.log(team);
    const html=[];
    const generateManager = manager  => {
        console.log(manager);
        let managerHtml = `
        <section class="card empCard" style="width: 19rem;">
            <section class="cardHeader">
            ${manager.name} <br>
            Manager
        </section>
        <ul class="cardList">
            <li class="listItm">ID: ${manager.id}</li>
            <li class="listItm">Email: <span id="email"><a href="mailto: ${manager.email}">${manager.email}</a></span></li>
            <li class="listItm">Office Number: ${manager.ofcNumber}</li>
        </ul>
        </section>`;
        html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <section class="card empCard" style="width: 19rem;">
            <section class="cardHeader">
            ${engineer.name} <br>
            Manager
        </section>
        <ul class="cardList">
            <li class="listItm">ID: ${engineer.id}</li>
            <li class="listItm">Email: <span id="email"><a href="mailto: ${engineer.email}">${engineer.email}</a></span></li>
            <li class="listItm">Github email: <span id="email"><a href="mailto: ${engineer.email}">${engineer.email}</a></span></li>
        </ul>
        </section>`;
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <section class="card empCard" style="width: 19rem;">
            <section class="cardHeader">
            ${intern.name} <br>
            Intern
        </section>
        <ul class="cardList">
            <li class="listItm">ID: ${intern.id}</li>
            <li class="listItm">Email: <span id="email"><a href="mailto: ${intern.email}">${intern.email}</a></span></li>
            <li class="listItm">School: ${manager.ofcNumber}</li>
        </ul>
        </section>`;
        html.push(internHtml);

    }

    for (let i=0; i<team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateManager(team[i]);
        }
    }
        return html.join('');
        module.exports = team => {
            return `<!DOCTYPE html>
            <html lang="eng">
            <head>
            <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/style.css">
   
    <title>Team Profile</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
</body>


</html>`
        };

};