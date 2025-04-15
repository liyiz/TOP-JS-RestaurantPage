const renderMenu = (container) => {
    
    const menu = document.createElement('div');
    menu.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = "Menu";

    menu.appendChild(heading);
    container.appendChild(menu);
}

export { renderMenu }