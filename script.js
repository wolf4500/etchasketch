const gridContainer = document.querySelector(".grid-container");

// Creates the grid cells
for (let i = 0; i < 16; i++) {
    for (let n = 0; n < 16; n++) {
        let div = document.createElement('div');
        const size = (500/16);
        div.setAttribute("style", `border: 1px solid black; width: ${size}px; height: ${size}px;`);
        div.setAttribute("class", `cell`);
        gridContainer.append(div);
    }
}

// Flag to check if mouse is clicked down
let isMouseDown = false;

// Adds background color to the first cell that is clicked down on, otherwise cell is blank.
document.addEventListener("mousedown", (event) => {
    event.preventDefault();
    isMouseDown = true;
    if (event.target.classList.contains("cell")) {
        event.target.style.backgroundColor = "black";
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