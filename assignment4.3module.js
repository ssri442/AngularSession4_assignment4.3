"use strict";
/** Creating Namespace with an interface and 2 functions*/
exports.__esModule = true;
function cowDetail(cow) {
    return "The cow details are as follows \n  Breed : " + cow.breed + " \n  Country : " + cow.country + "\n  Quantity of milk:" + cow.quantityofmilk;
}
exports.cowDetail = cowDetail;
function total(sum) {
    return "No of cows: " + sum;
}
exports.total = total;
