import { gsap } from "gsap";

const quizData = [
  {
    question: "Вид сайта?",
    answers: ["Лендинг", "Многостраничный"],
    nextQuestion: (answer) => answer === "Лендинг" ? 1 : 2
  },
  {
    question: "Количество блоков?",
    answers: ["1-3", "4-6", "7+"],
    nextQuestion: 3
  },
  {
    question: "Количество страниц?",
    answers: ["2-3", "4-5", "7+"],
    nextQuestion: 3
  },
  {
    question: "Дизайн",
    answers: ["Готовый дизайн", "Дизайн с нуля", "Чистичный дизайн"],
    nextQuestion: 4
  },
  {
    question: "Вид дизайна",
    answers: ["Шаблонный", "Уникальный", "Не знаю/не уверен(а)"],
    nextQuestion: 5
  },
  {
    question: "Кто будет предоставлять контент?",
    answers: ["Я сам(а)", "Нужно создать контент"],
    nextQuestion: 6
  },
  {
    question: "Адаптация под мобильные устройства",
    answers: ["Да", "Нет"],
    nextQuestion: 7
  },
  {
    question: "Нужна ли интеграция CMS Wordpress?",
    answers: ["Да", "Нет"],
    nextQuestion: 8
  },
  {
    question: "SEO оптимизация",
    answers: ["Не нужна", "Базовая", "Расширенная"],
    nextQuestion: 9
  },
  {
    question: "Какие блоки хотите включить дополнительно?",
    answers: ["Не нужны", "Форма обратной связи", "Слайдер(ы)", "Кулькулятор/квиз", "Карта", "Другие(уточните)"],
    nextQuestion: 10,
    multiple: true
  },
  {
    question: "Анимации",
    answers: ["Не нужны", "Базовые", "Расширенные"],
    nextQuestion: 11
  },
  {
    question: "Подключение аналитик",
    answers: ["Не нужны", "Яндекс", "Гугл", "Все вместе"],
    nextQuestion: null
  }
];

let currentQuestionIndex = 0;
let answers = {};
let selectedAnswers = [];
let previousQuestions = [];

const questionNumberElement = document.querySelector('.quiz-question__number');
const questionTextElement = document.querySelector('.quiz-question__text');
const answersContainer = document.querySelector('.calc__quiz-answers');
const progressNumberElement = document.querySelector('.quiz-bottom__progress-number');
const progressBarElement = document.querySelector('.quiz-bottom__progress-complete');
const acceptButton = document.querySelector('.quiz-bottom__accept-btn');
const backButton = document.querySelector('.quiz-question__back-btn');
const resetButton = document.querySelector('.calc__quiz-result-reset');
const quizInner = document.querySelector('.calc__quiz-inner');
const quizLoading = document.querySelector('.calc__quiz-loading');
const loadingSpinner = document.querySelector('.calc__quiz-loading-spinner');
const spinnerCircle = document.querySelector('.spinner-circle');
const quizResult = document.querySelector('.calc__quiz-result');

function loadQuestion(index) {
  const currentQuestion = quizData[index];
  questionNumberElement.textContent = `${index + 1} / ${quizData.length}`;
  questionTextElement.textContent = currentQuestion.question;

  answersContainer.innerHTML = '';
  currentQuestion.answers.forEach(answer => {
    const answerElement = document.createElement('span');
    answerElement.classList.add('quiz__answer');
    answerElement.textContent = answer;
    answerElement.addEventListener('click', () => selectAnswer(answerElement, answer));
    answersContainer.appendChild(answerElement);
  });

  const progressPercent = Math.round(((index) / quizData.length) * 100);
  progressNumberElement.textContent = `${progressPercent}%`;

  // Анимация появления вопроса и ответов
  gsap.fromTo(questionTextElement, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 });
  gsap.fromTo(answersContainer, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.2 });

  // Анимация прогресс-бара
  gsap.to(progressBarElement, { width: `${progressPercent}%`, duration: 0.5 });

  // Показать кнопку "Назад" после первого вопроса
  if (index > 0) {
    backButton.style.display = 'flex';
  } else {
    backButton.style.display = 'none';
  }
}

function selectAnswer(element, answer) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (currentQuestion.multiple) {
    element.classList.toggle('answer__active');
    if (selectedAnswers.includes(answer)) {
      selectedAnswers = selectedAnswers.filter(a => a !== answer);
    } else {
      selectedAnswers.push(answer);
    }
  } else {
    const activeAnswer = document.querySelector('.quiz__answer.answer__active');
    if (activeAnswer) {
      activeAnswer.classList.remove('answer__active');
    }
    element.classList.add('answer__active');
    selectedAnswers = [answer];
  }
}

function nextQuestion() {
  if (selectedAnswers.length > 0) {
    const currentQuestion = quizData[currentQuestionIndex];
    answers[currentQuestion.question] = selectedAnswers;

    if (selectedAnswers.includes("Другие(уточните)")) {
      const textarea = document.createElement('textarea');
      textarea.classList.add('quiz__textarea');
      textarea.placeholder = 'Уточните ваш ответ';
      answersContainer.appendChild(textarea);
      textarea.focus();
      textarea.addEventListener('blur', () => {
        answers[currentQuestion.question].push(` (${textarea.value})`);
        proceedToNextQuestion();
      });
    } else {
      proceedToNextQuestion();
    }
  }
}

function proceedToNextQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  const nextQuestionIndex = currentQuestion.nextQuestion instanceof Function ? currentQuestion.nextQuestion(selectedAnswers[0]) : currentQuestion.nextQuestion;

  if (nextQuestionIndex !== null) {
    previousQuestions.push(currentQuestionIndex);
    currentQuestionIndex = nextQuestionIndex;
    loadQuestion(currentQuestionIndex);
    selectedAnswers = [];
  } else {
    showLoading();
  }
}

function showLoading() {
  // Скрываем inner и показываем loading
  gsap.to(quizInner, { opacity: 0, visibility: 'hidden', duration: 0.5, onComplete: () => {
    gsap.fromTo(quizLoading, { opacity: 0, visibility: 'hidden' }, { opacity: 1, visibility: 'visible', duration: 0.5 });

    const loadingTl = gsap.timeline()
    loadingTl.fromTo('.loading-circle-black', {
      x: -60,
      opacity: 0,
    }, {
      opacity: 1,
      x: -60,
      duration: 0.5,
      ease: "none"
    })
    loadingTl.fromTo('.loading-circle-blue', {
      x: 60,
      opacity: 0,
    }, {
      opacity: 1,
      x: 60,
      duration: 0.5,
      ease: "none"
    }, '-=0.5')

    loadingTl.to('.calc__quiz-loading-spinner', {
      rotation: 360,
      repeat: -1,
      yoyo: false,
      duration: 1,
      ease: "none"
    }, '-=0.5')
  }});
  setTimeout(() => {
    showResults();
  }, 5000);
}

function showResults() {
  console.log(answers);

  gsap.to(quizLoading, { opacity: 0, duration: 0.5, onComplete: () => {
    gsap.fromTo(quizResult, { opacity: 0, visibility: 'hidden' }, { opacity: 1, visibility: 'visible', duration: 0.5 });
 
  }});
}

function resetQuiz() {
  currentQuestionIndex = 0;
  answers = {};
  selectedAnswers = [];
  previousQuestions = [];
  

  gsap.to([quizResult, quizLoading], { opacity: 0, visibility: 'hidden', duration: 0.5, onComplete: () => {
    gsap.fromTo(quizInner, { opacity: 0, visibility: 'hidden' }, { opacity: 1, visibility: 'visible', duration: 0.5 });
    loadQuestion(currentQuestionIndex);
  }});
}

acceptButton.addEventListener('click', () => {
  nextQuestion();
});

backButton.addEventListener('click', () => {
  if (previousQuestions.length > 0) {
    currentQuestionIndex = previousQuestions.pop();
    loadQuestion(currentQuestionIndex);
    selectedAnswers = answers[quizData[currentQuestionIndex].question] || [];
  }
});

resetButton.addEventListener('click', () => {
  resetQuiz();
});

function calcCost() {
  return 27600;
}

loadQuestion(currentQuestionIndex);
const pageForms = document.querySelectorAll('form');

pageForms.forEach(form => {
  const contactMethodInput = form.querySelector('.input-connect');
  const contactMethodLabel = form.querySelector('.placeholder-connect');
  const quizNameInput = form.querySelector('.input-name');
  const telegramRadio = form.querySelector('[id^="telegram-radio"]'); // ищем любой элемент, чей id начинается с 'telegram-radio'
  const emailRadio = form.querySelector('[id^="email-radio"]'); // ищем любой элемент, чей id начинается с 'email-radio'

 
  telegramRadio.addEventListener('change', () => {
    if (telegramRadio.checked) {
     
      contactMethodInput.disabled = false;
      contactMethodInput.value =''
      contactMethodLabel.innerHTML= 'Введите ваш телеграм';
      contactMethodInput.type = 'text';
      inputEmpty(contactMethodInput)
    }
  });

  // Обработчик для Email
  emailRadio.addEventListener('change', () => {
    if (emailRadio.checked) {
      contactMethodInput.disabled = false;
        contactMethodInput.value =''
      contactMethodLabel.innerHTML = 'Введите вашу почту'; 
      contactMethodInput.type = 'email';
      inputEmpty(contactMethodInput)
    }
  });

  // Обработчики для отслеживания пустоты инпутов
  contactMethodInput.addEventListener('input', () => { inputEmpty(contactMethodInput) });
  quizNameInput.addEventListener('input', () => { inputEmpty(quizNameInput) });

  function inputEmpty(input) {
    if (input.value.trim() !== '') {
      input.classList.add('not-empty');
    } else {
      input.classList.remove('not-empty');
    }
  }
});


var btnsHover = document.querySelectorAll('.btn--hover');
btnsHover.forEach(btnHover => {
  btnHover.addEventListener('mouseenter', function(e) {
    var parentOffset = this.getBoundingClientRect();
    var relX = e.pageX - parentOffset.left - window.scrollX;
    var relY = e.pageY - parentOffset.top - window.scrollY;
    var span = this.querySelector('span');
    span.style.top = relY + 'px';
    span.style.left = relX + 'px';
  });
  
  btnHover.addEventListener('mouseout', function(e) {
    var parentOffset = this.getBoundingClientRect();
    var relX = e.pageX - parentOffset.left - window.scrollX;
    var relY = e.pageY - parentOffset.top - window.scrollY;
    var span = this.querySelector('span');
    span.style.top = relY + 'px';
    span.style.left = relX + 'px';
  });
})

