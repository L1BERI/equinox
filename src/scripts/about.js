import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
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

const siteWrapper = document.querySelector(".wrapper");

ScrollTrigger.create({
  animation: siteTl,
  trigger: ".wrapper",
  start: "top top",
  end: () => siteWrapper.scrollHeight,
  scrub: 5,
  pin: true,
  pinSpacing: false,
  markers: true,
  anticipatePin: 1,
});

siteTl.to(".scroll-down-circle", { scale: 27.5 });
siteTl.fromTo(
  ".about",
  { yPercent: -98, opacity: 0, visibility:'hidden' },
  { yPercent: -100, opacity: 1, visibility:'visible' }
);
siteTl.to(
  ".about__title",
  {
    color: "transparent",
    "-webkit-text-stroke": "2px #ffffff",
    opacity: 0.2,
    ease: "power1.inOut",
  }
 
),'-=2.3';

siteTl.to('.about__circles', {
    opacity:1,
     ease: 'power1.inOut',
      
},);


siteTl.to('.about__web',{
    marginLeft:-170,
});
siteTl.to('.about__des',{ 
    marginLeft:-190,
   
},'-=0.5');
siteTl.to('.about__web',{
    marginLeft:-540,
   
    zIndex:1,
});
siteTl.to(['.about__us > .about__circle, .about__web > .about__circle, about__des > .about__circle'],{
    boxShadow: 'none',
})
siteTl.to('.about__des',{ 
    marginLeft:-540,
    
    zIndex:0,
},'-=0.5');
siteTl.to('.about__us',{ 
    
    zIndex:3,
},);
siteTl.to('.about__circles', {
    x:-550,
},);
siteTl.to('.about__us > .about__circle', {
    boxShadow: '0 0 200px 0 #2d4cff',
},'-=0.5');
siteTl.fromTo('.about__sidebar', {
    x:100,
    opacity:0,
},{
    x:0,
    opacity:1,
});






siteTl.fromTo(['.about__us-text-wrapper'], {
    opacity:0,
    x:-50,
},{
    opacity:1,
    x:0
});


siteTl.fromTo('.adv',{
    yPercent:0,
    opacity:0,
    visibility: 'hidden'
},{
    yPercent:-100,
    opacity:1,
    visibility: 'visible'
})

siteTl.fromTo('.adv__title',{
    opacity:0,
    y:350,
},{
    opacity:1,
    y:300,
})
siteTl.to('.adv__title',{
    
    yPercent:-180,
})

siteTl.fromTo('.adv__row', {
    yPercent: 130,
}, {
    yPercent: -30,
}, '-=0.5');

// Анимация adv__arrow
siteTl.to('.adv__arrow', {
    rotation: 45,
    
}, '-=0.1');
siteTl.fromTo('.adv__row',{
    xPercent:0,
},{
    xPercent:-110,
},)

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
  [aboutUsBtn, aboutWebBtn, aboutDesBtn].forEach(btn => {
    if (btn.style.display === 'none' && btn !== clickedBtn) {
      btn.style.display = 'flex';
    }
  });
}

// Добавляем обработчики кликов для каждой кнопки
aboutWebBtn.addEventListener('click', () => {
    toggleButtons(aboutWebBtn)
    document.querySelector('.about__web').style.zIndex = 3
    document.querySelector('.about__us').style.zIndex = 0
    document.querySelector('.about__des').style.zIndex = 0
    gsap.to(['.text-us', '.text-des'],{
        opacity:0,
        visibility:'hidden',
        duration:0.5,
    })
    gsap.fromTo('.text-web',{
        x:-50,
        opacity:0,
        visibility:'hidden'
    }, {
        x:0,
        opacity:1,
        visibility:'visible'
    })
    gsap.to(['.about__des > .about__circle', '.about__us > .about__circle'],{
        boxShadow: 'none',
        duration:0
    })
    gsap.to('.about__web > .about__circle',{
        boxShadow: '0 0 200px 0 #2d4cff',
        duration:0
    })
});
aboutDesBtn.addEventListener('click', () => {
    toggleButtons(aboutDesBtn)
    document.querySelector('.about__web').style.zIndex = 0
    document.querySelector('.about__us').style.zIndex = 0
    document.querySelector('.about__des').style.zIndex = 3
    gsap.to(['.text-us', '.text-web'],{
        opacity:0,
        visibility:'hidden',
        duration:0.5,
    })
    gsap.fromTo('.text-des',{
        x:-50,
        opacity:0,
        visibility:'hidden',
    }, {
        x:0,
        opacity:1,
        visibility:'visible'
    })
    gsap.to(['.about__web > .about__circle', '.about__us > .about__circle'],{
        boxShadow: 'none',
        duration:0
    })
    gsap.to('.about__des > .about__circle',{
        boxShadow: '0 0 200px 0 #2d4cff',
        duration:0
    })
});
aboutUsBtn.addEventListener('click', () => {
    toggleButtons(aboutUsBtn)
    document.querySelector('.about__web').style.zIndex = 0
    document.querySelector('.about__us').style.zIndex = 3
    document.querySelector('.about__des').style.zIndex = 0
    gsap.to(['.text-web', '.text-des'],{
        opacity:0,
        visibility:'hidden',
        duration:0.5,
    })
    gsap.fromTo('.text-us',{
        x:-50,
        opacity:0,
        visibility:'hidden'
    }, {
        x:0,
        opacity:1,
        visibility:'visible'
    })
    gsap.to(['.about__web > .about__circle', '.about__des > .about__circle'],{
        boxShadow: 'none',
        duration:0
    })
    gsap.to('.about__us > .about__circle',{
        boxShadow: '0 0 200px 0 #2d4cff',
        duration:0
    },)
});





document.addEventListener('scroll', function(e){
    let currentScroll = window.scrollY;
    const svgMouse = document.querySelector('.mouse-svg');
    const textMouse = document.querySelector('.mouse-text');
    const scrollDownCircle = document.querySelector('.scroll-down-circle')
        if(currentScroll >= 1){
            scrollDownCircle.classList.add('scroll-down-active')
        svgMouse.classList.add('hidden-element')
        textMouse.classList.add('hidden-element')
    } else {
        svgMouse.classList.remove('hidden-element')
        textMouse.classList.remove('hidden-element')
        scrollDownCircle.classList.remove('scroll-down-active')
    }
})


const pathSearch = document.querySelector("#search-line");
const pathSearchLength = pathSearch.getTotalLength();

pathSearch.style.strokeDasharray = pathSearchLength;
pathSearch.style.strokeDashoffset = pathSearchLength; 
gsap.registerPlugin(MotionPathPlugin);

const pathPlan = document.querySelector("#plan-line");
const pathPlanLength = pathPlan.getTotalLength();

pathPlan.style.strokeDasharray = pathPlanLength;
pathPlan.style.strokeDashoffset = 0; 

gsap.set('.search', {
    xPercent: -5, yPercent:-50, 
})
gsap.set('.plan', {
    xPercent: -4, yPercent:-55, 
})
let stepsTl = gsap.timeline()
stepsTl.fromTo(pathSearch, 
    { strokeDashoffset: pathSearchLength }, // Начинаем с полного смещения
    { strokeDashoffset: 0, duration: 3, ease: "power1.inOut" } // Анимируем к 0
  );
// Запуск анимации
stepsTl.fromTo(".search",{
    opacity:0
} ,{
    opacity:1,
  duration: 2, // Продолжительность анимации в секундах
  motionPath: {
    path: '#search-line',
    align: '#search-line',
    // Автоматический поворот вдоль пути
    start: 0, // Начальная точка на пути
    end: 0.4, // Конечная точка (0.5 означает половину пути)
  },
  ease: "power2.inOut" // Плавность анимации
});
stepsTl.fromTo(pathPlan, 
    { strokeDashoffset: pathPlanLength }, // Начинаем с полного смещения
    { strokeDashoffset: 0, duration: 3, ease: "power1.inOut" } // Анимируем к 0
  );
// Запуск анимации
stepsTl.fromTo(".plan",{
    opacity:0
}, {
    opacity:1,
    duration: 3, // Продолжительность анимации в секундах
    motionPath: {
      path: '#plan-line',
      align: '#plan-line',
      // Автоматический поворот вдоль пути
      start: 1, // Начальная точка на пути
    end: 0.57, // Конечная точка (0.5 означает половину пути)
    },
    ease: "power2.inOut"// Плавность анимации
});