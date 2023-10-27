let donut = document.querySelector('.donutCost');
let parsedDonut = parseFloat(donut.innerHTML);
let donutImg = document.querySelector('.donutImg');
let clickerCost = document.querySelector('.clickerCost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let autoClickerLevel = 0;
let autoLevel = document.querySelector('.clickerLevel');
let autoClickerInterval;


function purchaseItem(){
    if (parsedDonut >= parsedClickerCost){
        alert('Item purchased');
        parsedDonut -= parsedClickerCost;
        donut.innerHTML = parsedDonut;

        parsedClickerCost = Math.round(parsedClickerCost * 1.1);
        clickerCost.innerHTML = parsedClickerCost;

        autoClickerLevel ++;
        autoLevel.innerHTML = autoClickerLevel;
        autoClickerInterval = setInterval(autoClickerCount, 1000);
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

function autoClickerCount(){
    parsedDonut += autoClickerLevel;
    donut.innerHTML = parsedDonut;
}