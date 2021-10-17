// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      
    case 'MIT License':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg'
    case 'BSD 2-Clause "Simplified" License':
      return 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg';
    case 'BSD 3-Clause "New" or "Revised" License':
      return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
    case 'Boost Software License 1.0':      
      return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg';
    case 'Creative Commons Zero v1.0 Universal':     
      return 'https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg';
    case 'Mozilla Public License 2.0':
      return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
      
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
      
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT'
    case 'BSD 2-Clause "Simplified" License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'BSD 3-Clause "New" or "Revised" License':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'Boost Software License 1.0':      
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'Creative Commons Zero v1.0 Universal':     
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
      
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'This repository is covered by the Apache License 2.0';
  
    case 'MIT License':
      return 'This repository is covered by the MIT License '
    case 'BSD 2-Clause "Simplified" License':
      return 'This repository is covered by the BSD 2-Clause "Simplified" License';
    case 'BSD 3-Clause "New" or "Revised" License':
      return 'This repository is covered by the BSD 3-Clause "New" or "Revised" License';
    case 'Boost Software License 1.0':      
      return 'This repository is covered by the Boost Software License 1.0';
    case 'Creative Commons Zero v1.0 Universal':     
      return 'This repository is covered by the Creative Commons Zero v1.0 Universal';
    case 'Mozilla Public License 2.0':
      return 'This repository is covered by the Mozilla Public License 2.0';
      
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
renderLicenseBadge(data.license);
renderLicenseLink(data.license);
renderLicenseSection(data.license);  
let badge = renderLicenseBadge(data.license);
let link = renderLicenseLink(data.license);
let section = renderLicenseSection(data.license);
return `
#  ${data.title}
![License](${badge})
##  ${data.description}
### Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
### Installation
${data.installation}
### Usage
${data.usage}
## License
${section} <br> 
${link}
#### Contributors
${data.contributors}
#### Test Instructions
${data.tests}
##### Questions
If you have any questions please feel free to contact me at ${data.questions} <br>
GitHub: ${data.GitHub} 
`;
}

module.exports = generateMarkdown;
