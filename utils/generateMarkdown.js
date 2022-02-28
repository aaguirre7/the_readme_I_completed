const fs = require('fs');
const { resolve } = require('path');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function myLicense(license) {
  if (license) {
    return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
`;
} else {
    return '';
}
}
const generateInstall = installText => {
  if (!installText) {
    return ''
  } else {
    return `## Installation
  ${installText}
  `
  }
}
const generateContribute = contributeText => {
  if (!contributeText) {
    return ''
  } else {
    return `## Contributions
  ${contributeText}
  `
  }
}
const generateTesting = testText => {
  if (!testText) {
    return ''
  } else {
    return `## Testing
  ${testText}
  `
  }
}
const installCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Installation](#installation)`
  }
}
const contributeCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Contributions](#contributions)`
  }
}
const testCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Testing](#testing)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  ![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
  # ${data.title}
  ## Description
  ${data.about}
  ## Table of Contents
  ${installCheck(data.install)}
  * [Usage](#usage)
  * [${myLicense}](#license)
  ${contributeCheck(data.contribution)}
  ${testCheck(data.testing)}
  * [Questions](#questions)
  
  ${generateInstall(data.install)}
  ## Usage
  ${data.usage}
  ## License
  * This application is covered under the ${data.license} license
  ${generateContribute(data.contribution)}
  ${generateTesting(data.testing)}
  ## Questions
  Created by: [${data.githubUsername}](${data.gitLink})
  
  If you have any further questions please feel free to contact me at [${data.email}](${data.email})
`;
}
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
          if (err) {
              reject(err);
              return;
          }

          resolve({
              ok: true,
              message: 'File Created!'
          });
      });
  });
}

module.exports = 
  generateMarkdown, 
  writeFile;
