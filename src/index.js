import "./styles.css";
import { testmsg } from "./test.js";
import odinImage from "./odin.jpg"

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);

console.log(testmsg);