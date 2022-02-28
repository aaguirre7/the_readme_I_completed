// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/**
 * 
 * @param {string} license 
 * @returns 
 */
function myLicense(license) {
  if (license) {
    let mylic = license.split(' ').join('%20'); 
    return `![${license} License](https://img.shields.io/badge/license-${mylic}-blue)`;
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
/**
 * 
 * @param {string} license 
 * @returns 
 */

function generateMarkdown(askNow) {
  
  return `
  ![GitHub](https://img.shields.io/github/license/${askNow.githubUsername}/${askNow.title})
  # ${askNow.title}
  ## Description
  ${askNow.about}
  ## Table of Contents
  ${installCheck(askNow.install)}
  * [Usage](#usage)
  ${contributeCheck(askNow.contribution)}
  ${testCheck(askNow.testing)}
  * [Questions](#questions)
  
  ${generateInstall(askNow.install)}
  ## Usage
  ${askNow.usage}
  ${myLicense(askNow.license)}
  ${generateContribute(askNow.contribution)}
  ${generateTesting(askNow.testing)}
  ## Questions
  Created by: [${askNow.githubUsername}](${askNow.gitLink})
  
  If you have any further questions please feel free to contact me at [${askNow.email}](${askNow.email})
`;
}

module.exports = generateMarkdown;
