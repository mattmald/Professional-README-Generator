const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// inquirer
//   .prompt(
    const questions = [
      {
        type: 'input',
        message: 'Please give a discription of your application.',
        name: 'Description',
      },
      
      {
        type: 'input',
        message: 'How do you recommend user install your application.',
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
    ]
    //)
    
    // fs.writeFile('README.md', generateMarkdown, (err) => err ? console.error(err): console.log('Success!'))
 function userData (file, fileData) {
  return fs.writeFileSync(file, fileData)
 }


// TODO: Create a function to initialize app
function init () {
return inquirer.prompt(questions)
    .then(readmeData => {
        // return readmeData;
        userData('README.md', generateMarkdown({...readmeData})  )
    })
}

// // Function call to initialize app
init();
