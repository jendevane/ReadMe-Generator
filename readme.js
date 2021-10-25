var inquirer = require('inquirer');
const fs = require('fs');
const utils=require('utils')
inquirer
  .prompt([

    {
        type: "input",
        name: "name",
        message: "Please enter your name"
    },
    {

        type: "input",
        name: "github name",
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
    // Bonus: Generate the name of your user file from their input
    const filename =
      data.name
        .toLowerCase()
        .split(' ')
        .join('') + '.json';

    fs.generateReadMe(filename, JSON.stringify(data, null, '\t'), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });


    

