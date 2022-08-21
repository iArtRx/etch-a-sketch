//DOM selectors
const body = document.body;
const header = document.header;
const main = document.main;
const menu = document.querySelector(".menu");
const grid = document.querySelector(".grid");




//Create Grid
const defaultSize = 16;
let size = defaultSize;
let colour = "red";
let onPage = false;


generateGrid = (size) => {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.style.backgroundColor = "white";
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

    
      
          
        
        
       
};


generateGrid(defaultSize);




const colourPicker = document.querySelector("#colour")
colourPicker.addEventListener("click", () => {
        colour = "pink";
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





    







