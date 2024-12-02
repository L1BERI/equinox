import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import Swiper from 'swiper';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css/bundle';
gsap.registerPlugin(ScrollToPlugin)

const formSendBtn = document.querySelector('.form__send-btn');
const sendText = formSendBtn.querySelector('.send-text');
const sendIcon = formSendBtn.querySelector('.send-icon');

formSendBtn.addEventListener('mouseover', () => {
  // Убираем все предыдущие анимации
  gsap.killTweensOf(formSendBtn);
  gsap.killTweensOf(sendText);
  gsap.killTweensOf(sendIcon);
  const formSendTl = gsap.timeline()


  formSendTl.to(sendIcon, {
  
    rotation: 45,
    duration: 0.3,
    
  }, );


});

formSendBtn.addEventListener('mouseleave', () => {
  // Убираем все предыдущие анимации
  gsap.killTweensOf(formSendBtn);
  gsap.killTweensOf(sendText);
  gsap.killTweensOf(sendIcon);
const formSendTl = gsap.timeline()




  formSendTl.to(sendIcon, {
    rotation: 0,
  
    duration: 0.3,
    
  });
});


       

let swiper = null; // Переменная для хранения экземпляра Swiper

function initializeSwiper() {
  const screenWidth = window.innerWidth; // Получаем ширину экрана

  if (screenWidth > 768) {
    // Если ширина больше 768 и Swiper ещё не инициализирован
    if (!swiper) {
      swiper = new Swiper('.swiper', {
        modules: [Mousewheel],
        direction: 'vertical',
        slidesPerView: 'auto',
        loop: true,
        centeredSlides: true,
        initialSlide: 2,
        spaceBetween: 10,
        speed: 1000,
        mousewheel: {
          forceToAxis: true, // Прокрутка только по вертикали
          sensitivity: 1,   // Чувствительность прокрутки
        },
        breakpoints: {
          816: {
            slidesPerView: 5,
          },
        },
      });
    }
  } else {
    // Если ширина меньше или равна 768 и Swiper активен, уничтожаем его
    if (swiper) {
      swiper.destroy(true, true); // Полностью уничтожает Swiper
      swiper = null; // Сбрасываем переменную
     
    }
    const menuLinks = document.querySelectorAll('.swiper-slide')
    menuLinks[2].classList.add('swiper-slide-active')
  }
}

// Слушаем событие изменения размера окна
window.addEventListener('resize', initializeSwiper);

// Инициализация при загрузке страницы
initializeSwiper();

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