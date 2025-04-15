import "./styles.css";
import { testmsg } from "./test.js";
// import odinImage from "./img/odin.jpg"

// const image = document.createElement("img");
// image.src = odinImage;
// document.body.appendChild(image);

const container = document.querySelector('#content');

const init = () => {
    console.log(container);
}

window.addEventListener('hashchange', init);
window.addEventListener('DOMContentLoaded', init);