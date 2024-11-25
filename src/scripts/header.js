import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', function () {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    // Плавно приближаем текущие координаты к целевым
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;

    // Применяем перемещение через transform
    interBubble.style.transform =
      'translate(' + Math.round(curX) + 'px, ' + Math.round(curY) + 'px)';

    // Продолжаем анимацию
    requestAnimationFrame(move);
  }

  // Обработчик движения мыши, который обновляет целевые координаты
  window.addEventListener('mousemove', function (event) {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  // Запускаем функцию движения
  move();
});

let tl = gsap.timeline();

tl.fromTo(['.cursor-circle','.cursor-dot'],{
opacity:0,
visibility:'hidden'
},{
opacity:1,
visibility:'visible'
})
.fromTo(
  '.header__title',
  {
    y: 15,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.5,
  },
)
  .fromTo(
    '.header__subtitle',
    {
      y: 7,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
  )
  .fromTo(
    '.header__upper',
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
  )
  .fromTo(
    '.header__scroll-down',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      clearProps: 'true,'
    },
  );
  

const burgerBtn = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const menuWrapper = document.querySelector('.menu');
  menuWrapper.classList.toggle('menu-active');
  burgerBtn.classList.toggle('burger-active');
  document.body.classList.toggle('body--fixed')
    let menuTl = gsap.timeline();
    let yValue = window.innerWidth <= 682 ? 0 : -200;
  if (menuWrapper.classList.contains('menu-active')) {
    menuTl.fromTo('.menu__right-list', {
        y:-500,
        opacity:0,
    },{
        y:yValue,
        opacity:1,
        delay:1,
        duration:2,
    }).fromTo(
      '.menu__form',
      {
        x: -100,
        opacity:0,
      },
      {
        x: 0,
        opacity:1,
        duration: 1,
      },
    ).fromTo('.menu__left-link',{
        x: -20,
        opacity:0,
    },{
        x: 0,
        opacity:1,
        duration: 1,
    });
  }
});
