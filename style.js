const questions = [
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars", "Venus"], answer: 2 },
    { question: "Which animal is known for its black and white stripes?", options: ["Lion", "Elephant", "Zebra", "Giraffe"], answer: 3 },
    { question: "What do plants release into the air during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { question: "How many continents are there in the world?", options: ["5", "6", "7", "8"], answer: 3 },
    { question: "Which is the tallest animal on land?", options: ["Elephant", "Giraffe", "Horse", "Camel"], answer: 2 },
    { question: "Who wrote the famous book Harry Potter?", options: ["Roald Dahl", "J.K. Rowling", "C.S. Lewis", "Dr. Seuss"], answer: 2 },
    { question: "What is the boiling point of water?", options: ["50°C", "100°C", "150°C", "200°C"], answer: 2 },
    { question: "Which organ pumps blood throughout the body?", options: ["Brain", "Lungs", "Heart", "Liver"], answer: 3 },
    { question: "Which is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], answer: 2 },
    { question: "Which country is famous for its pyramids?", options: ["Mexico", "Greece", "China", "Egypt"], answer: 4 }
];

const levels = [1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000];
let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score-container").textContent = `Score: Rs. ${score}`;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        alert(`Congratulations! You won Rs. ${score}`);
        return;
    }

    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn, index) => {
        btn.textContent = questionData.options[index];
        btn.style.backgroundColor = "#007bff"; // Reset button color
    });
}

function answerQuestion(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
        score = levels[currentQuestion];
        document.getElementById("score-container").textContent = `Score: Rs. ${score}`;
        alert("Correct Answer!");
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Wrong Answer! Your competition is over.");
        document.getElementById("score-container").textContent = `Final Score: Rs. ${score}`;
    }
}

function quitQuiz() {
    alert(`You quit the quiz. Your final score is Rs. ${score}`);
}