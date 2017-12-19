"use strict";
exports.__esModule = true;
var assignment4_3_interface_1 = require("./assignment4.3_interface");
var indiancow = { breed: " kamadhenu ", country: "India", quantityofmilk: "1500 litres" };
var indiancowdata = assignment4_3_interface_1.cowDetail(indiancow);
console.log(indiancowdata);
var sumofcows = assignment4_3_interface_1.total(2000);
console.log(sumofcows);
