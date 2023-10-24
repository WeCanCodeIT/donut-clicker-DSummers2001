let donut = document.querySelector('.donutCost');
let parsedDonut = parseFloat(donut.innerHTML)

let clickerCost = document.querySelector('.clickerCost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML)

function buyClicker(){
    if (parsedDonut >= parsedClickerCost){
        parsedDonut -= parsedClickerCost
        donut.innerHTML = parsedDonut
    }
}

function incrementDonut(){
    parsedDonut += 1
    donut.innerHTML = parsedDonut
}