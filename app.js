const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const sayValue = document.querySelector('h4');
const randColorBtn = document.querySelector('.randcolor');
const clearBtn = document.querySelector('.clear');

let sliderValue = slider.value;

let r = Math.round(Math.random() * 256);
let g = Math.round(Math.random() * 256);
let b = Math.round(Math.random() * 256);

sayValue.innerText = `Current grid size: ${sliderValue}`;


function buildCells() {
    container.style.setProperty('--grid-rows', sliderValue);
    container.style.setProperty('--grid-cols', sliderValue);
    container.innerHTML = ''; 
    for (i = 0; i < (sliderValue * sliderValue); i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-item';
        cell.addEventListener('mouseenter', newColor);
        container.appendChild(cell);
    }
}

function newColor(e){
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function randColor(){
    r = Math.round(Math.random() * 256);
    g = Math.round(Math.random() * 256);
    b = Math.round(Math.random() * 256);
    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

slider.addEventListener('change', function(){
    sliderValue = slider.value;
    sayValue.innerText = `Current grid size: ${sliderValue}`;
    buildCells();
})

randColorBtn.addEventListener('click', randColor);
clearBtn.addEventListener('click', buildCells);

buildCells();

