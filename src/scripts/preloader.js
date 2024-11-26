import gsap from "gsap";

  // Создайте timeline с анимацией для прелоадера
const preloaderAnimation = gsap.timeline({ paused: true })
.fromTo('.spinner', { opacity: 1 }, { opacity: 0, duration: 0.5 })
.fromTo('.preloader-content p', { opacity: 1 }, { opacity: 0, duration: 0.5 }, '-=0.5');

// Анимируем исчезновение после загрузки
document.addEventListener("DOMContentLoaded", () => {
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  preloaderAnimation.play();
  preloaderAnimation.eventCallback('onComplete', () => {
    gsap.to(preloader, { 
      opacity: 0, 
      duration: 0.5, 
      onComplete: () => preloader.style.visibility = 'hidden' 
    });
  });

});
});