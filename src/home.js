const renderHome = (container) => {

    const home = document.createElement('div');
    home.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = "Cantine Oh Canada";

    home.appendChild(heading);
    container.appendChild(home);
}

export { renderHome }