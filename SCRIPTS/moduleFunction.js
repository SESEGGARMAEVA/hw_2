function min(a, b) {
    if (a < b) {
        return a;
       } else {
        return b; 
       }
}

function calculateProfit(ingredients, price, ingredientsPrice) {
    let totalCostPreparation = 0;

    for (let j = 0; j < ingredients.length; j++) {
      let ingredient = ingredients[j];
      let cost = ingredientsPrice[ingredient];
      totalCostPreparation += cost;
    }
    let profit = price - totalCostPreparation;
    return profit;
}


export { 
    min, 
    calculateProfit
}