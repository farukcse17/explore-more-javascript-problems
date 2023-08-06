const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Oppo', camera: 16, storage: '32gb', price: 30000, color: 'blue'},
    {name: 'Walton', camera: 17, storage: '64gb', price: 24000, color: 'silver'},
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // if(phone.price < 30000){
        //     return phone;
        // }

        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

let result = cheapestPhone(phones)
console.log(result);