import { gsap } from "gsap";

export const gsapCursor = () => {
  console.log(window.innerWidth);
  if(window.innerWidth > 768){
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    const cursorText = document.querySelector('.cursor-text');
    const headerTitle = document.querySelector('.header__title');
  
    // Обновляем позицию маленькой точки за курсором
    document.addEventListener('mousemove', (event) => {
      const { pageX: x, pageY: y } = event; // Используем pageX и pageY для корректного вычисления при скролле
  
      cursorDot.style.left = `${x - 4}px`;
      cursorDot.style.top = `${y - 4}px`;
  
      // Большой круг плавно следует за курсором
      gsap.to(cursorCircle, {
        x: x - cursorCircle.offsetWidth / 2,
        y: y - cursorCircle.offsetHeight / 2,
        duration: 0.7,
        ease: "power3.out"
      });
    });
  
    // Анимация при наведении на header__title
    headerTitle.addEventListener('mouseenter', () => {
      cursorDot.style.display = 'none'; // Скрываем маленький курсор
  
      gsap.to(cursorCircle, {
        width: 350,
        height: 350,
        duration: 0.8,
        border: 'none',
        backgroundColor: "#2D4CFF",
        ease: "power3.out",
        onStart: () => {
          cursorText.textContent = 'ПОГРУЗИТЬСЯ В СОЗДАНИЕ';
  
          if (parseFloat(cursorText.style.opacity) !== 1) {
            gsap.to(cursorText, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        }
      });
    });
  
    headerTitle.addEventListener('mouseleave', () => {
      gsap.to(cursorText, {
        opacity: 0,
        duration: 0.1,
        ease: "power1.in",
        onComplete: () => {
          cursorText.textContent = '';
        }
      });
  
      cursorDot.style.display = 'block';
      gsap.to(cursorCircle, {
        width: 50,
        height: 50,
        duration: 0.8,
        border: '1px solid var(--white-color-10)',
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        ease: "power3.out"
      });
    });
  
    // Обрабатываем нажатие на элемент
    headerTitle.addEventListener('mousedown', () => {
      gsap.to(cursorCircle, {
        scale: 0.9,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  
    headerTitle.addEventListener('mouseup', () => {
      gsap.to(cursorCircle, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  
  }
  


};
