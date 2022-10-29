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
        name: ' Contribution'
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
   var README = `
  ## Description\n
    ${response.Description}


  ## Installation\n
    ${response.Installation}


  ## Usagen\n
    ${response.Usage}


  ## Contribution\n
    ${response.Contribution}

   
  ## Test\n
    ${response.Test}


  ## license\n
    ${response.license}`
  
    fs.writeFile('README.md', README, (err) => err ? console.error(err): console.log('Success!'))
    });
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
