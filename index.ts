import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("Welcome to the  Quize")); 
let docontinue = true;
while (docontinue) {
let api = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";
let Name = await inquirer.prompt([{
    name: "name",
    type: "input",
    message: "Enter your name: "
}]);
console.log(chalk.blue(Name.name));
console.log(chalk.blue("Let's start the Quize"));
console.log(chalk.blue("You will get 10 questions"));
console.log(chalk.blue("You will get 10 points"));

let data = await fetch(api);
let jsonData = await data.json();
let questions = jsonData.results;
let score = 0;
for (let i = 0; i < questions.length; i++) {
    let question = questions[i].question;
    let options = questions[i].incorrect_answers;
    options.push(questions[i].correct_answer);
    let answer = await inquirer.prompt([{
        name: "answer",
        type: "list",
        message: question,
        choices: options
    }]);
    if (answer.answer === questions[i].correct_answer) {
        score++;
    }
}
console.log(chalk.green(`Your score is ${score}`));
console.log(chalk.green("Thanks for playing"));
let playmore = await inquirer.prompt([{
    name: "play",
    type: "list",
    message: "Do you want to play again?",
    choices: ["Yes", "No"]
}]);
// using loop for more play
if (playmore.play === "Yes") {
    continue;
} else {
    break;
     }
};
