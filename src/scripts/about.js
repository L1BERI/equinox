import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import LocomotiveScroll from 'locomotive-scroll';

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger);

// // Инициализация Locomotive Scroll
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
//   lerp: 0.025, // Для более медленной прокрутки
// });

// // Прокси для синхронизации GSAP с Locomotive Scroll
// ScrollTrigger.scrollerProxy('[data-scroll-container]', {
//   scrollTop(value) {
//     return arguments.length
//       ? scroll.scrollTo(value, 0, 0) // Скролл к указанной позиции
//       : scroll.scroll.instance.scroll.y; // Получение текущей позиции
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   pinType: document.querySelector('[data-scroll-container]').style.transform
//     ? 'transform'
//     : 'fixed',
// });

// // Обновление ScrollTrigger после обновления Locomotive Scroll
// scroll.on('scroll', ScrollTrigger.update);

// // Обновляем положение всех ScrollTrigger и Locomotive Scroll при загрузке
// ScrollTrigger.addEventListener('refresh', () => scroll.update());
// ScrollTrigger.refresh();

// // GSAP анимация увеличения круга
// let aboutTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.header', // Когда скроллинг доходит до начала .header
//     start: 'top top', // Начало анимации при самом начале скролла
//     end: '+=100%', // Анимация длится до полного скролла по высоте экрана
//     scrub: 0.5, // Связывает анимацию с прокруткой
//     scroller: '[data-scroll-container]', // Обязательно указываем наш контейнер
//   },
// });

// // Анимация увеличения круга
// aboutTl.to('.header__scroll-down', {
//   scale: 10, // Увеличиваем круг
//   duration: 15, // Длительность анимации
//   ease: 'power1.inOut',
// }).to('.header__subtitle',{
//     y:100,
// });

// // Анимация появления .about
// aboutTl.to('.about', {
//   opacity: 1, // Появление блока .about
//   duration: 1,
//   zIndex: 1,
//   ease: 'power1.out',
// });

// // Отдельный ScrollTrigger для заголовка .about__title
// gsap.fromTo(
//     '.about__title',
//     {
//       x: 200,
//       opacity: 0,
//     },
//     {
//       x: 0,
//       opacity: 1,
//       duration: 1.5,
//       ease: 'power1.out',
//       scrollTrigger: {
//         trigger: '.about', // Запуск анимации при появлении секции .about
//         start: 'top center', // Старт, когда секция .about находится в центре экрана
//         end: 'bottom center', // Конец триггера, когда секция покидает экран
//         scroller: '[data-scroll-container]', // Используем кастомный скроллер
//         scrub: false, // Отменяем "scrub", чтобы анимация не была связана с прокруткой
//         onEnter: (self) => {
//           // Этот обработчик сработает, когда секция .about полностью войдет в видимость
//           if (self.direction === 1) { // Проверяем, что прокрутка вниз
//             gsap.to('.about__title', { delay: 0.5, opacity: 1, x: 0, duration: 1.5 }); // Анимация с задержкой
//           }
//         },
//         onLeaveBack: (self) => {
//           // Этот обработчик сработает при прокрутке вверх (когда секция уходит назад)
//           if (self.direction === -1) { // Проверяем, что прокрутка вверх
//             gsap.to('.about__title', {opacity: 0, x: 200, duration: 1 }); // Возвращаем заголовок обратно при скролле вверх
//           }
//         },
//       },
//       delay: 0.8,
//     }
//   );

// Логика для плавного перехода между секциями
// const sections = document.querySelectorAll('.section');

// // Функция для плавного перехода к блоку
// function scrollToSection(index) {
//   if (index < 0 || index >= sections.length) return; // Проверяем, чтобы индекс не выходил за границы
//   const targetSection = sections[index];
//   scroll.scrollTo(targetSection); // Используем Locomotive Scroll для плавного перехода
// }

// // Текущий индекс активной секции
// let currentSection = 0;

// // Обработка событий прокрутки
// window.addEventListener('wheel', (event) => {
//   if (event.deltaY > 0) {
//     // Скролл вниз
//     currentSection++;
//   } else {
//     // Скролл вверх
//     currentSection--;
//   }
//   currentSection = Math.max(0, Math.min(currentSection, sections.length - 1)); // Ограничиваем значения индекса
//   scrollToSection(currentSection);
// });
// window.addEventListener('wheel', (event) => {
//     let scrollAmount = 450; // Увеличение скролла на 200 пикселей за одно прокручивание
//     if (event.deltaY > 0) {
//         window.scrollBy(0, scrollAmount);
//     } else {
//         window.scrollBy(0, -scrollAmount);
//     }
//     event.preventDefault(); // Предотвращаем стандартное поведение, чтобы использовать кастомный сдвиг
// });
const siteTl = gsap.timeline();

const siteWrapper = document.querySelector('.wrapper');

const baseDuration = 2; // Базовая продолжительность для первой анимации
const durationFactor = 0.5; // Множитель для увеличения длительности анимации

ScrollTrigger.create({
  animation: siteTl,
  trigger: '.wrapper',
  start: 'top top',
  end: '+=1500%', // Общая длина скроллинга
  scrub: 2,
  pin: true,
  markers: true,
});

siteTl.to('.scroll-down-circle', { scale: 27.5, duration: baseDuration });

siteTl.fromTo(
  '.about',
  { opacity: 0, visibility: 'hidden' },
  {
    opacity: 1,
    visibility: 'visible',
    duration: baseDuration * durationFactor,
  },
);

siteTl.fromTo(
  '.about__title',
  {
    x: 50,
    '-webkit-text-stroke': '2px #ffffff',
  },
  {
    x: 0,
    color: 'transparent',
    '-webkit-text-stroke': '2px #ffffff',
    opacity: 0.2,
    duration: baseDuration * durationFactor * 1.5,
    ease: 'power1.inOut',
  },
),
  '-=2.3';

siteTl.to('.about__circles', {
  opacity: 1,
  ease: 'power1.inOut',
  duration: baseDuration * durationFactor,
});

siteTl.to('.about__circles', {
  x: -550,
  duration: baseDuration * 1.2,
});

siteTl.fromTo(
  '.about__web',
  {
    opacity: 0,
    x: 0,
  },
  {
    x: 400,
    opacity: 1,
    duration: baseDuration,
  },
);

siteTl.fromTo(
  '.about__des',
  {
    opacity: 0,
    x: 0,
  },
  {
    x: 770,
    opacity: 1,
    duration: baseDuration * durationFactor,
  },
  '-=0.5',
);

siteTl.to('.about__circles', {
  stagger: 5,
  delay: 1,
  duration: baseDuration * 0.8,
});

siteTl.to('.about__web', {
  x: 0,
  zIndex: 1,
  duration: baseDuration * durationFactor,
});

siteTl.to(
  '.about__des',
  {
    x: 0,
    zIndex: 0,
    duration: baseDuration * durationFactor,
  },
  '-=0.5',
);

siteTl.to(
  {},
  {
    duration: 0.1,
    onComplete: () => {
      gsap.to(
        [
          '.about__us > .about__circle',
          '.about__web > .about__circle',
          '.about__des > .about__circle',
        ],
        {
          boxShadow: 'none',
          duration: baseDuration * 0.5,
        },
      );
    },
  },
);

siteTl.to('.about__us', {
  zIndex: 3,
  duration: baseDuration * 0.5,
});

siteTl.to('.about__circles', {
  x: -550,
  duration: baseDuration * 1.2,
});

siteTl.to(
  '.about__us > .about__circle',
  {
    boxShadow: '0 0 200px 0 #2d4cff',
    duration: baseDuration * 0.6,
  },
  '-=0.5',
);

siteTl.fromTo(
  '.about__sidebar',
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: baseDuration * 0.8,
  },
);

siteTl.fromTo(
  ['.about__us-text-wrapper'],
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: baseDuration * 0.7,
  },
);

siteTl.to('.about', {
  stagger: 3,
  delay: 1,
  duration: baseDuration * 0.5,
});

siteTl.fromTo(
  '.adv',
  {
    opacity: 0,
    visibility: 'hidden',
  },
  {
    opacity: 1,
    visibility: 'visible',
    duration: baseDuration,
  },
);

siteTl.fromTo(
  '.adv__title',
  {
    opacity: 0,
    y: 350,
  },
  {
    opacity: 1,
    y: 300,
    duration: baseDuration * 1.5,
  },
);

siteTl.to('.adv__title', {
  yPercent: -180,
  duration: baseDuration * 2,
});

siteTl.fromTo(
  '.adv__row',
  {
    yPercent: 130,
  },
  {
    yPercent: -30,
    duration: baseDuration * 2,
  },
  '-=2.5',
);

const arrowTl = gsap.timeline(); // Отдельная временная шкала для анимации стрелки

arrowTl.to('.adv__arrow', {
  rotation: 45,
  duration: 0.8,
  ease: 'power2.inOut',
});
siteTl.add(arrowTl, '+=0');

siteTl.to('.adv__row', {
  stagger: 2,
  delay: 1,
  duration: baseDuration * 1.2,
});

siteTl.fromTo(
  '.adv__row',
  {
    xPercent: 0,
  },
  {
    xPercent: -120,
    duration: baseDuration * 3,
  },
);

siteTl.to('.adv__row', {
  yPercent: -200,
  duration: baseDuration * 2,
});
siteTl.fromTo('.live',{
  opacity:0,
  visibility:'hidden',
}, {
  visibility:'visible',
  opacity:1,
  duration: baseDuration * 2,
},'-=2');


siteTl.fromTo('.live__title',{
  opacity:0,
  y:60
},{
  opacity:0.6,
  y:0,
  duration: baseDuration
},'-=3')
siteTl.fromTo('.live__subtitle',{
  opacity:0,
  x:60
},{
  opacity:1,
  x:0,
  duration: baseDuration
})


siteTl.to(['.live__title', '.live__subtitle'],{
  opacity:0,
  duration:baseDuration
})

siteTl.fromTo('.live__cards-planet', {
  x:-100,
  opacity:0,

},{
  opacity:1,
  x:0,
  duration:baseDuration
},'-=1')
siteTl.fromTo('.live__cards-content', {
  x:-300,
  opacity:0,

},{
  opacity:1,
  x:0,
  duration:baseDuration
}, '-=1')
siteTl.fromTo('.live__line', {
  width:0,

},{
  width:'125%',
  duration:baseDuration
}, '-=1')

siteTl.fromTo('.live__btns', {
  opacity:0,
},{
  opacity:1,
  duration: baseDuration
}, '-=1')


siteTl.to('.live__cards-planet', {
  delay:2,
  opacity:0,
  yPercent:-100,
  duration: baseDuration * 1.2,
}, '-=1')
siteTl.to('.live__cards-content', {
  opacity:0,
  yPercent:-130,
  duration: baseDuration * 2.4
}, '-=2.5')
siteTl.to('.live__btns', {
  opacity:0,
  yPercent:-800,
  duration: baseDuration,
}, '-=4.6')

siteTl.fromTo('.calc',{
  yPercent:100,
  opacity:0,
  visibility:'hidden',
 
},{
  yPercent:0,
  opacity:1,
  visibility:'visible',
 
  duration: baseDuration * 2
}, '-=3')






// siteTl.to('.live__cards-planet', {
//   xPercent:-100,
//   opacity:0,
//   duration:baseDuration * 1.4,
// })
// siteTl.to('.live__cards-number', {
//   xPercent:40,
//   yPercent:-40,
//   opacity:0,
//   duration:baseDuration * 1.4,
// },'-=3')
// siteTl.to('.live__cards-name', {
//   xPercent:40,
  
//   opacity:0,
//   duration:baseDuration * 1.4,
// },'-=3')

// siteTl.to('.live__cards-desc', {
//   xPercent:40,
//   yPercent:50,
//   opacity:0,
//   duration:baseDuration * 1,
// },'-=3')
// siteTl.to('.live__btns', {
//   xPercent:40,
//   yPercent:70,
//   opacity:0,
//   duration:baseDuration * 1.4,
// },'-=3')



// siteTl.fromTo('.calc__subtitle',{
//   opacity:0,
//   x:500,
//   y:300,
//   scale:0,
// },{
//   scale:1,
//   opacity:1,
// x:0,
// y:0,
//   duration:baseDuration *1.2
// },'-=3')
// siteTl.fromTo('.calc__title',{
//   opacity:0,
//   x:500,
//   y:300,
//   scale:0,
// },{
//   scale:1,
//   opacity:1,
// x:0,
// y:0,
//   duration:baseDuration *1.2
// },'-=3')
// siteTl.fromTo('.calc__desc',{
//   opacity:0,
//   x:500,
//   y:300,
//   scale:0,
// },{
//   scale:1,
//   opacity:1,
// x:0,
// y:0,
//   duration:baseDuration *1.2
// },'-=3')
// siteTl.fromTo('.calc__quiz',{
//   opacity:0,
//   x:-300,
//   scale:0,
// },{
//   opacity:1,
//   x:0,
//   scale:1,
//   duration:baseDuration *1.2
// },'-=3')





const liveNextBtn = document.querySelector('.live__next-btn');
const livePrevBtn = document.querySelector('.live__prev-btn');
const slides = document.querySelectorAll('.live__cards-item');


let currentIndex = 0;
const totalSlides = slides.length;
let isAnimating = false; // Флаг для отслеживания состояния анимации

function showSlide(index) {
    if (isAnimating) return; // Если анимация уже идет, выходим из функции
    isAnimating = true; // Устанавливаем флаг анимации

    gsap.to(slides[currentIndex], { opacity: 0, duration: 0.5, onComplete: () => {
        isAnimating = false; // Сбрасываем флаг анимации после завершения
    }});
    gsap.to(slides[currentIndex].querySelector('.live__cards-planet'), { x: -100, duration: 1 });
    gsap.to(slides[currentIndex].querySelector('.live__cards-header'), { y: -100, duration: 1 });
    gsap.to(slides[currentIndex].querySelector('.live__cards-desc'), { y: -150, duration: 1 });
    gsap.to(slides[currentIndex].querySelector('.live__line'), { width: '0%', duration: 1 });

    currentIndex = index;
    gsap.to(slides[currentIndex], { opacity: 1, duration: 1 });

    // Параллакс-эффект для элементов слайда
    gsap.fromTo(slides[currentIndex].querySelector('.live__cards-planet'),
        { x: -100 },
        { x: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(slides[currentIndex].querySelector('.live__cards-header'),
        { y: -50 },
        { y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(slides[currentIndex].querySelector('.live__line'),{width: '0%'}, { width: '130%', duration: 1 });

    gsap.fromTo(slides[currentIndex].querySelector('.live__cards-desc'),
        { y: -50 },
        { y: 0, duration: 1, ease: "power2.out" }
    );

 
    updateButtons();
}

function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        showSlide(currentIndex + 1);
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        showSlide(currentIndex - 1);
    }
}



function updateButtons() {
    livePrevBtn.disabled = currentIndex === 0;
    liveNextBtn.disabled = currentIndex === totalSlides - 1;
}

// Initial slide
gsap.to(slides[currentIndex], { opacity: 1, duration: 1 });

updateButtons();

liveNextBtn.addEventListener('click', nextSlide);
livePrevBtn.addEventListener('click', prevSlide);

const aboutUsBtn = document.querySelector('.sidebar-us');
const aboutWebBtn = document.querySelector('.sidebar-web');
const aboutDesBtn = document.querySelector('.sidebar-des');

// Изначально скрываем aboutUsBtn
aboutUsBtn.style.display = 'none';

// Функция переключения кнопок
function toggleButtons(clickedBtn) {
  // Скрываем нажатую кнопку
  clickedBtn.style.display = 'none';

  // Находим скрытую кнопку и делаем её видимой
  [aboutUsBtn, aboutWebBtn, aboutDesBtn].forEach((btn) => {
    if (btn.style.display === 'none' && btn !== clickedBtn) {
      btn.style.display = 'flex';
    }
  });
}




// Добавляем обработчики кликов для каждой кнопки
aboutWebBtn.addEventListener('click', () => {
  toggleButtons(aboutWebBtn);
  document.querySelector('.about__web').style.zIndex = 3;
  document.querySelector('.about__us').style.zIndex = 0;
  document.querySelector('.about__des').style.zIndex = 0;
  gsap.to(['.text-us', '.text-des'], {
    opacity: 0,
    visibility: 'hidden',
    duration: 0.5,
  });
  gsap.fromTo(
    '.text-web',
    {
      x: -50,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      x: 0,
      opacity: 1,
      visibility: 'visible',
    },
  );
  gsap.to(['.about__des > .about__circle', '.about__us > .about__circle'], {
    boxShadow: 'none',
    duration: 0,
  });
  gsap.to('.about__web > .about__circle', {
    boxShadow: '0 0 200px 0 #2d4cff',
    duration: 0,
  });
});
aboutDesBtn.addEventListener('click', () => {
  toggleButtons(aboutDesBtn);
  document.querySelector('.about__web').style.zIndex = 0;
  document.querySelector('.about__us').style.zIndex = 0;
  document.querySelector('.about__des').style.zIndex = 3;
  gsap.to(['.text-us', '.text-web'], {
    opacity: 0,
    visibility: 'hidden',
    duration: 0.5,
  });
  gsap.fromTo(
    '.text-des',
    {
      x: -50,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      x: 0,
      opacity: 1,
      visibility: 'visible',
    },
  );
  gsap.to(['.about__web > .about__circle', '.about__us > .about__circle'], {
    boxShadow: 'none',
    duration: 0,
  });
  gsap.to('.about__des > .about__circle', {
    boxShadow: '0 0 200px 0 #2d4cff',
    duration: 0,
  });
});
aboutUsBtn.addEventListener('click', () => {
  toggleButtons(aboutUsBtn);
  document.querySelector('.about__web').style.zIndex = 0;
  document.querySelector('.about__us').style.zIndex = 3;
  document.querySelector('.about__des').style.zIndex = 0;
  gsap.to(['.text-web', '.text-des'], {
    opacity: 0,
    visibility: 'hidden',
    duration: 0.5,
  });
  gsap.fromTo(
    '.text-us',
    {
      x: -50,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      x: 0,
      opacity: 1,
      visibility: 'visible',
    },
  );
  gsap.to(['.about__web > .about__circle', '.about__des > .about__circle'], {
    boxShadow: 'none',
    duration: 0,
  });
  gsap.to('.about__us > .about__circle', {
    boxShadow: '0 0 200px 0 #2d4cff',
    duration: 0,
  });
});

document.addEventListener('scroll', function (e) {
  let currentScroll = window.scrollY;
  const svgMouse = document.querySelector('.mouse-svg');
  const textMouse = document.querySelector('.mouse-text');
  const scrollDownCircle = document.querySelector('.scroll-down-circle');
  if (currentScroll >= 1) {
    scrollDownCircle.classList.add('scroll-down-active');
    svgMouse.classList.add('hidden-element');
    textMouse.classList.add('hidden-element');
  } else {
    svgMouse.classList.remove('hidden-element');
    textMouse.classList.remove('hidden-element');
    scrollDownCircle.classList.remove('scroll-down-active');
  }
});
gsap.registerPlugin(MotionPathPlugin);
