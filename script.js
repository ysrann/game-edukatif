 <script>
    const questions = [
      {
        question: "Apa itu gunung berapi?",
        options: ["Bongkahan es besar", "Lubang di bumi tempat keluarnya magma", "Kawah buatan manusia", "Sungai lava"],
        answer: 1
      },
      {
        question: "Apa itu magma?",
        options: ["Lava yang membeku", "Batuan cair di bawah permukaan bumi", "Gas bertekanan", "Air panas dari bumi"],
        answer: 1
      },
      {
        question: "Lava adalah...",
        options: ["Magma yang keluar ke permukaan bumi", "Batu biasa", "Pasir panas", "Air dari dalam bumi"],
        answer: 0
      },
      {
        question: "Letusan gunung berapi biasanya disebabkan oleh...",
        options: ["Gempa bumi", "Tekanan gas dan magma", "Angin kencang", "Petir"],
        answer: 1
      },
      {
        question: "Apa dampak positif dari letusan gunung berapi?",
        options: ["Kerusakan rumah", "Korban jiwa", "Tanah menjadi subur", "Polusi udara"],
        answer: 2
      },
      {
        question: "Nama gunung berapi aktif di Indonesia adalah...",
        options: ["Gunung Salju", "Gunung Merapi", "Gunung Antariksa", "Gunung Terang"],
        answer: 1
      },
      {
        question: "Material yang dikeluarkan gunung berapi antara lain...",
        options: ["Air", "Batu bara", "Lava, abu vulkanik, gas", "Minyak"],
        answer: 2
      },
      {
        question: "Manakah yang termasuk gejala pra-letusan?",
        options: ["Hujan deras", "Gempa kecil dan suara gemuruh", "Pelangi", "Kilat"],
        answer: 1
      },
      {
        question: "Kubah lava terbentuk karena...",
        options: ["Gas naik ke atmosfer", "Lava terlalu kental dan menumpuk", "Air masuk ke kawah", "Tanah longsor"],
        answer: 1
      },
      {
        question: "Gunung berapi disebut aktif jika...",
        options: ["Sudah tidak meletus selama 1.000 tahun", "Masih menunjukkan aktivitas vulkanik", "Tertutup salju", "Tidak ada magma"],
        answer: 1
      }
    ];

    let currentQuestion = 0;
    let score = 0;

    function showQuestion(index) {
      const q = questions[index];
      document.getElementById("question").innerText = q.question;
      const optionsDiv = document.getElementById("options");
      optionsDiv.innerHTML = "";

      q.options.forEach((option, i) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(i);
        optionsDiv.appendChild(btn);
      });
    }

    function checkAnswer(selected) {
      const correct = questions[currentQuestion].answer;
      if (selected === correct) {
        score++;
        alert("Benar!");
      } else {
        alert(`Salah! Jawaban yang benar: ${questions[currentQuestion].options[correct]}`);
      }
      document.getElementById("next-btn").style.display = "inline-block";
      const btns = document.querySelectorAll("#options button");
      btns.forEach(btn => btn.disabled = true);
    }

    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
        document.getElementById("next-btn").style.display = "none";
      } else {
        showScore();
      }
    }

    function showScore() {
      document.getElementById("quiz-container").style.display = "none";
      document.getElementById("score-container").style.display = "block";
      document.getElementById("score").innerText = `${score} dari ${questions.length}`;
    }

    function restartQuiz() {
      currentQuestion = 0;
      score = 0;
      document.getElementById("quiz-container").style.display = "block";
      document.getElementById("score-container").style.display = "none";
      showQuestion(currentQuestion);
      document.getElementById("next-btn").style.display = "none";
    }

    // Inisialisasi awal
    showQuestion(currentQuestion);
    document.getElementById("next-btn").style.display = "none";
  </script>
</body>
</html>
