function ticketPrice(ticketQty){
    let ticketCount100 = 100;
    let ticketCount200 = 90;
    let ticketCount200More = 70;
    let price, discountPrice, moreDiscountPrice, totalTicketPrice;
    if(ticketQty <= 100){
        price = ticketQty * ticketCount100;
        return price;
    }
    else if(ticketQty <= 200 ){
        price = 100 * ticketCount100;
        discountPrice = (ticketQty - 100) * ticketCount200;
        return (price + discountPrice);
    }
    else{
        price = 100 * ticketCount100;
        discountPrice = 100 * ticketCount200;
        moreDiscountPrice = (ticketQty - 200) * ticketCount200More;
        totalTicketPrice = price + discountPrice + moreDiscountPrice;
        return totalTicketPrice;
    }
}

const ticketQty = 150;
const totalPrice = ticketPrice(ticketQty);
console.log("The total price of ticket is: ", totalPrice);