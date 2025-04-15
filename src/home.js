import cantineImage from "./img/cantine.jpg"

const renderHome = (container) => {

    const home = document.createElement('div');
    home.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = "Cantine O' Canada";

    const img_cantine = document.createElement("img");
    img_cantine.src = cantineImage;
    img_cantine.classList.add('hero');

    home.appendChild(heading);
    home.appendChild(img_cantine);

    container.appendChild(home);


}

export { renderHome }