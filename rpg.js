var cash = 0;
var health = 0;
var supp = 0;
function genRandNum(min, max) {
    return Math.floor(Math.random() * (max - min) + max);
}
function genRandNum2(min, max) {
    return Math.floor(Math.random() * (max - min) + max);
}

genRandNum(3, 10);
genRandNum2(1, 3);
function renderRandNum() {
    var rand = genRandNum(3, 10);
    document.getElementById("randNumDiv").innerText = rand;
    cash = cash + rand;
    document.getElementById("cash").innerText = cash;
}
function buyLife() {
    var rand = genRandNum2(1, 3);
    if (cash >= 15) {
    cash = cash - 15;
    document.getElementById("cash").innerText = cash;
    health = health + rand;
    document.getElementById("health").innerText = health;
    } else if (cash < 15) {
        document.getElementById("cash").innerText = "you are bork!";
    }
}
function buySupplies() {
    var number = Math.random();
    if (cash >= 1000 && health >= 100) {
        cash = cash - 1000;
        document.getElementById("cash").innerText = cash;
        health = health - 100;
        document.getElementById("health").innerText = health;
        supp = supp + number;
        document.getElementById("supplies").innerText = supp;
    } else if (cash < 1000 && health < 100) {
        document.getElementById("health").innerText = "You are sack!";
    }
}
console.log(cash);