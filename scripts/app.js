const questionList = [
  "Pick a word set that describes you well",
  "What makes you feel strong?",
  "Choose your weapon"
];
const optionlist1 = [
  "Strongest and protective",
  "Intellectual and sarcastic",
  "Tough and Serious"
];
const optionlist2 = [
  "Energy from Sun",
  "Peak Human Strength",
  "A genius engineering mind"
];
const optionlist3 = ["Yourself", "A strong hammer", "Armour and gadgets"];
let questionCounter = 0;
let chosenOptions = [];

function loadQuestion1() {
  questionCounter = 1;
  document.querySelector("#questionText").textContent = questionList[0];
  document.querySelector("#option1Text").textContent = optionlist1[0];
  document.querySelector("#option2Text").textContent = optionlist1[1];
  document.querySelector("#option3Text").textContent = optionlist1[2];
}

function loadQuestion2() {
  questionCounter = 2;
  document.querySelector("#questionText").textContent = questionList[1];
  document.querySelector("#option1Text").textContent = optionlist2[0];
  document.querySelector("#option2Text").textContent = optionlist2[1];
  document.querySelector("#option3Text").textContent = optionlist2[2];
  resetOptions();
}

function loadQuestion3() {
  questionCounter = 3;
  document.querySelector("#questionText").textContent = questionList[2];
  document.querySelector("#option1Text").textContent = optionlist3[0];
  document.querySelector("#option2Text").textContent = optionlist3[1];
  document.querySelector("#option3Text").textContent = optionlist3[2];
  document.querySelector(".nextButton").textContent = "Finish the Quiz";
  resetOptions();
}

$(document).ready(function() {
  console.log("ready!");
  loadQuestion1();
});

document.querySelector(".nextButton").addEventListener("click", function() {
  switch (questionCounter) {
    case 1:
      chosenOptions[0] = findSelectedOption();
      console.log(chosenOptions);
      loadQuestion2();
      break;
    case 2:
      chosenOptions[1] = findSelectedOption();
      console.log(chosenOptions);
      loadQuestion3();
      break;
    case 3:
      chosenOptions[2] = findSelectedOption();
      console.log(chosenOptions);
  }
});

function findSelectedOption() {
  let selectedOption = "";
  if (document.querySelector("#option1").checked) {
    selectedOption = document.querySelector("#option1Text").textContent;
  } else if (document.querySelector("#option2").checked) {
    selectedOption = document.querySelector("#option2Text").textContent;
  } else if (document.querySelector("#option3").checked) {
    selectedOption = document.querySelector("#option3Text").textContent;
  }
  return selectedOption;
}

function resetOptions() {
  document.querySelector("#option1").checked = false;
  document.querySelector("#option2").checked = false;
  document.querySelector("#option3").checked = false;
}
