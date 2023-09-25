const htmlDocument = document.querySelector('html');
const btnDarkMode = document.querySelector('#btnDark');
const btnDarModeMobile = document.querySelector('#darkModeMobile');

btnDarkMode.addEventListener('click', toogleDarkMode);
btnDarModeMobile.addEventListener('click',toogleDarkMode);

function toogleDarkMode(){
    htmlDocument.classList.toggle('dark');
}

