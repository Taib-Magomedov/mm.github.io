const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    if (nav.classList.contains('header__top-row--mobile')) {
        closeMenu();
    } else {
        openMenu();
    }
};

function openMenu() {
    navBtn.classList.add('nav-icon--active');
    nav.classList.add('header__top-row--mobile');
    document.body.classList.add('no-scroll');

    // Закрываем меню при нажатии на текстовые элементы внутри nav
    const navTextItems = nav.querySelectorAll('a, span');

    navTextItems.forEach(textItem => {
        textItem.onclick = function () {
            closeMenu();
        };
    });
}

function closeMenu() {
    navBtn.classList.remove('nav-icon--active');
    nav.classList.remove('header__top-row--mobile');
    document.body.classList.remove('no-scroll');
}


// navBtn.onclick = function () {
//     navBtn.classList.toggle('nav-icon--active');
//     nav.classList.toggle('header__top-row--mobile');
//     document.body.classList.toggle('no-scroll');
// }


mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        // Очищаем поле, если введен только символ '+'
        if (input.value == '+') input.value = '';

        // Добавляем '+7' при вводе '9'
        if (input.value.endsWith('9') && !input.value.startsWith('+7')) {
            input.value = '+7' + input.value.substring(1);
        }
    });

    input.addEventListener('blur', () => {
        // Очищаем поле, если введен только символ '+'
        if (input.value == '+') input.value = '';
    });
});
// удалить + в номере
// const phoneInputs = document.querySelectorAll('[data-tel-input]');
// phoneInputs.forEach((input) => {
//     input.addEventListener('input', () => {
//         if (input.value == '+') input.value = '';
//     })
//     input.addEventListener('blur', () => {
//         if (input.value == '+') input.value = '';
//     })
// });


const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        const targetId = this.getAttribute('href'); // Получаем ID целевого блока
        const targetElement = document.querySelector(targetId); // Находим целевой блок

        // Плавное прокручивание к целевому блоку
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
