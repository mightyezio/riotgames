const buttona = document.getElementsById('.buttona');
const modal_container = document.getElementsById('.modal_container');
const close = document.getElementsById('.close');

buttona.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});