import "./styles.css";
import { testmsg } from "./test.js";
import { renderHomePage } from "./home.js";
// import odinImage from "./img/odin.jpg"

// const image = document.createElement("img");
// image.src = odinImage;
// document.body.appendChild(image);

const container = document.querySelector('#content');

const init = () => {
    console.log(container);
    attachEvents();
    setPage();
}

const clearPage = () => {
    container.innerHTML = '';
}

const setPage = () => {

    // Clear the previous page before rendering the new page
    clearPage();
    
    switch (window.location.hash) {
        case '#menu':
            console.log("render the menu page");
            break;
        case '#about':
            console.log("render the about page");
            break;
        default:
            renderHomePage(container);
    }
}

const attachEvents = () => {
    const btnHome =  document.querySelector('#home');
    const btnMenu =  document.querySelector('#menu');
    const btnAbout =  document.querySelector('#about');

    btnHome.addEventListener('click', () => {
        window.location.hash = '#home';
    })
    btnMenu.addEventListener('click', () => {
        window.location.hash = '#menu';
    })
    btnAbout.addEventListener('click', () => {
        window.location.hash = '#about';
    })
}

window.addEventListener('hashchange', setPage);
window.addEventListener('DOMContentLoaded', init);