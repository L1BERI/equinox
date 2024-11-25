import gsap from "gsap";
import logoDark from './../assets/content/icons/logo-dark.png';
import logoLight from './../assets/content/icons/logo-light.png';

export const themeSwitcher = () => {
    const page = document.querySelector('[data-theme]');
    const themeSwitcherBtn = document.querySelector('[date-theme-switcher]');
    const logoLink = document.querySelector('[data-logo]'); // <link> для логотипа
    const blackCircle = document.querySelector('.black-circle');
    const themes = {
        light: {
            buttonClass: 'light-active',
            logoHref: logoLight,
            circleX: 30
        },
        dark: {
            buttonClass: 'dark-active',
            logoHref: logoDark,
            circleX: 0
        }
    };

    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    themeSwitcherBtn.addEventListener('click', () => {
        const newTheme = page.dataset.theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        const { buttonClass, logoHref, circleX } = themes[theme];

        page.dataset.theme = theme;

        themeSwitcherBtn.classList.remove(...Object.values(themes).map(t => t.buttonClass));
        themeSwitcherBtn.classList.add(buttonClass);

        logoLink.href = logoHref; // Обновляем путь к логотипу

        gsap.to(blackCircle, {
            x: circleX,
            duration: 0.5
        });

        localStorage.setItem('theme', theme);
    }
};
