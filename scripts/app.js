const questionsList = [
  {
    questionNumber: 0,
    questionText: "blank",
    optionList: ["blank", "blank", "blank"]
  },
  {
    questionNumber: 1,
    questionText: "Pick a word set that describes you well",
    optionList: [
      "Strongest and protective",
      "Tough and Serious",
      "Intellectual and sarcastic"
    ]
  },

  {
    questionNumber: 2,
    questionText: "Where do you want to get your energy from?",
    optionList: [
      "Energy from Sun",
      "Peak Human Strength",
      "A genius engineering mind"
    ]
  },

  {
    questionNumber: 3,
    questionText: "Choose your weapon",
    optionList: ["Yourself", "A strong hammer", "Armour and gadgets"]
  }
];

let questionCounter;
let chosenOptions = [];
const totalQuestions = questionsList.length - 1;

function loadQuestion(qnumber) {
  document.querySelector("#questionText").textContent =
    questionsList[qnumber].questionText;
  document.querySelector("#option1Text").textContent =
    questionsList[qnumber].optionList[0];
  document.querySelector("#option2Text").textContent =
    questionsList[qnumber].optionList[1];
  document.querySelector("#option3Text").textContent =
    questionsList[qnumber].optionList[2];

  if (qnumber === totalQuestions) {
    document.querySelector(".nextButton").textContent = "Finish the game";
  }
}

document.querySelector(".nextButton").addEventListener("click", function() {
  if (document.querySelector(".nextButton").textContent === "Play again!") {
    alert("Yayy Playing again");
    location.reload();
  } else {
    if (document.querySelector("input[name=option]:checked") != null) {
      if (questionCounter === totalQuestions) {
        //last question process
        chosenOptions.push(findSelectedOption());
        showResult();
        document.querySelector(".nextButton").textContent = "Play again!";
      } else {
        questionCounter++;
        chosenOptions.push(findSelectedOption());
        console.log(chosenOptions);
        loadQuestion(questionCounter);
        resetOptions();
      }
    } else {
      alert("Please select your answer");
    }
  }
});

function findSelectedOption() {
  let selectedOption = document.querySelector("input[name=option]:checked")
    .nextElementSibling.textContent;
  return selectedOption;
}

function resetOptions() {
  document.querySelector("input[name=option]:checked").checked = false;
}

function playQuiz() {
  console.log("ready!");
  questionCounter = 1;
  chosenOptions = [];
  loadQuestion(questionCounter);
  document.querySelector(".nextButton").textContent = "Next";
}

function showResult() {
  let Hero = result();
  document.querySelector(".question").classList.add("hideContent");
  document.querySelector(".options").classList.add("hideContent");
  document.querySelector(".questionBox").innerText = `
  Woohoo!!! 
  
  You are "${Hero}"
    
  You are ${chosenOptions[0]}
  Your strength is ${chosenOptions[1]}
  You'd like to use ${chosenOptions[2]} as your weapon(s).
  
  `;
}

function result() {
  let superHero = "One Of A Kind! Our New SuperHero";
  if (
    chosenOptions[0] === questionsList[1].optionList[0] &&
    chosenOptions[1] === questionsList[2].optionList[0] &&
    chosenOptions[2] === questionsList[3].optionList[0]
  ) {
    superHero = "SUPER MAN";
  } else if (
    chosenOptions[0] === questionsList[1].optionList[1] &&
    chosenOptions[1] === questionsList[2].optionList[1] &&
    chosenOptions[2] === questionsList[3].optionList[1]
  ) {
    superHero = "THOR";
  } else if (
    chosenOptions[0] === questionsList[1].optionList[2] &&
    chosenOptions[1] === questionsList[2].optionList[2] &&
    chosenOptions[2] === questionsList[3].optionList[2]
  ) {
    superHero = "IRON MAN";
  }

  return superHero;
}

$(document).ready(playQuiz());
