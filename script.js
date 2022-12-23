//DOM selectors
const body = document.body;
const header = document.header;
const main = document.main;
const menu = document.querySelector(".menu");
const grid = document.querySelector(".grid");

//Create Grid
const defaultSize = 16;
let size = defaultSize;
let colour = "#000000";
let background = "#ffffff";
let onPage = false;


generateGrid = (size) => {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.style.backgroundColor = background;
        cell.style.border = "1px solid black";
        grid.insertAdjacentElement("beforeend", cell);
        
        cell.addEventListener("click", () => {
           if(onPage === false){
            cell.style.backgroundColor = colour;
            onPage = true;
           }else if(onPage === true){
            onPage = false;
           };
        });    

        cell.addEventListener("mouseover", () => {
            if(onPage === true) {
                cell.style.backgroundColor = colour;
            }

        });
    };   
    
    console.log(background);
};


generateGrid(defaultSize);


    
const colourPicker = document.querySelector("#colour");
colourPicker.addEventListener("change", (event) => {
    const newColour = event.target.value;
    colour = newColour;
});

const backgroundPicker = document.querySelector("#background-colour");
backgroundPicker.addEventListener("change", (event) => {
    
    const newBackground = event.target.value;
    console.log(newBackground)
   

    const cells = document.querySelectorAll(".cell");

    for (const cell of cells) {

        const cellRGBColour = cell.style.backgroundColor;
        const cellHexColour = rgbToHex(cellRGBColour);
        console.log(cellHexColour)
        
       
        if (cellHexColour === background) {
            cell.style.backgroundColor = newBackground;
        }   
    }

    background = newBackground;
   

});


const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    reset();
});

const resolution = document.querySelector("#resolution");
resolution.addEventListener("click", e => {
    let select = prompt("Enter a resolution:");
    size = parseInt(select);
    document.getElementById("slider-value").textContent = size;
    reset();
});

document.getElementById("slider-value").textContent = size;

updateSlider = () => {

    size = document.getElementById("range-value").value;
    document.getElementById("slider-value").textContent = size;
    reset();

}

reset = () => {
    grid.innerHTML="";
    generateGrid(size);
}

function rgbToHex(rgb) {
    // Extract the red, green, and blue components from the string
    const match = rgb.match(/\d+/g);
    const r = Math.round(match[0]);
    const g = Math.round(match[1]);
    const b = Math.round(match[2]);
    // Convert the RGB values to hexadecimal strings
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");
    // Concatenate the hexadecimal strings and return the result
    return `#${hexR}${hexG}${hexB}`;
  }




    







