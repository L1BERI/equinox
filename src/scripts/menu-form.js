import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import Swiper from 'swiper';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css/bundle';
gsap.registerPlugin(ScrollToPlugin)
const contactMethodInput = document.getElementById('contactMethod');
const telegramRadio = document.getElementById('telegram');
const emailRadio = document.getElementById('email');

telegramRadio.addEventListener('change', () => {
  // Разблокируем поле и меняем placeholder для логина Телеграм
  contactMethodInput.disabled = false;
  contactMethodInput.placeholder = 'Введите ваш телеграм';
  contactMethodInput.type = 'text'; // Логин Телеграма
});

emailRadio.addEventListener('change', () => {
  // Разблокируем поле и меняем placeholder для Email
  contactMethodInput.disabled = false;
  contactMethodInput.placeholder = 'Введите вашу почту';
  contactMethodInput.type = 'email'; // Валидация для email
});

// const formSendBtn = document.querySelector('.form__send-btn');
// const sendText = formSendBtn.querySelector('.send-text');
// const sendIcon = formSendBtn.querySelector('.send-icon');

// formSendBtn.addEventListener('mouseover', () => {
//   // Убираем все предыдущие анимации
//   gsap.killTweensOf(formSendBtn);
//   gsap.killTweensOf(sendText);
//   gsap.killTweensOf(sendIcon);

//   gsap.to(formSendBtn, {
//     width: 300,
//     duration: 0.3,
//     borderRadius: '50px',
//   });

//   gsap.to(sendText, {
//     opacity: 1,
//     duration: 0.3,
//   });

//   gsap.to(sendIcon, {
//     rotation: 45, // Поворачиваем иконку на 45 градусов
//     duration: 0.4,
//     x: 80,
//   });
// });

// formSendBtn.addEventListener('mouseleave', () => {
//   // Убираем все предыдущие анимации
//   gsap.killTweensOf(formSendBtn);
//   gsap.killTweensOf(sendText);
//   gsap.killTweensOf(sendIcon);

//   gsap.to(formSendBtn, {
//     borderRadius: '50%',
//     width: 50,
//     duration: 0.3,
//   });

//   gsap.to(sendText, {
//     opacity: 0,
//     duration: 0.3,
//   });

//   gsap.to(sendIcon, {
//     rotation: 0, // Возвращаем иконку в исходное положение
//     x: 0,
//     duration: 0.3,
//   });
// });

// Инициализация Swiper
const swiper = new Swiper('.swiper', {
  modules: [Mousewheel],
  direction: 'vertical',
  slidesPerView: 5,
  loop: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 1000,
  mousewheel: {
    forceToAxis: true, // Прокрутка только по вертикали
    sensitivity: 1, // Чувствительность прокрутки
  }, // Изначально активный слайд "ГЛАВНАЯ"
});


document.querySelectorAll('.menu__right-list-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    console.log(targetId);
    const targetSection = document.getElementById(targetId);
console.log(targetSection);
console.log(targetSection.offsetTop);
    if (targetSection) {
      gsap.to(window, {
        duration: 1,
        scrollTo: '#live',
        ease: "power2.inOut"
      });
    }
  });
});