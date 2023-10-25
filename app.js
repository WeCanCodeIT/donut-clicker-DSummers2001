let donut = document.querySelector('.donutCost');
let parsedDonut = parseFloat(donut.innerHTML);

let clickerCost = document.querySelector('.clickerCost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);

let autoClickerLevel = document.getElementById('.clickerLevel');
let autoClickerInterval;

function purchaseItem(){
    if (parsedDonut >= parsedClickerCost){
        alert('Item purchased');
        parsedDonut -= parsedClickerCost;
        donut.innerHTML = parsedDonut;

        parsedClickerCost *= 1.2;
        clickerCost.innerHTML = parsedClickerCost;

        autoClickerLevel++;

        clearInterval(autoClickerInterval);
        autoClickerInterval = setInterval(incrementDonut, 1000 / autoClickerLevel);
    } else {
        alert('Insufficient balance to purchase this item.');
    }
}

function buyClicker(){
    if (parsedDonut >= parsedClickerCost){
        parsedDonut -= parsedClickerCost;
        donut.innerHTML = parsedDonut;
    }
}

function incrementDonut(){
    parsedDonut += 1;
    donut.innerHTML = parsedDonut;
}