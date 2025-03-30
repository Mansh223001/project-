const generateColorButton = document.getElementById('generate-color');
const colorDisplay = document.getElementById('color-display');

generateColorButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    colorDisplay.style.backgroundColor = randomColor;
    colorDisplay.textContent = `This is my new color: ${randomColor}`;
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}