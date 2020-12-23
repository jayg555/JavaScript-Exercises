

const  runVariables = () =>{

	//Declaring variables
	var myVar = "Hello World";
	console.log(myVar);


	//Changing a variable 
	// The out put will be changed to Hello James
	myVar = "Hello James";
	console.log(myVar);

	//Assigning a value of a variable to another variable
	//aNewVariable will have the same value as myVar
	var aNewVariable = myVar;
	console.log(aNewVariable);

 //-----------Operators-----------//

	//Adding values to a variable
	 //aNum = 30
	var aNum = 10;
	aNum = aNum + 20;
	console.log(aNum);

		//Adding
		aNum += 10
			//aNum = 40
			console.log(aNum)

		//Subtracting 
		aNum -= 20
			//aNum = 20
			console.log(aNum);

		//Multiplying
		aNum *= 2
			//aNum = 40
			console.log(aNum);

		//Dividing 
		aNum /= 10;
			// aNum = 4
			console.log(aNum);	
	
	//Finding the remainder for a number
	var whatsTheRemainder = 5 % 3
		// 2
		console.log(whatsTheRemainder); 
};

//To run the function you need to call the function
runVariables();


//-----------Strings----------// 
const learStrings = () => {

	var myName = "James";
	let addToMyString = "Hello my name is " + myName;

	console.log(addToMyString);

	// with +=
	addToMyString += " Gamboa";
	console.log(addToMyString);

	// String interpolation
	var mySkill = "Software Developer";

		let whoAmI = `${myName} is the best ${mySkill}`
		console.log(whoAmI); 

}
learStrings();

//----------Bracket Notation----------//
const learnBrackets = () =>{

	//Finding a letter in a string
	var currently = "Looking for a job";
		let findTheLetter = currently[14];
	
		// currently[14] = j
		console.log(findTheLetter);

	//Finding the last letter of a string
	let findLastLetter = currently[currently.length - 1];

		// findLastLetter = b
		console.log(findLastLetter);

	const whatDoIneed = `A ${findTheLetter} ${currently[currently.length - 2]} ${findLastLetter}`;
	console.log(whatDoIneed);
};
learnBrackets();

//----------Arrays----------//

const learnArrays = () => {

	//Storing values
	let myLanguages = ["javaScript", "C#", "SQL"]
	console.log(myLanguages);

	//Storing arrays inside an array (multi-dimensional array)
	let myFriends = [["Leo", 32], ["Ernie", 35], ["Sati", 32]];
	console.log(myFriends);

	//-----Methods-----//
	//Push
	myLanguages.push("Love");
	console.log(myLanguages);
	
	//Pop
	//Returns the last item in the array
	let thatsNotAlanguage = myLanguages.pop();

	// thatNotAlanguage = Love
	console.log(thatsNotAlanguage);
		
		//And removes it from the array
		console.log(myLanguages);
	
	//Shift
	//removes the first item in the array
	myLanguages.shift();
	console.log(myLanguages);

	//Unshift
	//Adds to the beggining
	myFriends.unshift(["John", 25]);
	console.log(myFriends)
	

}
learnArrays();