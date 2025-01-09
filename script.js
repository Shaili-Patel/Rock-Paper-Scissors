
let userName = prompt('What is your name?')
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
//End Prompts

let myTitle = `
  <h2>${userName}!</h2>
`;
// Entire Title End

console.log(myTitle);

document.getElementById('title').innerHTML = myTitle;

//Console logging Complete

const choices = ["rock", "paper", "scissors"];      7:15