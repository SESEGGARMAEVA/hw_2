 export function min(a, b) {
    if (a < b) {
     return a;
    } else {
     return b; 
    }
 }
   

 export function calculateProfit(dishs, ingredientsPrice) {
    for (let i = 0; i < dishs.length; i++) {
        let food = dishs[i];
        let totalCostPreparation = 0;

    for (let j = 0; j < food.ingredients.length; j++) {
            let ingredient = food.ingredients[j];
            let cost = ingredientsPrice[ingredient];
            totalCostPreparation += cost;
        }
        let profit = food.price - totalCostPreparation;
        food.profit = profit;
    }
}