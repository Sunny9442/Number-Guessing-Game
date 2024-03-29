import inquirer from "inquirer";
console.log("/n/ Welcome Sunny World (CLI number-guessing-game)/n/");
const randomNumber = Math.floor(Math.random() * 10 + 3);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Enter you guessed Number with in (3 to 10)",
    },
]);
console.log(answer);
if (answer.userguessednumber === randomNumber) {
    console.log("congratulations you guessed a right number");
}
else {
    console.log("Oh Sorry you guessed a wrong number");
}
