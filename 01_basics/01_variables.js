const orderId = 12345  //Never changes
var orderName = "Shoe"
let orderEmail = "order@gmail.com"
orderAddress = "India"
let orderState


// orderId = 43343 // not allowed
orderName = "Ball"
orderEmail = "avb@gmail.com"
orderAddress = "USA"

/*
var can cause issues in block and functional scope, instead use let 
*/ 

// console.log(orderName);
console.table([orderId,orderName,orderEmail,orderAddress,orderState])
