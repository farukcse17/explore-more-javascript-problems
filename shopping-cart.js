let shoppingCart = [
    {name: 'shoe', price: 1200, qty: 2},
    {name: 'shirt', price: 2000, qty: 4},
    {name: 'pant', price: 1500, qty: 3},
    {name: 'belt', price: 600, qty: 2},
];

function shoppingCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const totalPrice = product.price * product.qty;
        sum = sum + totalPrice;
    }
    return sum;
}

const totalPrices = shoppingCost(shoppingCart);
console.log(totalPrices);