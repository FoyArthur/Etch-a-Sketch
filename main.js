let color = 'rgb(0, 0, 0)';
const slider = document.querySelector(".theslider");
const label = document.querySelector(".label");
const container = document.querySelector(".container");


createBoard();




slider.addEventListener("input", () => {
    label.textContent = `${slider.value} x ${slider.value}`;
    destroyBoard();
    createBoard();
});

function change(color2) {
    color = color2;
}


function createBoard() {
    console.log(slider.value);
    let size = 100.00/slider.value;
    container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;

    for(let i = 0; i < slider.value * slider.value; i++) {
        let x = document.createElement("div");
        x.className = "grid";
        container.appendChild(x);
        x.addEventListener("mouseover", backgroundColor)
    }
}

function backgroundColor(event) {
    event.target.style.backgroundColor = color;
    console.log(color);
    if(color === 'rgb(0, 0, 0)' || color === 'rgb(255, 255, 255)') {
        console.log("yessir")
    } else {
        console.log("hello");
        color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +  "," + Math.floor(Math.random() * 256) + ")";

    }
}

function destroyBoard() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}






