const questions = [
  {
    question: "Berapa 3 + 4?",
    options: ["6", "7", "8", "9"],
    correct: "7"
  },
  {
    question: "Jika kamu punya 2 apel dan beli 3 lagi, berapa totalnya?",
    options: ["4", "5", "6"],
    correct: "5"
  }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = q.question;
  const answers = document.getElementById('answers');
  answers.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    answers.appendChild(btn);
  });
}

function checkAnswer(answer) {
  if (answer === questions[current].correct) {
    alert("Benar!");
  } else {
    alert("Salah.");
  }
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById('game').innerHTML = "<h2>Selesai! Terima kasih!</h2>";
  }
}

loadQuestion();
