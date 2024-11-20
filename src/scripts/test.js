// Новая анимация для .steps и .steps__title
siteTl.fromTo(
    '.steps', // Целевой элемент
    {
      opacity: 0,
      visibility: 'hidden',
    },
    {
      opacity: 1,
      visibility: 'visible',
      duration: baseDuration * 0.5, // Делаем появление более быстрым
      // Добавляем небольшую задержку перед началом анимации
    },
    '-=0.5', // Начинаем эту анимацию на 0.5 секунды раньше, чем завершится предыдущее
  );
  
  siteTl.fromTo(
    '.steps__title',
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 0.6,
      duration: baseDuration * 1.2, // Плавное появление заголовка
    },
    '-=0.5', // Начинаем анимацию чуть раньше, чтобы избежать задержки
  );
  siteTl.fromTo(
    '.steps__subtitle',
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: baseDuration * 1.2, // Плавное появление заголовка
    },
    '-=0.5', // Начинаем анимацию чуть раньше, чтобы избежать задержки
  );
  siteTl.fromTo(
    '.steps__planet',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: baseDuration * 1.2, // Плавное появление заголовка
    },
    '-=0.5', // Начинаем анимацию чуть раньше, чтобы избежать задержки
  );
  
  const pathSearch = document.querySelector('#search-line');
  const pathSearchLength = pathSearch.getTotalLength();
  
  pathSearch.style.strokeDasharray = pathSearchLength;
  pathSearch.style.strokeDashoffset = pathSearchLength;
  
  const pathPlan = document.querySelector('#plan-line');
  const pathPlanLength = pathPlan.getTotalLength();
  
  pathPlan.style.strokeDasharray = pathPlanLength;
  pathPlan.style.strokeDashoffset = pathPlanLength;
  
  const pathDesign = document.querySelector('#design-line');
  const pathDesignLength = pathDesign.getTotalLength();
  
  pathDesign.style.strokeDasharray = pathDesignLength;
  pathDesign.style.strokeDashoffset = pathDesignLength;
  
  siteTl.set('.search', {
    xPercent: -5,
    yPercent: -50,
  });
  siteTl.set('.plan', {
    xPercent: -4,
    yPercent: -55,
  });
  siteTl.set('.design', {
    xPercent: -4,
    yPercent: -45,
  });
  
  siteTl.fromTo(
    pathSearch,
    { strokeDashoffset: pathSearchLength }, // Начинаем с полного смещения
    { strokeDashoffset: 0, duration: 2, ease: 'power1.inOut' }, // Анимируем к 0
  );
  siteTl.fromTo(
    pathPlan,
    { strokeDashoffset: pathPlanLength }, // Начинаем с полного смещения
    { strokeDashoffset: 0, duration: 2, ease: 'power1.inOut' },
    '-=1.7', // Анимируем к 0
  );
  siteTl.fromTo(
    pathDesign,
    { strokeDashoffset: pathDesignLength }, // Начинаем с полного смещения
    { strokeDashoffset: 0, duration: 2, ease: 'power1.inOut' },
    '-=1.8', // Анимируем к 0
  );
  // Запуск анимации
  siteTl.fromTo(
    '.search',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2, // Продолжительность анимации в секундах
      motionPath: {
        path: '#search-line',
        align: '#search-line',
        // Автоматический поворот вдоль пути
        start: 0, // Начальная точка на пути
        end: 0.4, // Конечная точка (0.5 означает половину пути)
      },
      ease: 'power2.inOut', // Плавность анимации
    },
  );
  
  // Запуск анимации
  siteTl.fromTo(
    '.plan',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 3, // Продолжительность анимации в секундах
      motionPath: {
        path: '#plan-line',
        align: '#plan-line',
        // Автоматический поворот вдоль пути
        start: 1, // Начальная точка на пути
        end: 0.57, // Конечная точка (0.5 означает половину пути)
      },
      ease: 'power2.inOut', // Плавность анимации
    },
  );
  siteTl.fromTo(
    '.design',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 3, // Продолжительность анимации в секундах
      motionPath: {
        path: '#design-line',
        align: '#design-line',
        // Автоматический поворот вдоль пути
        start: 0, // Начальная точка на пути
        end: 0.4, // Ко
      },
      ease: 'power2.inOut', // Плавность анимации
    },
  );
  
  // const planetBtn = document.querySelector('#step-search');
  
  
  //   planetBtn.onclick = () =>{
  
    // let xPlace = 0;
    // let yPlace = 0;
    // switch (btn.classList.contains){
    //   case 'search': 
    //   xPlace = -1500
    //   yPlace = -200
    //   break;
    //   case 'design':
  
    // }
  
     
    
  // }
  
  
  // const planetsBtns = document.querySelectorAll('.steps__info');
  // planetsBtns.forEach(item => {
  //   item.onclick = () => {
  //     if (item.classList.contains('search')) {
  //       // Анимация для search
  //       gsap.to('.steps__orbits', {
  //         scale: 5,
  //         xPercent: 120,
  //         yPercent: -35,
  //         duration: 3,
        
  //       });
  //       gsap.to('.steps__circle', {
  //         scale: 3.6,
  //         duration: 3,
  //         y: 10,
  //       });
  //       gsap.to(['.steps__subtitle', '.steps__title'], {
  //         opacity: 0,
  //         y: -100,
  //       });
  //       gsap.to(['.orbit__design', '.orbit__plan'], {
       
  //         scale: 3,
  //         duration: 4,
  //       });
  //       gsap.to('.steps__planet', {
  //         x: -200,
  //       });
  //       gsap.to('.steps__info-text', {
  //         x: 70,
  //         y: -30,
  //         duration: 3,
  //       });
  //       gsap.fromTo('.search-content', {
  //         x: 60,
  //         opacity: 0,
  //         visibility:'hidden'
  //       }, {
  //         x: 0,
  //         visibility:'visible',
  //         opacity: 1,
  //         duration: 1,
  //         delay: 2,
  //       });
  //       gsap.fromTo('.reset-btn',{
  //         opacity:0,
  //         y:-50,
  //       },{
  //         opacity:1,
  //         y:0,
  //         duration:1,
  //         delay:3,
  //       })
  //     } else if (item.classList.contains('design')) {
  //       // Анимация для design
  //       gsap.to('.steps__orbits', {
  //         scale: 5,
  //         xPercent: 30,
  //         yPercent: -86,
  //         duration: 3,
         
  //       });
  //       gsap.to('.steps__circle', {
  //         scale: 3.6,
  //         duration: 3,
  //         y: 10,
  //       });
  //       gsap.to(['.steps__subtitle', '.steps__title'], {
  //         opacity: 0,
  //         y: -100,
  //       });
  //       gsap.to(['.orbit__search', '.orbit__plan'], {
  //         xPercent: -20,
  //         duration: 3,
  //       });
  //       gsap.to('.steps__planet', {
  //         x: -200,
  //       });
  //       gsap.to('.steps__info-text', {
  //         x: 70,
  //         y: -30,
  //         duration: 3,
  //       });
  //       gsap.fromTo('.design-content', {
  //         x: 60,
  //         opacity: 0,
  //         visibility:'hidden'
  //       }, {
  //         x: 0,
  //         visibility:'visible',
  //         opacity: 1,
  //         duration: 1,
  //         delay: 2,
  //       });
  //       gsap.fromTo('.reset-btn',{
  //         opacity:0,
  //         y:-50,
  //       },{
  //         opacity:1,
  //         y:0,
  //         duration:1,
  //         delay:3,
  //       })
  //     } else if (item.classList.contains('plan')) {
  //       // Анимация для plan
  //       gsap.to('.steps__orbits', {
  //         scale: 5,
  //         xPercent: 45,
  //         yPercent: 84,
  //         duration: 3,
       
  //       });
  //       gsap.to('.steps__circle', {
  //         scale: 3.6,
  //         duration: 3,
  //         y: 10,
  //       });
  //       gsap.to(['.steps__subtitle', '.steps__title'], {
  //         opacity: 0,
  //         y: -100,
  //       });
   
  //       gsap.to('.orbit__search', {
  //         xPercent: -10,
  //         duration: 3,
  //       });
  //       gsap.to('.orbit__design', {
  //         xPercent: 20,
  
  //         duration: 3,
  //       });
  //       gsap.to('.steps__planet', {
  //         x: -200,
  //       });
  //       gsap.to('.steps__info-text', {
  //         x: 70,
  //         y: -30,
  //         duration: 3,
  //       });
  //       gsap.fromTo('.plan-content', {
  //         x: 60,
  //         opacity: 0,
  //         visibility:'hidden'
  //       }, {
  //         x: 0,
  //         visibility:'visible',
  //         opacity: 1,
  //         duration: 1,
  //         delay: 2,
  //       });
  //       gsap.fromTo('.reset-btn',{
  //         opacity:0,
  //         y:-50,
  //       },{
  //         opacity:1,
  //         y:0,
  //         duration:1,
  //         delay:3,
  //       })
  //     }
  //   };
  // });
  
  
  // // Находим кнопку "Вернуться ко всем этапам"
  // const resetButton = document.querySelector('#reset-button');
  
  // // Функция для сброса анимаций
  // function resetAnimations() {
  //   // Сброс анимаций для всех элементов к исходному состоянию
  //   gsap.to('.steps__orbits', {
  //     scale: 1,
  //     xPercent: 0,
  //     yPercent: 0,
  //     duration: 1.5,
  //     clearProps: 'all',
  //   });
    
  //   gsap.to('.steps__circle', {
  //     scale: 1,
  //     y: 0,
  //     duration: 1.5,
  //     clearProps: 'all',
  //   });
  
  //   gsap.to(['.steps__subtitle', '.steps__title'], {
  //     opacity: 1,
  //     y: 0,
  //     duration: 1.5,
  //     clearProps: 'all',
  //   });
  
  //   gsap.to(['.orbit__design', '.orbit__search', '.orbit__plan'], {
  //     x:0,
  //     y:0,
  //     scale: 1,
  //     xPercent: 0,
  //     duration: 1.5,
  //     clearProps: 'all',
  //   });
   
  //   gsap.to('.steps__planet', {
  //     x: 0,
  //     duration: 1.5,
  //     clearProps: 'all',
  //   });
  
  //   gsap.to('.steps__info-text', {
  //     x: 0,
  //     y: 0,
  //     duration: 1.5,
  //     clearProps: 'all',
  //   });
   
  //   // Скрываем контент блоков (например, search-content, design-content, plan-content)
  //   gsap.to(['.search-content', '.design-content', '.plan-content'], {
  //     opacity: 0,
  //     x:60,
  //     duration: 0.1,
  //     visibility:'hidden',
  //     clearProps: 'all',
  //   });
  //   gsap.to('.reset-btn',{
  //     opacity:0,
  //     y:-50,
  //     duration:1,
  //     clearProps: 'all',
  //   })
  //   gsap.set(['.orbit__design', '.orbit__search', '.orbit__plan'], {
      
  //     xPercent: 0,
  //   delay:1,
  //     clearProps: 'all',
  //   });
   
  // }
  
  
  // const nextPlanet = document.querySelectorAll('.steps__info-text-content')
  // const planetItems = document.querySelectorAll('.steps__orbit')
  // nextPlanet.forEach(el => {
  //   el.addEventListener('click', e => {
  //     if (e.target.closest('.steps__info-btn-next')) {
  //       gsap.to(planetItems, {
  //         scale: 1,
  //       });
  
  //       if (el.closest('.search-content')) {
       
  
  //         gsap.to('.steps__orbits', {
  //           xPercent: 50,
  //           yPercent: 84,
  //         });
  
  //         gsap.to('.search-content', {
  //           x: 60,
  //           opacity: 0,
  //           visibility: 'hidden'
  //         });
  
  //         gsap.fromTo('.plan-content', {
  //           x: 200,
  //           opacity: 0,
  //           visibility: 'hidden'
  //         }, {
  //           x: 90,
  //           visibility: 'visible',
  //           opacity: 1,
  //           duration: 1,
  //         });
  
  //       } else if (el.closest('.plan-content')) {
     
  
  //         gsap.to('.steps__orbits', {
  //           xPercent: 36,
  //           yPercent: -86,
  //         });
  
  //         gsap.set('.orbit__design', {
  //           zIndex: 2,
  //         });
  
  //       } else if (el.closest('.design-content')) {
  //         console.log('des');
  //       }
  //     }
  //   });
  // });
  
  
  // // Привязываем функцию к кнопке
  // resetButton.onclick = resetAnimations;
  
  