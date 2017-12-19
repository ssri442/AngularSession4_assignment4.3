/** Consuming interface and 2 functions from another file using import */

import { Cow,cowDetail,total } from './assignment4.3module';


let indiancow : Cow = { breed : " kamadhenu " , country : "India" , quantityofmilk : "1500 litres"}
let indiancowdata : string  = cowDetail(indiancow);
console.log(indiancowdata);
let sumofcows:string = total(2000);
console.log(sumofcows);

