import menuImage from "./img/menu.jpg"
import { items as menu_items } from "./menu_items";

const renderMenu = (container) => {
    
    const menu = document.createElement('div');
    menu.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = "Menu";

    const img_menu = document.createElement("img");
    img_menu.src = menuImage;
    img_menu.classList.add('hero');

    const item = renderMenuItem(menu_items[0]);

    // Create for loop to iterate through objects array
    // import objects array

    menu.appendChild(heading);
    menu.appendChild(img_menu);

    menu.appendChild(item);

    container.appendChild(menu);

    // TODO:
    // 1. Create objects array of menu items - name, description, price, image
    // 2. Create a function that takes objects array and then populates the menu cards.

}

const renderMenuItem = ( { name, description, price, img_src } ) => {

    const item = document.createElement('div');
    item.classList.add('menu-item');

    const item_blurb = document.createElement('div');
    item_blurb.classList.add('menu-item-blurb');
    
    const item_name = document.createElement('p');
    item_name.textContent = name;
    const item_description = document.createElement('p');
    item_description.textContent = description;
    const item_price = document.createElement('p');
    item_price.textContent = price;

    item_blurb.appendChild(item_name);
    item_blurb.appendChild(item_description);
    item_blurb.appendChild(item_price);

    const item_img = document.createElement('img');
    item_img.src = img_src;

    item.appendChild(item_blurb);
    item.appendChild(item_img);

    return item;

}

export { renderMenu }