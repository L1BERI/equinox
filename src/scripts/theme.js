import gsap from "gsap";

export const themeSwitcher = () => {
    const page = document.querySelector('[data-theme]');
    const themeSwitcherBtn = document.querySelector('[date-theme-switcher]');
    const logoLink = document.querySelector('[data-logo]'); // Ссылка на логотип
    const blackCircle = document.querySelector('.black-circle'); // Круг, который анимируется
    const themes = {
        light: {
            buttonClass: 'light-active',
            logoHref: './assets/content/icons/logo-light.png', // Путь к логотипу для светлой темы
            circleX: 30
        },
        dark: {
            buttonClass: 'dark-active',
            logoHref: './assets/content/icons/logo-dark.png', // Путь к логотипу для темной темы
            circleX: 0
        }
    };

    // Устанавливаем текущую тему при загрузке
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    // Добавляем обработчик клика на кнопку
    themeSwitcherBtn.addEventListener('click', () => {
        const newTheme = page.dataset.theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    /**
     * Функция для установки темы
     * @param {string} theme - Название темы ('light' или 'dark')
     */
    function setTheme(theme) {
        const { buttonClass, logoHref, circleX } = themes[theme];

        // Обновляем data-theme
        page.dataset.theme = theme;

        // Обновляем класс кнопки
        themeSwitcherBtn.classList.remove(...Object.values(themes).map(t => t.buttonClass));
        themeSwitcherBtn.classList.add(buttonClass);

        // Меняем логотип в <link>
        logoLink.href = logoHref;

        // Анимация круга
        gsap.to(blackCircle, {
            x: circleX,
            duration: 0.5
        });

        // Сохраняем текущую тему в localStorage
        localStorage.setItem('theme', theme);
    }
};