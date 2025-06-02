const gridContainer = document.querySelector(".grid-container");

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
colorType(false);

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

const color = document.querySelector(".color");

// Sets grid cell rainbow color to false
let colored = false;
color.addEventListener("click", () => {

    // Toggles the black/rainbow color every time color button is pressed.
    colored = !colored;
    colorType(colored);
})

// Toggles grid cells' colors 
function colorType(colored) {
    // Flag to check if mouse is clicked down
    let isMouseDown = false;

    // Adds background color to the first cell that is clicked down on to avoid cell being blank.
    document.addEventListener("mousedown", (event) => {
        isMouseDown = true;
        if (event.target.classList.contains("cell")) {
            event.preventDefault();
            if (colored) {
                const hue = Math.random()*360;
                const saturation = 25 + Math.random()*70;
                const lightness = 85 + Math.random()*10;
                event.target.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            }
            else {
                event.target.style.backgroundColor = "black";
            }
        }
    })

    document.addEventListener("mouseup", () => {
        isMouseDown = false;
    })

    // Adds background color to cells that are being hovered over only if mouse is clicked down.
    gridContainer.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains("cell") && isMouseDown) {
            if (colored) {
                const hue = Math.random()*360;
                const saturation = 25 + Math.random()*70;
                const lightness = 85 + Math.random()*10;
                event.target.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            }
            else {
                event.target.style.backgroundColor = "black"; 
            }
        }   
    })
}




