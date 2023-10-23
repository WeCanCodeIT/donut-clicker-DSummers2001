let count = 0;
let clickValue = 1;
let autoDonutRate = 0;
let autoDonuts = 0;

const donutButton = document.getElementById("donut");
const countDisplay = document.getElementById("count");
const upgradeSelect = document.getElementById("upgradeSelect");
const purchaseButton = document.getElementById("purchaseButton");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownList = document.getElementById("dropdownList");

function updateDisplay(){
    CountDisplay.textContent = count;
    upgradeSelect.options[0].text = `Faster Clicks (10 Donuts, Current: ${clickValue}x)`;
    upgradeSelect.options[1].text = `Auto Donuts (50 Donuts, Current: ${autoDonutRate} per second)`;
}

donutButton.addEventListener('click', () => {
    donutCount += clickValue;
    updateDisplay();
});

upgradeSelect.addEventListener('change', () =>{
    const selectedValue = upgradeSelect.value;
        if (donutCount >= selectedValue){
            if (selectedValue === '1'){
                clickValue +=1;
            } else if (selectedValue === '5'){
                autoDonutRate += 1;
                autoDonuts += autoDonutRate;
            }
            donutCount -= selectedValue;
            upgradeSelect.selectedIndex = 0;
            updateDisplay();
        }
});

function autoDonutClick(){
    donutCount += autoDonuts;
    updateDisplay();
}

setInterval(autoDonutClick, 1000);

updateDisplay();