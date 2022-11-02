// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  // function renderLicenseBadge(license) { 
  //   if (response.license !== 'no license') {
  //     return `![badge](https://img.shields.io/npm/l/badge?color=pink&label=License&logo=${response.license}&logoColor=Blue)`;
  //   } else {
  //     return 'No License';
  //   }
  //  }
  const renderLicenseBadge = (response) => { 
    return license ? `![badge](https://img.shields.io/npm/l/badge?color=pink&label=License&logo=${license}&logoColor=Blue)` : ' '; 
 }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { 
//     if (response.license !== 'no license') {
//       return `[${license}](https://choosealicense.com/licenses/${license})`;
//     } else {
//       return 'No License';
//     }
//    }
const renderLicenseLink = (license) => { 
   return license ? `[${license}](https://choosealicense.com/licenses/${license})` : ' '; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (response) => {
 if (response.license !== 'no license') {
   return `
   ## [License](#table-of-contents)

   The application is covered under the following license:

   ${renderLicenseLink(response.license)}
   `; } else {
     return ' ';
   }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
 return `
 ${renderLicenseBadge(response)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseSection(license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  
   
  ## Description

    ${response.Description}


  ## Installation

    ${response.Installation}


  ## Usage

    ${response.Usage}


  ## Contribution

    ${response.Contribution}

   
  ## Test

    ${response.Test}


  ## license

    ${response.license}
    ${renderLicenseLink(license)}`;
}

module.exports = generateMarkdown
