function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GNU GPLv3') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return ''; 
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU GPLv3') {
    return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license && license !== 'None') {
    return `
## License

This project is licensed under the ${license} license. See the [${license} License](${renderLicenseLink(license)}) file for details.
`;
  } else {
    return ''; // Return empty string if no license is provided
  }
}

function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, github, email } = data;

  // Generate badge for license
  const licenseBadge = renderLicenseBadge(license);

  // Generate the license
  const licenseSection = renderLicenseSection(license);

  // Construct the README content
  const markdownContent = `
# ${title}

${licenseBadge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

${licenseSection}

## Contributing
${contributing}

## Tests
${tests}

## Questions
For questions about the project, please contact [${github}](https://github.com/${github}).
You can also reach out directly at ${email}.
`;

  return markdownContent;
}

module.exports = generateMarkdown;