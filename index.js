const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
      {
        type: 'input',
        message: 'Please give a discription of your application.',
        name: 'Description',
      },
      
      {
        type: 'input',
        message: 'How do you recommend userd install your application.',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'Please explain how a user can use this application.',
        name: 'Usage'
      },
      {
        type: 'input',
        message: 'Please explain the guidelines for conributions.',
        name: 'Contribution'
      },
      {
        type: 'input',
        message: 'Please provide links and screenshots displaying your applaication and code.',
        name: 'Test'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    ])
    .then((response) => {
   var readMe = `

   ${renderLicenseBadge(response.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseSection(response.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  
   
  ## Description(#description)

    ${response.Description}


  ## Installation(#installation)

    ${response.Installation}


  ## Usagen(#usage)

    ${response.Usage}


  ## Contribution(#contributing

    ${response.Contribution}

   
  ## Test(#tests)

    ${response.Test}


  ## license

    ${response.license}`
  
    fs.writeFile('README.md', readMe, (err) => err ? console.error(err): console.log('Success!'))
    });
// TODO: Create a function to initialize app
function init () {
// return inquirer.prompt(questions)
//     .then(readmeData => {
//         return readmeData;
//     })
}

// Function call to initialize app
init();
