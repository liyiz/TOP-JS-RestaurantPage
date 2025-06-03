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


    // Create for loop to iterate through objects array
    // import objects array

    menu.appendChild(heading);
    menu.appendChild(img_menu);

    menu_items.forEach((item) => {
        const to_render = renderMenuItem(item);
        menu.appendChild(to_render);
    });

    container.appendChild(menu);
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
    // const item_img = new Image(); // viable alternative, but this is more for usage that isn't immediately inserting to DOM - like preloading or caching prior to inserting to DOM.
    item_img.src = img_src;

    item.appendChild(item_blurb);
    item.appendChild(item_img);

    return item;

}

export { renderMenu }