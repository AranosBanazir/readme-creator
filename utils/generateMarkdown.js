// If there is no license, return an empty string
//used to dynamically make the Table of Contents
let usedHeaders = []
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case "Mozilla Public License 2.0":
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    case "Apache 2.0 License":
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case "Boost Software License 1.0":
      return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    case "None":
      return "";
    default:
      return "";
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/license/mit/`;
    case "Mozilla Public License 2.0":
      return `https://opensource.org/license/mpl-2-0/`;
    case "Apache 2.0 License":
      return `https://opensource.org/license/apache-2-0/`;
    case "Boost Software License 1.0":
      return `https://www.boost.org/LICENSE_1_0.txt`;
    case "None":
      return "";
    default:
      return "";
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `## License 

This project uses the The MIT License`;
    case "Mozilla Public License 2.0":

      return `## License

This project uses the Mozilla Public License 2.0`;
    case "Apache 2.0 License":

      return `## License

This project uses the Apache 2.0 License`;
    case "Apache 2.0 License":

      return `## License

This project uses the Boost Software License 1.0`;
    case "None":
      return "";
    default:
      return "";
  }
}

// 
function generateMarkdown({
  title,
  description,
  install,
  usage,
  contribution,
  tests,
  license,
}) {
  //formating MD if information is blank
  

  if (!description) {
    description = ''
  }else{
  description = `## Description 
  
  ${description}`
  usedHeaders.push('description')
  }

  if (!install) {
    install = ''
  }else{
  install = `## Installation 
  
  ${install}`
  usedHeaders.push('installation')
  }

  if (!usage) {
    usage = ''
  }else{
  usage = `## Usage 
  
  ${usage}`
  usedHeaders.push('usage')

  }

  if (!contribution) {
    contribution = ''
  }else{
  contribution = `## Contributing
  
  ${contribution}`
  usedHeaders.push('contributing')

  }

  if (!tests) {
    tests = ''
  }else{
  tests = `## Tests 
  
  ${tests}`
  usedHeaders.push('tests')

  }

  if (license !== 'None'){
    usedHeaders.push('license')
  }

  const tableOfContents = () =>{
    if (usedHeaders.length >= 3){
      let ret = `## Table of Contents`
  
      usedHeaders.forEach((h,i)=>{
        let fixed = h.replace(h.charAt(0), h.charAt(0).toUpperCase())
        ret += `\n${i + 1}. [${fixed}](#${h})`
      })
      usedHeaders = []
      return ret
    }else{
      usedHeaders = []
      return ''
    }
    
  }
  
  const body = [description, tableOfContents(), install, usage, contribution, tests, renderLicenseSection(license), renderLicenseLink(license)]
  .filter(thing => !!thing)
  .map(thing => `\n${thing}`)
  .join('\n')

   
  return `# ${title} ${renderLicenseBadge(license)}
    ${body}
  `
// ${description}
// ${tableOfContents()}
// ${install}
// ${usage}
// ${contribution}
// ${tests}
// ${renderLicenseSection(license)}
// ${renderLicenseLink(license)}
// `
}

module.exports = generateMarkdown;
