import cantineImage from "./img/pexels-mike-van-schoonderwalt-1884800-5506019-sm.jpg"

const renderHome = (container) => {

    const home = document.createElement('div');
    home.classList.add('page');

    const heading = document.createElement('h1');
    heading.textContent = "Cantine O' Canada";

    const img_cantine = document.createElement('img');
    img_cantine.src = cantineImage;
    img_cantine.classList.add('hero');

    // Location
    const location = document.createElement('div');

    const location_header = document.createElement('h2');
    const location_body = document.createElement('p');
    location_header.textContent = 'Location';
    location_body.textContent = '9242 Windfall Street, Buckingham, QC, J8L 4X1';

    location.appendChild(location_header);
    location.appendChild(location_body);

    // Hours
    const openingTimes = document.createElement('div');
    const openingTimes_header = document.createElement('h2');
    const openingTimes_body = document.createElement('div');
    const openingTimes_table = document.createElement("table");
    const openingTimes_tableBody = document.createElement("tbody");

    openingTimes_header.textContent = 'Opening Times';

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timesOfWeek = ['07:00 - 22:00', '07:00 - 22:00', '07:00 - 22:00', '07:00 - 22:00', '07:00 - 22:00', '08:00 - 15:00', '10:00 - 15:00'];

    // creating all cells
    for (let i = 0; i < 7; i++) {
    // creates a table row
        const row = document.createElement("tr");
        for (let j = 0; j < 2; j++) {

            const cell = document.createElement("td");
            let cellText;

            if (j % 2 === 0) {
                cellText = document.createTextNode(`${daysOfWeek[i]}`);
            } else {
                cellText = document.createTextNode(`${timesOfWeek[i]}`);
            }

            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        openingTimes_tableBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    openingTimes_table.appendChild(openingTimes_tableBody);

    location.classList.add('home-col');
    openingTimes.classList.add('home-col');

    openingTimes.appendChild(openingTimes_header);
    openingTimes.appendChild(openingTimes_body);
    openingTimes.appendChild(openingTimes_table);
    
    home.appendChild(heading);
    home.appendChild(img_cantine);
    home.appendChild(location);
    home.appendChild(openingTimes);

    container.appendChild(home);


}

export { renderHome }