// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  // function renderLicenseBadge(license) { 
  //   if (license === true) {
  //     return `![badge](https://img.shields.io/npm/l/badge?color=pink&label=License&logo=${response.license}&logoColor=Blue)`;
  //   } else {
  //     return 'No License';
  //   }
  //  }
  const renderLicenseBadge = (license) => { 
     return (license ? `![badge](https://img.shields.io/npm/l/badge?color=pink&label=License&logo=${response.license}&logoColor=Blue)` : ' '); 
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { 
//     if (license === true) {
//       return `[${license}](https://choosealicense.com/licenses/${license})`;
//     } else {
//       return 'No License';
//     }
//    }
const renderLicenseLink = (license) => { 
    return (license ? `[${license}](https://choosealicense.com/licenses/${response.license})` : ' '); 
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if ( license === true) {
    return `
    ## [License](#table-of-contents)

    The application is covered under the following license:

    ${renderLicenseLink(response.license)}
    `; } else {
      return ' ';
    }
   }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
