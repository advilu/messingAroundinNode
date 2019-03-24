let inquirer = require("inquirer");
let mysql = require("mysql");

function conversation(){ 
    inquirer.prompt([
        {
        message: "Why, hello there! Would you like to post an item or make a bid?",
        type: "list",
        choices: ["Post something", "Bid on something"],
        name: "transactionType"
        }
    ])
    .then (function(inquirerResponse){
        let response = inquirerResponse.transactionType;
        console.log(response);
    })
    



}

conversation();