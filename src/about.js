import aboutImage from "./img/pexels-katya-wolf-8715606.jpg"

const renderAbout = (container) => {

    const about = document.createElement('div');
    about.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = "About";

    const img_about = document.createElement("img");
    img_about.src = aboutImage;
    img_about.classList.add('hero');

    about.appendChild(heading);
    about.appendChild(img_about);
    container.appendChild(about);
}

export { renderAbout }