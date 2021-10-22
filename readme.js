var inquirer =require ('inquirer')
const fs = require('fs');

const questions = [
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
        choices: [
            'MIT', 'Apache', 'Boost', 'BSD'
        ], 
        
    },
   

    

]