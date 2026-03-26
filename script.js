const questions = [
  {
    image: 'imagens/jambo.jpg',
    question: 'A árvore apresentada é cultivada em regiões tropicais e produz frutos doces que podem variar do vermelho ao amarelo ou rosado. Que árvore é esta?',
    options: ['Jambo', 'Manga', 'Açaí', 'Pitaya'],
    correct: 0
  },
  {
    image: 'imagens/banana.jpg',
    question: 'A bananeira é uma planta tropical cultivada amplamente para consumo humano. Qual destas características é correta sobre esta árvore?',
    options: ['Possui folhas longas e frutos que crescem em cachos', 'Seus frutos são vermelhos e pequenos', 'Produz frutos cítricos e aromáticos', 'Seus frutos crescem diretamente no tronco'],
    correct: 0
  },
  {
    image: 'imagens/goiaba.jpg',
    question: 'A goiabeira é cultivada em regiões tropicais e subtropicais e produz frutos utilizados para consumo humano. Sobre esta árvore, qual destas informações é correta?',
    options: ['Seus frutos são vermelhos e pequenos', 'Produz frutos cítricos e aromáticos', 'Seus frutos crescem diretamente no tronco', 'Seus frutos são arredondados, com polpa rosada ou branca'],
    correct: 3
  },
  {
    image: 'imagens/carambola.jpg',
    question: 'A árvore apresentada é uma espécie exótica de clima tropical, cujos frutos possuem cor amarela intensa e sabor levemente adocicado com um toque ácido. Que árvore é esta?',
    options: ['Laranja', 'Carambola', 'Limão', 'Jambo'],
    correct: 1
  },
  {
    image: 'imagens/limao.jpg',
    question: 'A árvore apresentada possui folhas aromáticas que liberam odor característico quando amassadas e frutos cítricos amplamente utilizados em sucos, temperos e sobremesas. Que árvore é esta?',
    options: ['Maracujá', 'Açaí', 'Manga', 'Limão'],
    correct: 3
  },
  {
    image: 'imagens/banana-mamao.jpg',
    question: 'A imagem mostra duas árvores frutíferas tropicais: uma com folhas longas e frutos alongados que crescem em cachos, e outra com tronco único e frutos grandes de polpa alaranjada. Quais são essas árvores?',
    options: ['Bananeira e Mangueira', 'Mamoeiro e Coqueiro', 'Bananeira e Mamoeiro', 'Bananeira e Limoeiro'],
    correct: 2
  },
  {
    image: 'imagens/mamao-pitaia.jpg',
    question: 'A pitaia é uma planta tropical com frutos comestíveis e polpa adocicada. Sobre esta árvore, qual destas informações é incorreta?',
    options: ['Seus frutos possuem cor intensa e sabor adocicado', 'É uma planta de clima tropical', 'Seus frutos crescem em cachos como a banana', 'É cultivada principalmente em regiões tropicais'],
    correct: 2
  },
  {
    image: 'imagens/mamao.jpg',
    question: 'O mamoeiro é uma planta tropical cultivada para consumo humano. Sobre esta árvore, qual destas informações é correta?',
    options: [ 'Seus frutos crescem em cachos como a banana', 'Seus frutos têm polpa alaranjada e crescem no tronco', 'É uma planta de clima temperado', 'Seus frutos são pequenos e vermelhos'],
    correct: 1
  },
  {
    image: 'imagens/coqueiro.jpg',
    question: 'O coqueiro é cultivado em regiões tropicais e produz frutos amplamente utilizados para consumo humano. Sobre esta árvore, qual destas informações é incorreta?',
    options: ['Seus frutos crescem diretamente no tronco', 'Produz frutos ricos em água e polpa comestível', 'É uma planta tropical de grande porte', 'Seus frutos são grandes e arredondados'],
    correct: 0
  },
  {
    image: 'imagens/coqueiro.jpg',
    question: 'Qual é o ponto de referência mais adequado para localizar este coqueiro no campus IFES Cachoeiro?',
    options: ['Perto do laboratório de mecânica', 'Entre os blocos 6 e 8', 'Perto do bloco 0', 'Perto da quadra poliesportiva'],
    correct: 2
  },
  {
    image: 'imagens/goiaba-cetem.jpg',
    question: 'Sabendo que esta goiabeira fica próxima à entrada da edificação do CETEM, qual é o ponto de referência mais adequado para encontrá-la?',
    options: ['Perto da entrada principal do campus', 'Entre os blocos 7 e 9', 'Perto da quadra poliesportiva', 'Perto do laboratório de mecânica'],
    correct: 2
  },
  {
    image: 'imagens/carambola.jpg',
    question: 'Qual é o ponto de referência mais apropriado para localizar a carambola no campus?',
    options: ['Perto do laboratório de mecânica', 'Perto da entrada principal do campus', 'Perto da quadra poliesportiva', 'Perto do bloco 0'],
    correct: 1
  },
  {
    image: 'imagens/mangueira.jpg',
    question: 'Qual é o ponto de referência mais apropriado para localizar esta mangueira no campus?',
    options: ['Perto da entrada principal do campus', 'Entre os blocos 5 e 7', 'Perto da quadra poliesportiva', 'No estacionamento do campus'],
    correct: 3
  },
  {
    image: 'imagens/uva.jpg',
    question: 'A videira é cultivada para produção de uvas comestíveis e sucos. Sobre esta planta, qual destas informações é incorreta?',
    options: ['As uvas crescem agrupadas em cachos pendentes', 'É uma planta trepadeira que precisa de algum suporte para crescer', 'Produz frutos pequenos e isolados em toda a planta', 'Pode ser cultivada tanto em regiões tropicais quanto temperadas'],
    correct: 2
  },
  {
    image: 'imagens/jambo.jpg',
    question: 'Se você prestou atenção, saberá a resposta desta questão: qual é a árvore que está entre o bloco 5 e o bloco 7?',
    options: ['Goiabeira', 'Manga', 'Jambo', 'Bananeira'],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 45;
let answered = false;

function getOptionLetter(index) {
  return String.fromCharCode(65 + index);
}

function renderOptions(question) {
  return question.options
    .map((option, index) => (
      `<button class="option-btn" type="button" data-option-index="${index}" data-letter="${getOptionLetter(index)}">${option}</button>`
    ))
    .join('');
}

function renderQuestion(question) {
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  document.getElementById('quiz').innerHTML = `
    <section class="quiz-stage" aria-labelledby="question-title">
      <figure class="media-panel">
        <div class="media-frame">
          <img class="quiz-image" src="${question.image}" alt="Árvore da questão ${currentQuestion + 1}">
        </div>
        <figcaption class="media-caption">
          Observe a imagem com atenção e tente identificar a espécie ou a característica destacada antes de escolher sua resposta.
        </figcaption>
      </figure>

      <article class="content-panel">
        <div class="meta-row">
          <div class="progress-block">
            <div class="progress-label">
              <span>Questão ${currentQuestion + 1} de ${questions.length}</span>
              <span>${Math.round(progressPercentage)}%</span>
            </div>
            <div class="progress-track" aria-hidden="true">
              <div class="progress-bar" style="width: ${progressPercentage}%;"></div>
            </div>
          </div>

          <div class="timer-badge" aria-live="polite">
            <span class="timer-label">Tempo</span>
            <span class="timer-value" id="timerValue">${timeLeft}s</span>
          </div>
        </div>

        <h2 id="question-title" class="question-title">${question.question}</h2>
        <p class="options-heading">Escolha uma alternativa</p>
        <div class="options-grid">
          ${renderOptions(question)}
        </div>

        <div class="actions">
          <button id="nextBtn" class="action-btn" type="button" hidden>Próxima questão</button>
        </div>
      </article>
    </section>
  `;
}

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById('quizSection').hidden = true;
    document.getElementById('finalScore').classList.add('is-visible');
    document.getElementById('score').textContent = score;
    return;
  }

  answered = false;
  timeLeft = 45;
  clearInterval(timer);

  const question = questions[currentQuestion];
  renderQuestion(question);
}

function startTimer() {
  timer = setInterval(() => {
    if (answered) {
      return;
    }

    timeLeft--;
    document.getElementById('timerValue').textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      showCorrectAnswer();
    }
  }, 1000);
}

function lockOptions() {
  document.querySelectorAll('.option-btn').forEach((button) => {
    button.disabled = true;
  });
}

function revealNextButton() {
  const nextButton = document.getElementById('nextBtn');
  if (nextButton) {
    nextButton.hidden = false;
  }
}

function checkAnswer(index, button) {
  if (answered) {
    return;
  }

  answered = true;
  clearInterval(timer);

  const question = questions[currentQuestion];
  const buttons = document.querySelectorAll('.option-btn');

  lockOptions();

  if (index === question.correct) {
    button.classList.add('correct');
    score++;
  } else {
    button.classList.add('wrong');
    buttons[question.correct].classList.add('correct');
  }

  revealNextButton();
}

function showCorrectAnswer() {
  if (answered) {
    return;
  }

  answered = true;
  const question = questions[currentQuestion];
  const buttons = document.querySelectorAll('.option-btn');

  lockOptions();
  buttons[question.correct].classList.add('correct');
  revealNextButton();
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion();
  startTimer();
}

document.addEventListener('click', (event) => {
  const optionButton = event.target.closest('.option-btn');
  if (optionButton) {
    checkAnswer(Number(optionButton.dataset.optionIndex), optionButton);
    return;
  }

  const nextButton = event.target.closest('#nextBtn');
  if (nextButton) {
    nextQuestion();
  }
});

loadQuestion();
startTimer();
