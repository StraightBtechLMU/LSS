const burger = document.querySelector('#menu');
const menu = document.querySelector('.ul-menu');
const menu1 = document.querySelector('.head-phone');


burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
}
    //     burger.addEventListener('click', () => {
    //     if (menu1.classList.contains('hidden')) {
    //         menu1.classList.remove('hidden');
    //     }
    //     else {
    //         menu1.classList.add('hidden');
    //     }
    // }
);