import menuImage from "./img/menu.jpg"

const renderMenu = (container) => {
    
    const menu = document.createElement('div');
    menu.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = "Menu";

    const img_menu = document.createElement("img");
    img_menu.src = menuImage;
    img_menu.classList.add('hero');

    menu.appendChild(heading);
    menu.appendChild(img_menu);
    container.appendChild(menu);

}

export { renderMenu }