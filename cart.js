///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
console.log("Cart Total:", cartTotal);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxedTotal = cartTotal + cartTotal * tax;
    const finalPrice = taxedTotal - couponValue;
    return finalPrice;
}

const finalPrice = calcFinalPrice(cartTotal, 2.50, 0.08);
console.log("Final Price:", finalPrice);


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
 
 1. name: String - To store the customer's name for personalization.
2. email: String - To store the customer's email for communication.
3. address: String - To store the customer's address for delivery.
4. loyaltyPoints: Number - To store the customer's loyalty points for rewards.

These properties are chosen because they provide essential information for processing orders, communication, and customer relationship management. 
The data types are chosen based on the nature of the information they represent (names and emails are strings, and loyalty points are numbers).

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: 'Azus McGronky',
    email: 'AzusMcG@gmail.com',
    address: '5839 North Southern St, Smalltown City',
    loyaltyPoints: 120
};

console.log("Customer:", customer);