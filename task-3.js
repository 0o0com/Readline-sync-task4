
function calculateDiscount(price, discountPercentage) {
    var discountAmount = (price * discountPercentage) / 100;
    var discountedPrice = price - discountAmount;
    return discountedPrice;
  }
  
//var price = 100;
//var discountPercentage = 20;
//var discountedAmount = calculateDiscount(price, discountPercentage);
//console.log("Discounted amount:", discountedAmount);