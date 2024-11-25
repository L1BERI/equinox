import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import LocomotiveScroll from 'locomotive-scroll';


import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger);



const siteTl = gsap.timeline();

const siteWrapper = document.querySelector('.wrapper');

const baseDuration =2; // Базовая продолжительность для первой анимации
const durationFactor = 0.5; // Множитель для увеличения длительности анимации



ScrollTrigger.create({
  animation: siteTl,
  trigger: '.wrapper',
  start: 'top top',
  end: '+=2000%', // Общая длина скроллинга
  scrub: 2,
  pin: true,
});

siteTl.to('.scroll-down-circle', { scale: 27.5, duration: baseDuration, immediateRender: false});

siteTl.fromTo(
  '.about',
  { opacity: 0, visibility: 'hidden',
     },
  {
    opacity: 1,
    visibility: 'visible',
    duration: baseDuration * durationFactor,
     ease:'none' 
  },
);

siteTl.fromTo(
  '.about__title',
  {
    '-webkit-text-stroke': '2px var(--white-color-10)',
    immediateRender: false
  },
  {
    color: 'transparent',
    '-webkit-text-stroke': '2px var(--white-color-10)',
    opacity: 0.2,
    duration: baseDuration * durationFactor * 1.5,
    ease:'none' 
   
  },
),
  '-=2.3';

siteTl.to('.about__circles', {
  opacity: 1,
  duration: baseDuration * durationFactor,
  ease:'none' 
});

siteTl.fromTo(
  '.about__us',
  {
    x: 0,
    
  },
  {
    x: -380,
    duration: baseDuration,
  },
);

siteTl.fromTo(
  '.about__web',
  {
    opacity: 0,
    x: -70,
    
  },
  {
    x: -30,
    opacity: 1,
    duration: baseDuration,
    ease:'none' 
  },
  '-=2',
);

siteTl.fromTo(
  '.about__des',
  {
    opacity: 0,
    x: 0,
    
  },
  {
    x: 320,
    opacity: 1,
    duration: baseDuration,
    ease:'none' 
  },
  '-=2',
);
siteTl.to(
  '.about__circles',

  {
    delay: 2,
  },
  '-=1',
);

siteTl.fromTo(
  '.about__us',
  {
    x: -380,
    
  },
  {
    x: 0,
    duration: baseDuration,
    ease:'none' 
  },
);

siteTl.fromTo(
  '.about__web',
  {
    x: -30,
    
  },
  {
    x: 0,
    ease:'none',
    duration: baseDuration,
  },
  '-=2',
);

siteTl.fromTo(
  '.about__des',
  {
    x: 320,
    
  },
  {
    x: 0,
    duration: baseDuration,
    ease:'none' 
  },
  '-=2',
);

siteTl.to('.about__web', {
  x: 0,
  zIndex: 1,
  duration: 0.1,
  ease:'none' 
});

siteTl.to(
  '.about__des',
  {
    x: 0,
    zIndex: 0,
    duration: 0.1,
    ease:'none' 
  },
  '-=0.5',
);

siteTl.to(
  {},
  {
    duration: 0.1,
    ease:'none', 
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
  ease:'none' 
});

siteTl.to('.about__circles', {
  x: -550,
  duration: baseDuration * 1.2,
  ease:'none' 
});

siteTl.to(
  '.about__us > .about__circle',
  {
    boxShadow: '0 0 200px 0 #2d4cff',
    duration: baseDuration * 0.6,
    ease:'none' 
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
    ease:'none' 
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
    x: -15,
    duration: baseDuration * 0.7,
    ease:'none' 
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
    ease:'none' 
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
    ease:'none' 
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
    ease:'none' 
  },
  '-=3.5',
);

siteTl.to('.adv__arrow', {
  rotation: 45,
  duration: 1,
  ease:'none' 
});



siteTl.fromTo(
  '.adv__row',
  {
    delay:2,
    xPercent: 0,
   
  },
  {
    xPercent: -120,
    duration: baseDuration * 4,
    ease:'none' 
  },
  
);

siteTl.to('.adv__row', {
  yPercent: -200,
  duration: baseDuration * 2,
  ease:'none' 
});
siteTl.fromTo(
  '.live',
  {
    opacity: 0,
    visibility: 'hidden',
   
  },
  {
    visibility: 'visible',
    opacity: 1,
    duration: baseDuration * 2,
    ease:'none' 
  },
  '-=2',
);

siteTl.fromTo(
  '.live__title',
  {
    opacity: 0,
    y: 60,

  },
  {
    opacity: 0.6,
    y: 0,
    duration: baseDuration,
    ease:'none' 
  },
  '-=3',
);
siteTl.fromTo(
  '.live__subtitle',
  {
    opacity: 0,
    x: 60,
  
  },
  {
    opacity: 1,
    x: 0,
    duration: baseDuration,
    ease:'none' 
  },
);

siteTl.to(['.live__title', '.live__subtitle'], {
  opacity: 0,
  duration: baseDuration,
  ease:'none' 
});

siteTl.fromTo(
  '.live__cards-planet',
  {
    x: -100,
    opacity: 0,
  },
  {
    opacity: 1,
    x: 0,
    duration: baseDuration,
    ease:'none' 
  },
  '-=1',
);
siteTl.fromTo(
  '.live__cards-content',
  {
    x: -300,
    opacity: 0,
  
  },
  {
    opacity: 1,
    x: 0,
    duration: baseDuration,
    ease:'none' 
  },
  '-=1',
);
siteTl.fromTo(
  '.live__line',
  {
    width: 0,
   
  },
  {
    width: '125%',
    duration: baseDuration,
    ease:'none' 
  },
  '-=1',
);

siteTl.fromTo(
  '.live__btns',
 
  {
    opacity: 0,
   
  },
  {
    opacity: 1,
    duration: baseDuration,
    ease:'none' 
  },
  '-=1',
);

siteTl.to('.live__cards-content', {
  delay: 2,
  opacity: 0,
  yPercent: -130,
  duration: baseDuration * 2.4,
  ease:'none' 
});
siteTl.to(
  '.live__btns',
  {
    opacity: 0,
    yPercent: 200,
    duration: baseDuration,
    ease:'none' 
  },
  '<',
);

siteTl.to(
  '.live__cards-planet',
  {
    transformOrigin: '50% 50%',
    xPercent: 76.9,
    duration: baseDuration * 2,
    ease:'none' 
  },
  '<2',
);

siteTl.to('.live__cards-planet', {
  scale: 0.73,
  duration: baseDuration * 2,
  ease:'none' 
});
siteTl.to(
  '.live__cards-planet',
  {
    opacity: 0,
    duration: baseDuration * 2,
    ease:'none' 
  },
  '<',
);
siteTl.fromTo(
  '.services',
  {
    opacity: 0,
    visibility: 'hidden',
    
  },
  {
    opacity: 1,
    visibility: 'visible',
    duration: baseDuration * 2,
    ease:'none' 
   
  },
  '<1.8',
);
siteTl.fromTo(
  '.services__title',
  {
    opacity: 0,
   y:-30,
 
  },
  {
    opacity: 1,
    y:0,
    duration: baseDuration * 2,
    ease:'none' 
  },
  '<',
);
siteTl.fromTo(
  '.services__text',
  {
    opacity: 0,
   y:-30,
  
  },
  {
    opacity: 1,
    y:0,
    duration: baseDuration * 2,
    ease:'none' 
  },
  '<',
);
siteTl.fromTo(
  '.services__btn',
  {
    opacity: 0,
  
  
  },
  {
    opacity: 1,
    ease:'none',
    duration: baseDuration * 2,
   
  },
  '<',
);
siteTl.fromTo(
  '.services__orbit',
  {
   scale:0,
  opacity:0,
 
  },
  {
    stagger:0.3,
    opacity:1,
   scale:1,
    duration: baseDuration * 2,
    ease:'none' 
  },
  '<',
);





// Теперь анимация
siteTl.to('.services__orbit', {
  rotation: (i) => (i % 2 === 0 ? 180 : -180), // Чётные по часовой, нечётные против
  delay:1,
  duration: baseDuration * 10, // Продолжительность
  ease:'none' 
},'-=0.1');

siteTl.to(
  '.services__first-orbit > .services__orbit-inner > .services__orbit-text',
  {
    rotation: -180,
    ease:'none',
    duration: baseDuration * 10, 
    
  },
  '<' 
);
siteTl.to(
  '.services__second-orbit > .services__orbit-inner > .services__orbit-text',
  {
    rotation: 180,
    ease:'none',
    duration: baseDuration * 10, 
    
  },
  '<' 
);
siteTl.to(
  '.services__third-orbit > .services__orbit-inner > .services__orbit-text',
  {
    rotation: -180,
    ease:'none',
    duration: baseDuration * 10, 
    
  },
  '<' 
);
siteTl.fromTo(
  '.services__orbit',
  {
   delay:2, 
    opacity:1,
   scale:1,


  },
  {
    scale:0,
  opacity:0,
  stagger:0.5,
    duration: baseDuration * 4,
    ease:'none',
  },'-=0.1'
);
siteTl.fromTo(
  '.services',{
    yPercent:0,
    opacity:1,
    
  },
  {
   yPercent:-100,
  opacity:0,
  duration:baseDuration * 4 ,
  ease:'none',
  },'<0.5'
  
);
siteTl.fromTo(
  '.calc',
  {
    yPercent: 100,
    opacity: 0,
    visibility: 'hidden',
 
  },
  {
    yPercent: 0,
    opacity: 1,
    visibility: 'visible',
    ease:'none',
    duration: baseDuration * 2,
  },'<3'
);
siteTl.fromTo(
  '.calc',
  {
    yPercent: 0,
    opacity: 1,
  },
  {
    
    yPercent: -100,
    opacity: 0,
    ease:'none',
    duration: baseDuration * 2,
  }
);
siteTl.fromTo(
  '.footer',
  {
    yPercent: 100,
    opacity: 0,
    visibility: 'hidden',
 
  },
  {
    yPercent: 0,
    opacity: 1,
    visibility: 'visible',
    ease:'none',
    duration: baseDuration * 2,
  },'<1.5'
);
siteTl.fromTo(
  '.footer__left-white',
  {
    xPercent: 200,
    opacity:0,

  },
  {
    opacity:1,
    xPercent: 0,
    duration: baseDuration * 4,
    ease:'none',
  },'<3'
);
siteTl.fromTo(
  '.footer__right',
  {
  
   opacity:0,

  },
  {
    opacity:1,
    ease:'none',
    duration: baseDuration * 4,
  },'<1.5'
);
siteTl.fromTo(
  '.footer__left-inner',
  {
  
   opacity:0,

  },
  {
    opacity:1,
    ease:'none',
    duration: baseDuration * 4,
  },'<1.2'
);






const liveNextBtn = document.querySelector('.live__next-btn');
const livePrevBtn = document.querySelector('.live__prev-btn');
const slides = document.querySelectorAll('.live__cards-item');

let currentIndex = 0;
const totalSlides = slides.length;
let isAnimating = false; // Флаг для отслеживания состояния анимации

function showSlide(index) {
  if (isAnimating) return; // Если анимация уже идет, выходим из функции
  isAnimating = true; // Устанавливаем флаг анимации

  gsap.to(slides[currentIndex], {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      isAnimating = false; // Сбрасываем флаг анимации после завершения
    },
  });
  gsap.to(slides[currentIndex].querySelector('.live__cards-planet'), {
    x: -100,
    duration: 1,
  });
  gsap.to(slides[currentIndex].querySelector('.live__cards-header'), {
    y: -100,
    duration: 1,
  });
  gsap.to(slides[currentIndex].querySelector('.live__cards-desc'), {
    y: -150,
    duration: 1,
  });
  gsap.to(slides[currentIndex].querySelector('.live__line'), {
    width: '0%',
    duration: 1,
  });

  currentIndex = index;
  gsap.to(slides[currentIndex], { opacity: 1, duration: 1 });

  // Параллакс-эффект для элементов слайда
  gsap.fromTo(
    slides[currentIndex].querySelector('.live__cards-planet'),
    { x: -100 },
    { x: 0, duration: 1, ease: 'power2.out' },
  );

  gsap.fromTo(
    slides[currentIndex].querySelector('.live__cards-header'),
    { y: -50 },
    { y: 0, duration: 1, ease: 'power2.out' },
  );
  gsap.fromTo(
    slides[currentIndex].querySelector('.live__line'),
    { width: '0%' },
    { width: '130%', duration: 1 },
  );

  gsap.fromTo(
    slides[currentIndex].querySelector('.live__cards-desc'),
    { y: -50 },
    { y: 0, duration: 1, ease: 'power2.out' },
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
      x: -15,
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
      x: -15,
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
      x: -15,
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
