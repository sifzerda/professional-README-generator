// variables/constants
const inquirer = require("inquirer"); 

// get readme creator npm package:
const mdu = require('markdown-utils');

// get file system import
const fs = require("fs");

const generateMarkdown = ({title, description, installation, usage, test, contribution, license, status, github, email, }) =>
// template for markdown
`\n
# ${title}
\n
${generateLicense(license)}
\n
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Contribution](#contribution)
* [License](#license)
* [Project Status](#status)
* [Contact](#contact)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Test

${test}

## Contribution

Any contributions you make are greatly appreciated. If you have a suggestion that would make this project better, please see below for how you can contribute to this project:
\n${contribution}

## License

This project is distributed under the ${license}. See LICENSE.txt for more information.

## Status

${status}

## Contact

Have questions about this project? Click the link below to reach me through my GitHub account or Email address:

Email: [Send me an email at ${email}](${email} "please include this project's title in the subject line")

GitHub: https://github.com/${github}`;

// questions/prompts

  inquirer
    .prompt([
      // title input
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      // description input
      {
        type: "input",
        message: "Provide a description for your project:",
        name: "description",
      },
      // installation input
      {
        type: "input",
        message: "Provide installation instructions for your project:",
        name: "installation",
      },
      // usage 
      {
        type: "input",
        message: "Describe how your project can be used:",
        name: "usage",
      },
      // test
      {
        type: "input",
        message: "Add test information for your project:",
        name: "test",
      },
      // contribution 
      {
        type: "input",
        message: "State how developers can contribute to your project:",
        name: "contribution",
      },

      // license 
      {
        type: "list",
        message: "Select the type of license you would like for your project:",
        choices: [
          "Apache 2.0 License",
          "GNU GPL v3",
          "MIT License",
          "BSD 2-Clause License",
          "BSD 3-Clause License",
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v3.0",
          "GNU Lesser General Public License v3",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ],
        name: "license",
      },
      {
        type: "input",
        message: "Please describe the current functioning status of your project, including issues, or future development ideas",
        name: "status",
      },
      // User github username
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
      },
      // User email
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
    ])
    // '.then' takes the user inputs from the prompts answered above and puts them into the writeFile function, then generating a "my-README.md" file with the users inputs
    .then((answers) => {
const markdownPageContent = generateMarkdown(answers);

fs.writeFile('my-README.md', markdownPageContent, (err) =>
err ? console.log(err) : console.log('Your README file has been successfully created')
);
    });
    
// This function generates the licensing badges
// if statement which returns the license badge which user selected
function generateLicense(license) {
  // Apache 2.0 License
  if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
// GNU GPL v3
  } else if (license === "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
 // MIT License     
  } else if (license === "MIT License'") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
 // BSD 2-Clause License
  } else if (license === "BSD 2-Clause License") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
 // BSD 3-Clause License
  } else if (license === "BSD 3-Clause License") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
 // Boost Software License 1.0
  } else if (license === "Boost Software License 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
 // Creative Commons Zero v1.0
  } else if (license === "Creative Commons Zero v1.0") {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
 // Eclipse Public License 2.0
  } else if (license === "Eclipse Public License 2.0") {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
 // GNU Affero General Public License v3.0
  } else if (license === "GNU Affero General Public License v3.0") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
// GNU Lesser General Public License v3
  } else if (license === "GNU Lesser General Public License v3") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
// Mozilla Public License 2.0
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    // Unlicense
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}
