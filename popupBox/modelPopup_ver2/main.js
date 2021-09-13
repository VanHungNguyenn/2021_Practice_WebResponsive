var open = document.querySelector('#open');
var close = document.querySelector('#close');

var box = document.querySelector('.box');

open.addEventListener('click', () => {
    box.style.display = 'block';
});

close.addEventListener('click', () => {
    box.style.display = 'none';
});