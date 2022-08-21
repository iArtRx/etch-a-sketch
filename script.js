//DOM selectors
const body = document.body;
const header = document.header;
const main = document.main;
const menu = document.querySelector(".menu");
const grid = document.querySelector(".grid");




//Create Grid
const defaultSize = 16;
let size = defaultSize;
let color = "red";


generateGrid = (size) => {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.style.backgroundColor = "white";
        cell.style.border = "1px solid black";
        grid.insertAdjacentElement("beforeend", cell);
        
        let onPage = false;

        cell.addEventListener("mousedown", () => {
            onPage = true;
        })

        
        cell.addEventListener("mouseover", () => {
            if(onPage === true) {
                cell.style.backgroundColor = color;
            }
        });
    };

      
          
        
        
       
};


generateGrid(defaultSize);




const colourPicker = document.querySelector("#colour")
colourPicker.addEventListener("click", () => {
        color = "pink";
    });

const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    reset();
});

const resolution = document.querySelector("#resolution");
resolution.addEventListener("click", e => {
    let select = prompt("Enter a resolution:");
    size = parseInt(select);
    reset();
});

reset = () => {
    grid.innerHTML="";
    generateGrid(size);
}





    







