import menuImage from "./img/menu.jpg"

const renderMenu = (container) => {
    
    const menu = document.createElement('div');
    menu.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = "Menu";

    const img_menu = document.createElement("img");
    img_menu.src = menuImage;
    img_menu.classList.add('hero');

    const item = document.createElement('div');
    item.classList.add('menu-item');

    const item_blurb = document.createElement('div');
    item_blurb.classList.add('menu-item-blurb');
    
    const item_name = document.createElement('p');
    item_name.textContent = 'menu item #01'
    const item_description = document.createElement('p');
    item_description.textContent = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.'
    const item_price = document.createElement('p');
    item_price.textContent = '$14.99'

    item_blurb.appendChild(item_name);
    item_blurb.appendChild(item_description);
    item_blurb.appendChild(item_price);

    const item_img = document.createElement('img');
    item_img.src = 'https://picsum.photos/200';

    item.appendChild(item_blurb);
    item.appendChild(item_img);

    menu.appendChild(heading);
    menu.appendChild(img_menu);

    menu.appendChild(item);

    container.appendChild(menu);

    // TODO:
    // 1. Create objects array of menu items - name, description, price, image
    // 2. Create a function that takes objects array and then populates the menu cards.

}

export { renderMenu }