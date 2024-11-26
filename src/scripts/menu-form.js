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
  
gsap.set(formSendBtn,{
  borderRadius:'50px',
})
  formSendTl.to(formSendBtn, {
    width: 300,
    duration: 0.5,
   
    ease: 'elastic.out(1, 0.5)', // Пружина
  }, );

  formSendTl.to(sendText, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out', // Плавное появление текста
  }, '<');

  formSendTl.to(sendIcon, {
    rotation: 45,
    duration: 0.3,
    x: 80,
    
  }, '-=0.3');
});

formSendBtn.addEventListener('mouseleave', () => {
  // Убираем все предыдущие анимации
  gsap.killTweensOf(formSendBtn);
  gsap.killTweensOf(sendText);
  gsap.killTweensOf(sendIcon);
const formSendTl = gsap.timeline()

gsap.set(formSendBtn,{
  borderRadius:50,
})

formSendTl.to(formSendBtn, {
    
    width: 50,
    duration: 0.5,
    ease: 'elastic.out(1, 0.5)', // Пружина
  });

  formSendTl.to(sendText, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.out', // Плавное исчезновение текста
  });

  formSendTl.to(sendIcon, {
    rotation: 0,
    x: 0,
    duration: 0.3,
    ease: 'back.out(1.7)', // Легкий "прыжок" иконки назад
  });
});


       


        let swiper;

        // Функция инициализации/уничтожения Swiper
        function toggleSwiper() {
            if (window.matchMedia('(max-width: 682px)').matches) {
                // Если ширина меньше или равна 682px, уничтожаем Swiper
                if (swiper) {
                    swiper.destroy(true, true);
                    swiper = null; // Удаляем экземпляр
                    gsap.set('.swiper-wraper',{
                      clearProps:'all'
                    })
                }
            } else {
                // Если ширина больше 682px, инициализируем Swiper
                if (!swiper) {
                   swiper = new Swiper('.swiper', {
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
                }
            }
        }
        
        // Проверяем ширину при загрузке
        toggleSwiper();
        
        // Слушаем изменения размера экрана
        window.addEventListener('resize', toggleSwiper);

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