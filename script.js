const gridContainer = document.querySelector(".grid-container");

// Updates slider value when slider is moved 
const slider = document.querySelector("#slider");
const sliderDisplay = document.querySelector(".sliderDisplay");
slider.addEventListener("input", () => {
    const value = slider.value;
    sliderDisplay.textContent = `${value}x${value}`;
})

const apply = document.querySelector(".apply");
apply.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    createGrid(slider.value);
})

// Creates the grid cells
function createGrid(sliderValue) {
    for (let i = 0; i < sliderValue; i++) {
        for (let n = 0; n < sliderValue; n++) {
            let div = document.createElement('div');
            const size = (600/sliderValue);
            div.setAttribute("style", `border-top: 0.5px; border-right: 0.5px; border-bottom: 0px; border-left: 0px;
                            border-style: solid; border-color: black; width: ${size}px; height: ${size}px;`);
            div.setAttribute("class", `cell`);
            gridContainer.append(div);
        }
    }
}

createGrid(16);

// Flag to check if mouse is clicked down
let isMouseDown = false;

// Adds background color to the first cell that is clicked down on, otherwise cell is blank.
document.addEventListener("mousedown", (event) => {
    isMouseDown = true;
    if (event.target.classList.contains("cell")) {
        event.target.style.backgroundColor = "black";
        event.preventDefault();
    }
})

document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

// Adds background color to cells that are being hovered over only if mouse is clicked down.
gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains("cell") && isMouseDown) {
        event.target.style.backgroundColor = "black";
    }
})


