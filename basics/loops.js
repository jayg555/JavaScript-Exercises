//----------Loops----------//

//-----While-----//
// let countDown = [];
// let i=10;
// while(i > 0){
// 	countDown.push(i);
// 	i--;
// 	console.log(i)
// }
// console.log(countDown);

//-----Do While-----//

var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

//-----For-----//
let countUp = [];
for(let i = 0; i <= 15; i++){
	countUp.push(i);
	console.log(i);
}
console.log(countUp);

//---Adding values inside an array---//
let myNumbers = [2,3,4,5,6]

let total = 0;
for(let i = 0; i < myNumbers.length; i++){
	console.log(total += myNumbers[i])
}


//-----Nested loop-----//

//---Multiplying---//
function findSubProducts(myArray){
 var product = 1;

 	for (let i = 0; i < myArray.length; i++){
		//  console.log(`[i] is at index ${i}`)

	 	for (let j = 0; j < myArray[i].length; j++){
			// console.log(`[j] is at index ${j}`)
		 product *= myArray[i][j];
		 
		}
	}
	 console.log(product)
	 return product; 
}


 findSubProducts([[1],[2],[3]]);
 // 6

 findSubProducts([[1,2],[3,4],[5,6,7]])
 //5040



