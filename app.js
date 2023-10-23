let count = 0;

const donutButton = document.getElementById("donut");
const countDisplay = document.getElementById("count");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownList = document.getElementById("dropdownList");

donutButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = `Cookies: ${count}`;
});

dropdownButton.addEventListener('click', () => {
    dropdownList.classList.toggle('show');
});

window.addEventListener('click', (event) => {
    if (!event.target.matches('#dropdownButton')){
        dropdownList.classList.remove('show');
    }
});