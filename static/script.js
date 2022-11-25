const Parse = require('parse/node');

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'AcRFBIH6dktg5dRgPVPytr2uvmw8NJFsXtIuiFPd', // This is your Application ID
  '4U6njjdDMs68vIgkQmYAll2SBzsRfc5tAhUz5Ck9', // This is your Javascript key
  'g75At6mGLAA5yGl7b5eoAOfdtl6lSA7KFJ4Uyiix' // This is your Master key (never use it in the frontend)
);

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list","bi-x")
    : menuMobile.classList.replace("bi-x","bi-list");

    body.classList.toggle("menu-nav-active");
});

/* Fecha o menu quando clicar em algum item e muda o icone para list */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})