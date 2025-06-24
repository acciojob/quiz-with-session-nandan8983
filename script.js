//your JS code here.
document.addEventListener("DOMContentLoaded", () => {
    
    const questionsElement = document.getElementById("questions");
    const submitButton = document.getElementById("submit");
    const scoreDisplay = document.getElementById("score");

    // Load previous progress from session storage
    const savedProgress = JSON.parse(sessionStorage.getItem("progress")) || {};

    // Display the quiz questions and choices
    function renderQuestions() {
        questionsElement.innerHTML = ""; // Clear previous content
        questions.forEach((question, i) => {
            const questionElement = document.createElement("div");
            const questionText = document.createElement("p");
            questionText.textContent = question.question;
            questionElement.appendChild(questionText);

            question.choices.forEach(choice => {
                const label = document.createElement("label");
                const choiceElement = document.createElement("input");
                choiceElement.setAttribute("type", "radio");
                choiceElement.setAttribute("name", `question-${i}`);
                choiceElement.setAttribute("value", choice);

                // Restore previous selection
                if (savedProgress[`question-${i}`] === choice) {
                    choiceElement.checked = true;
                }

                choiceElement.addEventListener("change", () => {
                    savedProgress[`question-${i}`] = choice;
                    sessionStorage.setItem("progress", JSON.stringify(savedProgress));
                });

                label.appendChild(choiceElement);
                label.appendChild(document.createTextNode(choice));
                questionElement.appendChild(label);
            });

            questionsElement.appendChild(questionElement);
        });
    }

    // Load previous score from local storage
    const savedScore = localStorage.getItem("score");
    if (savedScore !== null) {
        scoreDisplay.textContent = `Your last score was ${savedScore} out of 5.`;
    }

    submitButton.addEventListener("click", () => {
        let score = 0;
        questions.forEach((question, i) => {
            if (savedProgress[`question-${i}`] === question.answer) {
                score++;
            }
        });

        scoreDisplay.textContent = `Your score is ${score} out of 5.`;
        localStorage.setItem("score", score);
    });

    renderQuestions();
});


// Do not change code below this line 
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();
