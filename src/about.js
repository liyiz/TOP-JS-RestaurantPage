import aboutImage from "./img/pexels-katya-wolf-8715606.jpg"

const renderAbout = (container) => {

    const about = document.createElement('div');
    about.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = "About";

    const img_about = document.createElement('img');
    img_about.src = aboutImage;
    img_about.classList.add('hero');

    const about_body = document.createElement('p');
    about_body.textContent = "Never heard of CHICKEN WINGS? No problem, we're here to help your life taste better. We welcome you to the Wingers Culture of 'Winging it', one of the best stomach fillers to ever be invented! Get your box of CRISPY and JUICY chicken wings with our special recipe sauces! ALL OUR CHICKEN IS HALAL! Our Kitchen Closes an hour before our official closing times!"

    
    about.appendChild(heading);
    about.appendChild(img_about);
    about.appendChild(about_body);
    container.appendChild(about);
}

export { renderAbout }