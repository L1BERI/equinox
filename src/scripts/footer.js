import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
export const goupBtn = () => {
    const upBtn = document.querySelector('.footer__goup')
    upBtn.addEventListener('click', (e) => {
        e.preventDefault();
       gsap.to(window, {
        scrollTo: {
            y:0
        },
        duration: 4, 
  ease: "expo.inOut" 
       })
    })
}