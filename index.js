var inquirer = require('inquirer');
const fs = require('fs');
const utils=require('utils')
inquirer
  .prompt([

    {
        type: "input",
        name: "name",
        message: "Enter your name"
    },
    {

        type: "input",
        name: "githubname",
        message: "Please enter your github name"
    },
    {
        type: "input",
        name: "title",
        message: "Please enter the project title"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project"
    },
    {
        type: "input",
        name: "instructions",
        message: "Please provide instructions for your project"
    },
    {
        type: "list",
        name: "license",
        message: "please choose a license",
        choices: ['MIT','Mozilla','GNU'],
      
         
        
    },
   
  ])
  .then(function(data) {
    
    const filename =
      'README.md';



    const markdown = generateReadMeMarkdown(data);

    fs.writeFile(filename, markdown, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('You have created your own personal Readme!');
    });
  });

function generateReadMeMarkdown(data) {


  return `

# **${data.title}**


# Description
${data.description}

# Instructions
${data.instructions}

# License
${data.license}

# Author
${data.name}

# Github
${data.githubname}
    `
}


    

