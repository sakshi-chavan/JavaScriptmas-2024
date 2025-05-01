// By using forEach() method

function calculateCost(arr) {
    // Your code here!
    let totalCost = 0;
    arr.forEach(item => {
        if(item.isGift) {
            totalCost += item.price
        };
    });
    return totalCost.toFixed(2);
}

console.log(calculateCost(shoppingCartData)) //559.93 


// Stretch Goal: By using reduce() method

function calculateCost(arr) {
    return arr.reduce((total, item) => {
        return item.isGift ? total += item.price : total;
       }, 0).toFixed(2);
}

console.log(calculateCost(shoppingCartData)) //559.93 

