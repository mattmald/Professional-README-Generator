 //makes the badge icon
  const renderLicenseBadge = (license) => { 
    return license ? `![badge](https://img.shields.io/npm/l/badge?color=pink&label=License&logo=${license}&logoColor=Blue)` : ' '; 
 }

//connects to the offical license page
const renderLicenseLink = (license) => { 
   return license ? `[${license}](https://choosealicense.com/licenses/${license})` : ' '; 
}

//bring the user to license section
const renderLicenseSection = (response) => {
 if (response.license !== 'no license') {
   return `
   ## [License](#table-of-contents)

   The License for this project is:

   ${renderLicenseLink(response.license)}
   `; } else {
     return ' ';
   }
  }

//layout for the README
function generateMarkdown(response) {
 return `
 ${renderLicenseBadge(response.license)}

  ## *Table-of-Contents*

  ## [Description](#description)
  ## [Installation](#installation)
  ## [Usage](#usage)
  ## [Contributing](#contributing)
  ## [Tests](#tests)
  ${renderLicenseSection(response.license)}
   
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
    ${renderLicenseLink(response.license)}`;
}

module.exports = generateMarkdown
