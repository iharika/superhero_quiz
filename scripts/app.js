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
      "Intellectual and sarcastic",
      "Tough and Serious"
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

let questionCounter = 0;
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

  if (totalQuestions === qnumber) {
    document.querySelector(".nextButton").textContent = "Finish the game";
  }
}

document.querySelector(".nextButton").addEventListener("click", function() {
  if (document.querySelector(".nextButton").textContent === "Play again!") {
    alert("YAyy Playing again");
    playQuiz();
  }

  if (document.querySelector("input[name=option]:checked") != null) {

    if (questionCounter === totalQuestions) {
      //last question process
      chosenOptions.push(findSelectedOption());
      showResult();
      document.querySelector(".nextButton").textContent = "Play again!";
    } 
    
    else {
      questionCounter++;
      chosenOptions.push(findSelectedOption());
      console.log(chosenOptions);
      loadQuestion(questionCounter);
      resetOptions();
    }

  } 
  
  else {
    alert("Please select an option");
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
  document.querySelector('.questionBox').childNodes.style.display = 'none';
    document.querySelector('.questionBox').textContent = `
  You have selected these options

   ${chosenOptions}
   
   `;

}



$(document).ready(playQuiz());


