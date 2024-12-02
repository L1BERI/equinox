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
function setRealHeight() {
  const vh = window.innerHeight * 0.01; // Рассчитываем 1vh
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
const menuList = document.querySelector('.menu__right-list');
const items = Array.from(menuList.querySelectorAll('.menu__right-list-link'));
let activeIndex = 0;

// Функция для обновления активного элемента
function updateActiveLink(newIndex) {
  items[activeIndex].classList.remove('active');
  activeIndex = newIndex;
  items[activeIndex].classList.add('active');
}

// Проверяем, мобильное ли устройство
const isMobile = window.innerWidth <= 768; // Можно настроить по своему усмотрению

// Прокрутка через мышь или тачскрин
let startY = null;
menuList.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

menuList.addEventListener('touchmove', (e) => {
  if (isMobile) {
    e.preventDefault();  // Останавливаем стандартную прокрутку при свайпе на мобильных
    handleSwipe(e);      // Обрабатываем только свайп
  } else {
    handleScroll(e);     // Для десктопа — обычный скролл
  }
});

menuList.addEventListener('wheel', (e) => {
  if (!isMobile) {
    e.preventDefault();  // Останавливаем стандартную прокрутку через колесо мыши на десктопах
    handleScroll(e);
  }
});

// Обработчик свайпа (для мобильных устройств)
function handleSwipe(e) {
  const delta = startY - e.touches[0].clientY;
  
  if (delta > 0) {
    // Свайп вниз (переключаем на следующий элемент)
    if (activeIndex < items.length - 1) {
      updateActiveLink(activeIndex + 1);
    } else {
      // Если дошли до конца списка, перебрасываем в начало
      updateActiveLink(0);
    }
  } else if (delta < 0) {
    // Свайп вверх (переключаем на предыдущий элемент)
    if (activeIndex > 0) {
      updateActiveLink(activeIndex - 1);
    } else {
      // Если дошли до начала списка, перебрасываем в конец
      updateActiveLink(items.length - 1);
    }
  }
  
  startY = e.touches[0].clientY;  // Обновляем начальную точку свайпа
}

// Обработчик скролла (для десктопа)
function handleScroll(e) {
  const delta = e.type === 'wheel' ? e.deltaY : 0;

  if (delta > 0) {
    // Прокрутка вниз
    if (activeIndex < items.length - 1) {
      updateActiveLink(activeIndex + 1);
    } else {
      // Если дошли до конца списка, перебрасываем в начало
      menuList.scrollTop = 0;
      updateActiveLink(0);
    }
  } else if (delta < 0) {
    // Прокрутка вверх
    if (activeIndex > 0) {
      updateActiveLink(activeIndex - 1);
    } else {
      // Если дошли до начала списка, перебрасываем в конец
      menuList.scrollTop = menuList.scrollHeight;
      updateActiveLink(items.length - 1);
    }
  }
}

// Установка начального активного элемента
updateActiveLink(activeIndex);


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