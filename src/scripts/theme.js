
import gsap from "gsap";



export const themeSwitcher = () => {
    const page = document.querySelector('[data-theme]')
    const themeSwitcherBtn = document.querySelector('[date-theme-switcher]');
    const themeStatus = page.dataset;

    const themeCurrent = localStorage.getItem('theme') || 'dark';
    themeStatus.theme = themeCurrent

    themeSwitcherBtn.addEventListener('click', () => {
        if(themeStatus.theme === 'light'){
            console.log(themeCurrent );
            themeSwitcherBtn.classList.add('dark-active')
            themeSwitcherBtn.classList.remove('light-active')

            gsap.to('.black-circle',{
                x:0,
                duration:0.5
            })
          


            themeStatus.theme = 'dark'
        } else if (themeStatus.theme === 'dark'){
            console.log(themeCurrent );
            themeSwitcherBtn.classList.add('light-active')
            themeSwitcherBtn.classList.remove('dark-active')
            themeStatus.theme = 'light'
           
            gsap.to('.black-circle',{
                x:30,
                duration:0.5
            })

        }
    })
}