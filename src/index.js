import './styles.css';
import { testmsg } from './test.js';
import { renderHome } from './home.js';
import { renderMenu } from './menu.js';
import { renderAbout } from './about.js';
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

const setPage = () => {
    // switch case to handle state via URL hash
    // check https://developer.mozilla.org/en-US/docs/Web/API/Location/hash
    // but essentially a tag is added to the end of the url that can be accessed via browser api
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/hash
    switch (window.location.hash) {
        case '#menu':
            renderPage(renderMenu);
            break;
        case '#about':
            renderPage(renderAbout);
            break;
        default:
            renderPage(renderHome);
    }
}

const renderPage = (pageFunction) => {
    // Clear the previous page before rendering the new page
    container.innerHTML = '';
    pageFunction(container);
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

// https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent
window.addEventListener('hashchange', setPage); 
window.addEventListener('DOMContentLoaded', init);