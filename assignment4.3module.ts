/** Creating Module with an interface and 2 functions and exporting them*/
// creating interface Cow //
export interface Cow {
      breed : string;
      country : string;
      quantityofmilk : string;
    
}
//Defining Function cow Deatail for cow data
export function cowDetail(cow : Cow) : string {
  return `The cow details are as follows 
  Breed : ${cow.breed} 
  Country : ${cow.country}
  Quantity of milk:${cow.quantityofmilk}`;
  }
//Defining Function total for number of cows bought
export function total(sum : number) : string {
 return `No of cows: ${sum}`;
}   
