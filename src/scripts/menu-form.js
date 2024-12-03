import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import Swiper from 'swiper';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css/bundle';
gsap.registerPlugin(ScrollToPlugin)

const formSendBtn = document.querySelector('.form__send-btn');
const sendText = formSendBtn.querySelector('.send-text');
const sendIcon = formSendBtn.querySelector('.send-icon');




       

let swiper = null; // Переменная для хранения экземпляра Swiper
const menuLinks = document.querySelectorAll('.swiper-slide')
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
    
    menuLinks[0].classList.add('swiper-slide-active')
    menuLinks.forEach((slide, index) => {
      const link = slide.querySelector('a'); // Ищем элемент <a> внутри
      if (link) {
        // Массив текстов для ссылок
        const texts = ['ГЛАВНАЯ', 'О НАС', 'ЭТАПЫ', 'УСЛУГИ', 'РАСЧЕТ', 'КОНТАКТЫ'];
        link.innerHTML = texts[index] || ''; // Присваиваем текст, если он существует
      }
    });
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

    if (targetSection) {
      gsap.to(window, {
        duration: 1,
        scrollTo: '#live',
        ease: "power2.inOut"
      });
    }
  });
});


menuLinks.forEach(el => {
  el.addEventListener('click', (e)=>{

    for (let i = 0; i < menuLinks.length; i++){
      if(menuLinks[i].classList.contains('swiper-slide-active')){
        menuLinks[i].classList.remove('swiper-slide-active')
        el.classList.add('swiper-slide-active')
      }
    }
  })
})

const formMobileBtn = document.querySelector('.menu__left-mobile-btn')
let counter = 1
formMobileBtn.addEventListener('click', () => {
  const mobileForm = document.querySelector('.menu__left-mobile')
  const mobileFormWapper = document.querySelector('.form__inputs-wrapper')
 
  if(counter === 0){
    counter++
  } else {
    counter--
  }

  if(counter === 0){
    gsap.to(mobileForm, {
      y:-250,
     
    })
    gsap.to(mobileFormWapper, {
      visibility:'visible',
      opacity:1
    })
  } else {
    gsap.to(mobileForm, {
      y:0,
    
    })
    gsap.to(mobileFormWapper, {
      visibility:'hidden',
      opacity:0
    })
  }
  
})