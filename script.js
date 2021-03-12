'use strict';

const popUp = document.querySelector('.pop-up');
const overlay = document.querySelector('.overlay');

document.querySelector('.object').addEventListener('click', function() {
    popUp.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

overlay.addEventListener('click', function() {
    popUp.classList.add('hidden');
    overlay.classList.add('hidden');
});