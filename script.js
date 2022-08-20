//DOM selectors
const body = document.body;
const header = document.header;
const main = document.main;
const menu = document.querySelector(".menu");
const grid = document.querySelector(".grid");



//Create Grid
let size = 16;
let color = "black";

grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = "white";
    cell.style.border = "1px solid black"
    grid.insertAdjacentElement("beforeend", cell);


    cell.addEventListener("mouseover", e => {
        cell.style.backgroundColor = color;
    });

}

const colourPicker = document.querySelector("#colour")


colourPicker.addEventListener("click", () => {
        color = "pink";
        console.log(pink)
    });


    







