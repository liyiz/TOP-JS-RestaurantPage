/* <h1>Cantine Oh Canada</h1>
<img src="./img/cantine.jpg"/>
<p>Your brilliant and reliable local cantine. Come on down for your fill of classic meals like burgers, pizzas, fries and poutine!</p> */

const renderHomePage = (container) => {
        const heading = document.createElement( 'h1' );
        heading.innerText = "Cantine Oh Canada";
        container.appendChild( heading );
}

export {
    renderHomePage
}