const renderAbout = (container) => {

    const about = document.createElement('div');
    about.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = "About";

    about.appendChild(heading);
    container.appendChild(about);
}

export { renderAbout }