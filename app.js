// const path = require('path');
// const fs = require('fs');
// const inquirer = require('inquirer');

// const Manager = require('./library/Manager');
// const Engineer = require('./library/Engineer');
// const Intern = require('./library/Intern');

// const OUTPUT_DIR = path.resolve(__dirname, 'output'); // Create absolute path
// const outputPath = path.join(OUTPUT_DIR, 'team.html'); // Join a single path from path segments

// const generate = require('./library/generateHtml');
// const Employee = require('./library/Employee');


// const team = [];

// addToTeam();


// // Add Member Function
// function addToTeam() {
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'addEmployee',
//             message: 'Please select an employee title or select "Exit".',
//             choices: ['Manager','Engineer', 'Intern', 'Exit']
//         }
//     ])

// .then (function(data) {
//     const empRole = data.addEmployee;
//         if (empRole === 'Manager') {
//             managerDetails();
//         } else
//         if (empRole === 'Engineer') {
//             engineerDetails();
//         } else
//         if (empRole === 'Intern') {
//             internDetails();
//         } else
//         if (empRole === 'Exit') {
//             generateTeam();
//         }

//     });


// // Create Member Profile Elements

// function managerDetails() {
//     inquirer.prompt([
//         {
//         type: "input",
//         name: "mgrName",
//         message: "Manager's name: "
//         },

//         {
//         type: "input",
//         name: "mgrId",
//         message: "Manager's ID: "
//         },

//         {
//          type: "input",
//          name: "mgrEmail",
//          message: "Manager's email: "
//         },

//         {
//         type: "input",
//         name: "mgrOfcNumb",
//         message: "Manager's office number: "
//         }

//         ]) .then(function(data) {
//             const manager = new Manager(data.mgrName, data.mgrId, data.mgrEmail, data.mgrOfcNumb);
//             team.push(manager);
//             addToTeam();
//         });
//     }

//     function engineerDetails() {
//         inquirer.prompt([
//         {
//         type: "input",
//         name: "engName",
//         message: "Engineer's name: "
//         },

//         {
//         type: "input",
//         name: "engId",
//         message: "Engineer's ID: "
//         },

//         {
//         type: "input",
//         name: "engEmail",
//         message: "Engineer's email: "
//         },

//         {
//         type: "input",
//         name: "engGithub",
//         message: "Engineer's Github: "
//         }

//         ]) .then(function(data) {
//             const engineer = new Engineer(data.engName, data.engId, data.engEmail, data.engGithub);
//             team.push(engineer);
//             addToTeam();
//         });

//     }

//     function internDetails() {
//         inquirer.prompt([
//         {
//         type: "input",
//         name: "intName",
//         message: "Intern's name: "
//         },

//         {
//         type: "input",
//         name: "intId",
//         message: "Intern's ID: "
//         },

//         {
//         type: "input",
//         name: "intEmail",
//         message: "Intern's email: "
//         },

//         {
//         type: "input",
//         name: "intSchool",
//         message: "Intern's school: "
//         }

//         ]) .then(function(data) {
//             const intern = new Intern(data.intName, data.intId, data.intEmail, data.intSchool);
//             team.push(intern);
//             addToTeam();
//         });
// START HERE

const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');


const OUTPUT_DIR = path.resolve(__dirname, 'output'); // Create absolute path
const outputPath = path.join(OUTPUT_DIR, 'team.html'); // Join a single path from path segments
const teamMembers = [];
const generateSite = require('./library/generateHtml.js');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please input name". (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the employee name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empId',
            message: 'Please enter the employee ID. (Required)',
            validate: empId => {
                if (empId) {
                    return true;
                } else {
                    console.log('Please enter an employee ID');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address. (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'ofcNumber',
            message: 'Please enter an office number. (Required)',
            validate: ofcNumber => {
                if (ofcNumber) {
                    return true;
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            }
        },

    ]).then(answers => { // Close return inquirer.prompt
        console.log(answers);
        const manager = new Manager(answers.name, answers.empId, answers.email, answers.ofcNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select an employee role: ',
            choices: ['Manager', 'Engineer', 'Intern']

        }
    ])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an Engineer":
                    promptEngineer();
                    break;
                case "add an Intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`Add Engineer`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the Engineers name: (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the Engineers name');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'empId',
            message: 'Please enter employee ID: (Required)',
            validate: empId => {
                if (empId) {
                    return true;
                } else {
                    console.log('Please enter employee ID');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter employee email address: (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter employee email adress');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'gitHubEmail',
            message: 'Please enter employee GitHub email address: (Required)',
            validate: empId => {
                if (empId) {
                    return true;
                } else {
                    console.log('Please enter employee ID');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.empId, answers.email, answers.gitHubEmail);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`Add new Intern`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the Interns name: (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the Interns name');
                    return false;
                }
            }
        },
            
        {
            type: 'input',
            name: 'empId',
            message: 'Please enter the Interns ID: (Required)',
            validate: empId => {
                if (empId) {
                    return true;
                } else {
                    console.log('Please enter the Interns ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the Interns email address: (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the Interns email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school name: (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter the school name');
                    return false;
                }
            }
        },

    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.empId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

    const buildTeam = () => {
        console.log(`Generating profile!`);

        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        
        fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
    }
    }
    promptManager();







